import { Card, CardContent } from "../../components/ui/card";
import { useState, useEffect, useContext } from "react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";
import Header from "@layouts/header/header.jsx";
import Footer from "@layouts/footer/footer.jsx";
import AppContext from "@context/app-context";
import axios from "axios";
import "./news.css";

export default function News() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [newsData, setNewsData] = useState([]);
  const [categories, setCategories] = useState([]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [mostRecentYear, setMostRecentYear] = useState(currentYear);
  const [mostRecentMonth, setMostRecentMonth] = useState(currentMonth);

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSelectedYear(currentYear);
    setSelectedMonth(currentMonth);
  }, [currentYear, currentMonth]);


  async function getDataNews() {
    try {
      const response = await axios.get(`${urlApi}landing/g/re-news`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      });

      const rawNews = response.data;

      const formattedNews = rawNews.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image,
        date: item.date.slice(0, 10), // YYYY-MM-DD
        category: item.category,
      }));

      const mostRecentNews = formattedNews.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      )[0];

      const [recentYear, recentMonth] = mostRecentNews.date.split("-");

      setMostRecentYear(parseInt(recentYear));
      setMostRecentMonth(parseInt(recentMonth));

      setNewsData(formattedNews);
      setSelectedYear(parseInt(recentYear));
      setSelectedMonth(parseInt(recentMonth));

      const uniqueCategories = Array.from(
        new Set(formattedNews.map((n) => n.category))
      );

      setCategories(uniqueCategories);
    } catch (error) {
      console.error(error);
    }
  }

  const years = Array.from(
    new Set(newsData.map((item) => parseInt(item.date.split("-")[0])))
  ).sort();

  const filteredData = newsData.filter((item) => {
    const [year, month] = item.date.split("-");
    return (
      (!selectedYear || selectedYear === parseInt(year)) &&
      (!selectedMonth || selectedMonth === parseInt(month)) &&
      (!selectedCategory || selectedCategory === item.category)
    );
  });

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  async function loadNews() {
    await getDataNews();
    return true;
  }

  useEffect(() => {
    context.getDataPage(loadNews());
  }, [urlApi, apiKey]);


  return (
    <>
      <Header dataHeader={context.dataHeader} />

      <div className="min-h-screen mt-10 py-10 bg-black text-zinc-100 px-20">
        {/* Date Filter */}
        <div className="container py-4 border-b border-zinc-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-lg font-medium">Nuestras noticias</h2>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <label htmlFor="month-select" className="text-sm text-zinc-400">
                  Mes:
                </label>
                <select
                  id="month-select"
                  className="h-9 rounded-full bg-zinc-800 border-zinc-700 text-zinc-100 text-sm focus:ring-zinc-700 focus:border-zinc-700 px-4"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                >
                  {months.map((month, index) => (
                    <option key={index} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
                <label htmlFor="year-select" className="text-sm text-zinc-400">
                  Año:
                </label>

                <select
                  id="year-select"
                  className="h-9 rounded-full bg-zinc-800 border-zinc-700 text-zinc-100 text-sm focus:ring-zinc-700 focus:border-zinc-700 px-4"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              {/* <Button
                className="rounded-full"
                size="sm"
                onClick={() => {
                  setCurrentPage(1);
                }}
              >
                Filtrar
              </Button> */}

              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => {
                  setSelectedYear(mostRecentYear);
                  setSelectedMonth(mostRecentMonth);
                  setSelectedCategory(null);
                  setCurrentPage(1);
                }}
              >
                Recargar
              </Button>
            </div>
          </div>
        </div>

        <main className="container py-8">
          {/* Hero Section */}
          <section className="mb-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Hero (noticia destacada - solo la primera) */}
              {filteredData.length > 0 ? (
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={currentData[0].image}
                    alt="Featured news"
                    width={800}
                    height={600}
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <Badge className="mb-2 bg-red-600 hover:bg-red-700 rounded-full">
                      Nuevo
                    </Badge>
                    <h1 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                      {currentData[0].title}
                    </h1>
                    <p className="mb-4 max-w-md text-zinc-200">
                      {currentData[0].description}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-zinc-400" />
                        <span className="text-sm text-zinc-400">
                          {currentData[0].date}
                        </span>
                      </div>
                      {/* <Button variant="secondary" className="rounded-full">
                        Leer más
                      </Button> */}
                    </div>
                  </div>
                </div>
              ) : (
                <p className="no-news-message text-8xl">
                  En este mes no hay noticias
                </p>
              )}

              {/* Principales Noticias (desde la segunda en adelante) */}
              <div className="space-y-6">
                <div>
                  <h2 className="mb-4 text-2xl font-bold">
                    Noticias Principales
                  </h2>
                  <div className="space-y-4">
                    {filteredData.length > 1 ? (
                      currentData.slice(1).map((item, index) => (
                        <Card
                          key={index}
                          className="bg-zinc-800 border-zinc-700 rounded-xl overflow-hidden"
                        >
                          <div className="flex gap-4">
                            <img
                              src={item.image}
                              alt={`News ${index + 1}`}
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
                                {currentData[0].date}
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))
                    ) : (
                      <p className="no-news-message text-8xl">
                        En este mes no hay noticias
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Explorar por categoría</h2>
              {/* <Button
                variant="link"
                className="gap-1 text-zinc-400 hover:text-white"
              >
                Ver todo <ChevronRight className="h-4 w-4" />
              </Button> */}
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {[
                "Lanzamientos",
                "Producto",
                "Empresa",
                "Deporte",
                "Entretenimiento",
              ].map((category) => (
                <Card
                  key={category}
                  className="bg-zinc-800 cursor-pointer hover:scale-110 border-zinc-700 rounded-xl hover:bg-zinc-700 transition-colors"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-white p-3">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <h3 className="font-medium text-white">{category}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Ultimas noticias</h2>
              {/* <Button
                variant="link"
                className="gap-1 text-zinc-400 hover:text-white"
              >
                Ver todo <ChevronRight className="h-4 w-4" />
              </Button> */}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredData.length > 0
                ? currentData.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-zinc-800 border-zinc-700 rounded-xl overflow-hidden"
                  >
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
                      <h3 className="mb-2 text-lg font-medium text-white">
                        {item.title}
                      </h3>
                      <p className="mb-4 text-sm text-zinc-400">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-zinc-400">
                          <Clock className="mr-1 h-3 w-3" />
                          {currentData[0].date}
                        </div>
                        {/* <Button
                            variant="ghost"
                            size="sm"
                            className="rounded-full"
                          >
                            Leer más
                          </Button> */}
                      </div>
                    </CardContent>
                  </Card>
                ))
                : null}
            </div>
            {/* <div className="flex justify-center gap-2 mt-8">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full ${
                    currentPage === index + 1
                      ? "bg-zinc-700 text-white"
                      : "bg-zinc-400"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div> */}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
