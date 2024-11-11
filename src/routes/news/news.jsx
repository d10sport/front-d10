import { useState } from 'react';
import HeaderPage from '../../layouts/header-pages/header-page.jsx';
import Footer from "../../layouts/footer/footer.jsx";
import cover from '../../assets/img/cover_example_news.png';
import './news.css';

export default function News() {
  const itemsPerPage = 10; // Nuevo
  const [currentPage, setCurrentPage] = useState(1); // Nuevo
  const [expandedYear, setExpandedYear] = useState(null);

  const years = [2024, 2025, 2026, 2027, 2028];
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const newsData = [
    {
      title: "Title text notice 1",
      description: "Description text to the notice for after fill 1",
      date: "Date 1",
      image: cover,
    },
    {
      title: "Title text notice 1",
      description: "Description text to the notice for after fill 1",
      date: "Date 1",
      image: cover,
    },
    {
      title: "Title text notice 1",
      description: "Description text to the notice for after fill 1",
      date: "Date 1",
      image: cover,
    },
    {
      title: "Title text notice 1",
      description: "Description text to the notice for after fill 1",
      date: "Date 1",
      image: cover,
    },
    {
      title: "Title text notice 1",
      description: "Description text to the notice for after fill 1",
      date: "Date 1",
      image: cover,
    },
    {
      title: "Title text notice 1",
      description: "Description text to the notice for after fill 1",
      date: "Date 1",
      image: cover,
    },
    {
      title: "Title text notice 1",
      description: "Description text to the notice for after fill 1",
      date: "Date 1",
      image: cover,
    },
    {
      title: "Title text notice 1",
      description: "Description text to the notice for after fill 1",
      date: "Date 1",
      image: cover,
    },
    {
      title: "Title text notice 1",
      description: "Description text to the notice for after fill 1",
      date: "Date 1",
      image: cover,
    },
    {
      title: "Title text notice 1",
      description: "Description text to the notice for after fill 1",
      date: "Date 1",
      image: cover,
    },
    {
      title: "Title text notice 1",
      description: "Description text to the notice for after fill 1",
      date: "Date 1",
      image: cover,
    },
    // Añade más datos aquí
  ];

  const totalPages = Math.ceil(newsData.length / itemsPerPage); // Nuevo

  const currentData = newsData.slice( // Nuevo
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleYear = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  const handlePageChange = (page) => { // Nuevo
    setCurrentPage(page);
  };

  return (
    <>
      <HeaderPage />
      <div className="container__news">
        <main className="news">
          <section className="section__news">
            {currentData.map((item, index) => ( // Cambiar `newsData` por `currentData`
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
            ))}
          </section>
          {/* Paginación */}
          {totalPages > 1 && ( // Nuevo
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
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
                <ul className={`months__list ${expandedYear === year ? 'expand' : ''}`}>
                  {expandedYear === year && months.map((month) => (
                    <li key={month} className="month__item">{month}</li>
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
