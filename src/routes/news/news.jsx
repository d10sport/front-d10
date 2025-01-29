import HeaderPage from "@layouts/header-pages/header-page.jsx";
import { useState, useEffect, useContext } from "react";
import Footer from "@layouts/footer/footer.jsx";
import AppContext from "@context/app-context";
import axios from "axios";
import "./news.css";
import SplineModel from "@components/spline/spline.jsx";

export default function News() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [months, setMonths] = useState([]);
  const [newsData, setNewsData] = useState([]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedYear, setExpandedYear] = useState(null);

  // Obtener año y mes actuales
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  // Estado inicial basado en la fecha actual
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

        // Convertir el objeto `news` en un array de objetos
        const formattedNews = Object.entries(news).map(([key, value]) => ({
          id: key,
          title: value.title,
          description: value.description,
          date: value.date,
          image: value.image,
        }));

        // Formatear las noticias
        const formattedNewsData = formattedNews.map((item) => ({
          ...item,
          date: item.date.slice(0, 7), // Mantener solo "AAAA-MM"
        }));

        // Obtener el mes y año más recientes en el formato "AAAA-MM"
        const mostRecentNews = formattedNewsData.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        )[0];
        const [recentYear, recentMonth] = mostRecentNews.date.split("-");

        // Actualizar estados
        setNewsData(formattedNewsData); // Actualizar noticias formateadas
        setMonths(months); // Actualizar meses disponibles
        setSelectedYear(parseInt(recentYear)); // Establecer año más reciente
        setSelectedMonth(parseInt(recentMonth)); // Establecer mes más reciente
      } catch (error) {
        console.error(error);
      }
    };

    getNews();
  }, [urlApi, apiKey]);

  const formatNewsData = (data) => {
    return data.map((item) => ({
      ...item,
      date: item.date.slice(0, 7), // Mantener solo "AAAA-MM"
    }));
  };

  const filteredNewsData = formatNewsData(newsData);

  const years = Array.from(
    new Set(filteredNewsData.map((item) => parseInt(item.date.split("-")[0])))
  ).sort();

  // Filtrar noticias según el año y el mes seleccionados
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
      <HeaderPage dataHeader={context.dataHeader} />

      <SplineModel />

      <div className="container__news principal_div">
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
              <p className="no-news-message text-8xl">No hay noticias</p> // Mensaje si no hay datos
            )}
          </section>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`page-button ${
                    currentPage === i + 1 ? "active" : ""
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
                  className={`months__list ${
                    expandedYear === year ? "expand" : ""
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
      </div>
      <Footer />
    </>
  );
}
