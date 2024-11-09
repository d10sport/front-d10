import cover from '../../assets/img/cover_example_news.png';
import './news.css';

export default function News() {
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

  return (
    <>
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
          <h1 className="title__date">2024</h1>
          <h1 className="title__date">2025</h1>
          <h1 className="title__date">2026</h1>
          <h1 className="title__date">2027</h1>
          <h1 className="title__date">2028</h1>
        </aside>
      </div>
    </>
  );
}
