import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Search, Menu, Bell, Bookmark, Clock, TrendingUp, ChevronRight } from 'lucide-react';
import { useState, useEffect, useContext } from "react";
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import Header from "@layouts/header/header.jsx";
import Footer from "@layouts/footer/footer.jsx";
import AppContext from "@context/app-context";
import axios from "axios";
import "./news.css";

export default function News() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [months, setMonths] = useState([]);
  const [newsData, setNewsData] = useState([]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedYear, setExpandedYear] = useState(null);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSelectedYear(currentYear);
    setSelectedMonth(currentMonth);
  }, [currentYear, currentMonth]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(`${urlApi}landing/g/news`, {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
        });

        const { news, months } = response.data[0].section_one;

        const formattedNews = Object.entries(news).map(([key, value]) => ({
          id: key,
          title: value.title,
          description: value.description,
          date: value.date,
          image: value.image,
        }));

        const formattedNewsData = formattedNews.map((item) => ({
          ...item,
          date: item.date.slice(0, 7),
        }));

        const mostRecentNews = formattedNewsData.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        )[0];
        const [recentYear, recentMonth] = mostRecentNews.date.split("-");

        setNewsData(formattedNewsData);
        setMonths(months);
        setSelectedYear(parseInt(recentYear));
        setSelectedMonth(parseInt(recentMonth));
      } catch (error) {
        console.error(error);
      }
    };

    getNews();
  }, [urlApi, apiKey]);

  const formatNewsData = (data) => {
    return data.map((item) => ({
      ...item,
      date: item.date.slice(0, 7),
    }));
  };

  const filteredNewsData = formatNewsData(newsData);

  const years = Array.from(
    new Set(filteredNewsData.map((item) => parseInt(item.date.split("-")[0])))
  ).sort();

  const filteredData = filteredNewsData.filter((item) => {
    const [year, month] = item.date.split("-");
    return (
      (!selectedYear || selectedYear === parseInt(year)) &&
      (!selectedMonth || selectedMonth === parseInt(month))
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleYear = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
    setSelectedYear(year);
    setSelectedMonth(null);
    setCurrentPage(1);
  };

  const selectMonth = (monthIndex) => {
    setSelectedMonth(monthIndex + 1);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header dataHeader={context.dataHeader} />

      {/* <div className="container__news principal_div">
        <main className="news">
          <section className="section__news">
            {filteredData.length > 0 ? (
              currentData.map((item, index) => (
                <article className="article__news" key={index}>
                  <div className="cntr-text__news">
                    <h1 className="title__news">{item.title}</h1>
                    <p className="text__news">{item.description}</p>
                    <p className="date__news">{item.date}</p>
                  </div>
                  <div className="cntr-img__news">
                    <img src={item.image} alt="img" className="img__news" />
                  </div>
                </article>
              ))
            ) : (
              <p className="no-news-message text-8xl">No hay noticias</p>
            )}
          </section>

          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`page-button ${currentPage === i + 1 ? "active" : ""
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </main>
        <aside className="date">
          <ul className="cntr__date">
            {years.map((year) => (
              <li key={year}>
                <div onClick={() => toggleYear(year)} className="title__date">
                  {year}
                </div>
                <ul
                  className={`months__list ${expandedYear === year ? "expand" : ""
                    }`}
                >
                  {expandedYear === year &&
                    months.map((month, index) => (
                      <li
                        key={month}
                        className="month__item"
                        onClick={() => selectMonth(index)}
                      >
                        {month}
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </aside>
      </div> */}

      <div className="min-h-screen mt-10 py-10 bg-black text-zinc-100 px-20">
        {/* Date Filter */}
        <div className="container py-4 border-b border-zinc-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-lg font-medium">Filter News by Date</h2>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <label htmlFor="month-select" className="text-sm text-zinc-400">
                  Month:
                </label>
                <select
                  id="month-select"
                  className="h-9 rounded-full bg-zinc-800 border-zinc-700 text-zinc-100 text-sm focus:ring-zinc-700 focus:border-zinc-700 px-4"
                  defaultValue={(new Date().getMonth() + 1).toString()}
                >
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="year-select" className="text-sm text-zinc-400">
                  Year:
                </label>
                <select
                  id="year-select"
                  className="h-9 rounded-full bg-zinc-800 border-zinc-700 text-zinc-100 text-sm focus:ring-zinc-700 focus:border-zinc-700 px-4"
                  defaultValue={new Date().getFullYear().toString()}
                >
                  {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <Button className="rounded-full" size="sm">
                Apply Filter
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Reset
              </Button>
            </div>
          </div>
        </div>

        <main className="container py-8">
          {/* Hero Section */}
          <section className="mb-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {filteredData.length > 0 ? (
                currentData.map((item, index) =>
                  index === 0 ? (
                    <div key={index} className="relative overflow-hidden rounded-2xl">
                      <img
                        src={item.image}
                        alt="Featured news"
                        width={800}
                        height={600}
                        className="aspect-[16/9] w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-0 p-6">
                        <Badge className="mb-2 bg-red-600 hover:bg-red-700 rounded-full">Breaking</Badge>
                        <h1 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                          {item.title}
                        </h1>
                        <p className="mb-4 max-w-md text-zinc-200">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-zinc-400" />
                            <span className="text-sm text-zinc-400">2 hours ago -  {item.date}</span>
                          </div>
                          <Button variant="secondary" className="rounded-full">
                            Read More
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : null
                )
              ) : (
                <p className="no-news-message text-8xl">No hay noticias</p>
              )}

              <div className="space-y-6">
                <div>
                  <h2 className="mb-4 text-2xl font-bold">Top Stories</h2>
                  <div className="space-y-4">
                    {filteredData.length > 0 ? (
                      currentData.map((item, index) =>
                        // index !== 0 ? (
                        <Card key={index} className="bg-zinc-800 border-zinc-700 rounded-xl overflow-hidden">
                          <div className="flex gap-4">
                            <img
                              src={item.image}
                              alt={`News ${index}`}
                              width={120}
                              height={120}
                              className="aspect-square object-cover"
                            />
                            <div className="flex flex-col justify-center py-4">
                              <Badge className="w-fit mb-2 bg-zinc-700 text-zinc-200 hover:bg-zinc-600 rounded-full">
                                {item.title}
                              </Badge>
                              <h3 className="font-medium text-white text-lg">
                                {item.description}
                              </h3>
                              <div className="mt-2 flex items-center text-sm text-zinc-400">
                                <Clock className="mr-1 h-3 w-3" />
                                {["4 hours ago", "6 hours ago", "12 hours ago"][index - 1]}
                              </div>
                            </div>
                          </div>
                        </Card>
                        // ) : null
                      )
                    ) : (
                      <p className="no-news-message text-8xl">No hay noticias</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Browse by Category</h2>
              <Button variant="link" className="gap-1 text-zinc-400 hover:text-white">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {["Politics", "Technology", "Business", "Science", "Health", "Entertainment"].map((category) => (
                <Card
                  key={category}
                  className="bg-zinc-800 border-zinc-700 rounded-xl hover:bg-zinc-700 transition-colors"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-zinc-700 p-3">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <h3 className="font-medium">{category}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Latest News Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Latest News</h2>
              <Button variant="link" className="gap-1 text-zinc-400 hover:text-white">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {filteredData.length > 0 ? (
                currentData.map((item, index) =>
                  <Card key={index} className="bg-zinc-800 border-zinc-700 rounded-xl overflow-hidden">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={`Article ${index + 1}`}
                        width={400}
                        height={200}
                        className="aspect-[2/1] w-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-zinc-700 text-zinc-200 hover:bg-zinc-600 rounded-full">
                        {item.title}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="mb-2 text-lg font-medium">
                        {item.description}
                      </h3>
                      <p className="mb-4 text-sm text-zinc-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-zinc-400">
                          <Clock className="mr-1 h-3 w-3" />
                          {["2 hours ago", "4 hours ago", "6 hours ago", "8 hours ago", "10 hours ago", "12 hours ago"][index]}
                        </div>
                        <Button variant="ghost" size="sm" className="rounded-full">
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )) : null}
            </div>
          </section>

        </main>
      </div>
      <Footer />
    </>
  );
}

