import { useState } from 'react';
import HeaderPage from '../../layouts/header-pages/header-page.jsx';
import Footer from "../../layouts/footer/footer.jsx";
import cover from '../../assets/img/cover_example_news.png';
import './news.css';

export default function News() {
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
  ];

  const toggleYear = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <>
      <HeaderPage />
      <div className="container__news">
        <main className="news">
          <section className="section__news">
            {newsData.map((item, index) => (
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
        </main>
        
        <aside className="date">
          <ul className="cntr__date">
            {years.map((year) => (
              <li key={year}>
                <div onClick={() => toggleYear(year)} className="title__date">
                  {year}
                </div>
                {expandedYear === year && (
                  <ul className="months__list">
                    {months.map((month) => (
                      <li key={month} className="month__item">{month}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <Footer />
    </>
  );
}
