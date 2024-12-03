import HeaderPage from '@layouts/header-pages/header-page.jsx';
import cover from '@assets/img/cover_example_news.png';
import Footer from '@layouts/footer/footer.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './news.css';

export default function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [months, setMonths] = useState([]);

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
    setSelectedYear(currentYear);
    setSelectedMonth(currentMonth);
  }, [currentYear, currentMonth]);

  // const months = [
  //   "Enero",
  //   "Febrero",
  //   "Marzo",
  //   "Abril",
  //   "Mayo",
  //   "Junio",
  //   "Julio",
  //   "Agosto",
  //   "Septiembre",
  //   "Octubre",
  //   "Noviembre",
  //   "Diciembre",
  // ];

  // Inicio de la conexión

  var urlApi = import.meta.env.VITE_API_URL;

  function getNews() {
    axios
      .get(`${urlApi}landing/g/news`)
      .then((response) => {
        // Acceder a los meses y actualizar el estado
        const months = response.data[0].section_one.months;
        setMonths(months); // Actualiza el estado con los meses
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getNews();
  }, []);

  // Fin de la conexión

  const newsData = [
    {
      title: "Title text notice 1",
      description: "Description text to the notice for after fill 1",
      date: "2024-01",
      image: cover,
    },
    {
      title: "Title text notice 2",
      description: "Description text to the notice for after fill 2",
      date: "2024-11",
      image: cover,
    },
    {
      title: "Title text notice 2",
      description: "Description text to the notice for after fill 2",
      date: "2024-11",
      image: cover,
    },
    {
      title: "Title text notice 2",
      description: "Description text to the notice for after fill 2",
      date: "2024-11",
      image: cover,
    },
    {
      title: "Title text notice 2",
      description: "Description text to the notice for after fill 2",
      date: "2024-11",
      image: cover,
    },
    {
      title: "Title text notice 2",
      description: "Description text to the notice for after fill 2",
      date: "2024-11",
      image: cover,
    },
    {
      title: "Title text notice 2",
      description: "Description text to the notice for after fill 2",
      date: "2024-11",
      image: cover,
    },
    {
      title: "Title text notice 2",
      description: "Description text to the notice for after fill 2",
      date: "2024-11",
      image: cover,
    },
    {
      title: "Title text notice 2",
      description: "Description text to the notice for after fill 2",
      date: "2024-11",
      image: cover,
    },
    {
      title: "Title text notice 2",
      description: "Description text to the notice for after fill 2",
      date: "2024-11",
      image: cover,
    },
    {
      title: "Title text notice 2",
      description: "Description text to the notice for after fill 2",
      date: "2024-11",
      image: cover,
    },
    {
      title: "Title text notice 2",
      description: "Description text to the notice for after fill 2",
      date: "2024-11",
      image: cover,
    },
    {
      title: "Title text notice 1",
      description: "Description text to the notice for after fill 1",
      date: "2026-12",
      image: cover,
    },
  ];

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
    setSelectedMonth(null); // Reiniciar el mes para mostrar todas las noticias del año
    setCurrentPage(1); // Reiniciar a la primera página
  };

  const selectMonth = (monthIndex) => {
    setSelectedMonth(monthIndex + 1); // Mes en formato numérico
    setCurrentPage(1); // Reiniciar a la primera página
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <HeaderPage />
      <div className="container__news">
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
