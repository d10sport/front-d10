import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './carousel-news.css';

const items = [
    { year: 2022, btn:"Ver más"},
    { year: 2023, btn:"Ver más"},
    { year: 2024, btn:"Ver más"},
    { year: 2025, btn:"Ver más"},
    { year: 2026, btn:"Ver más"},
    
  ];

export default function CarouselNews() {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      M.Carousel.init(carouselRef.current, {
        duration: 150,
        dist: 0,
        shift: 5,
        padding: 5,
        numVisible: 1,
        indicators: false,
        noWrap: false,
      });
    }
  }, []);

  return (
    <>
    
    <section className="news bg-black">
        <div className="container__news">
            <div className="carousel" ref={carouselRef}>
                {items.map((item, index) => (
                    <div key={index} className="carousel-item" style={{  }}>
                        <h1 className="title__news text-2xl text-[#ffc702]">Noticia</h1>
                        <h2 className="subtitle__news text-2xl text-white">Campeones año {item.year}</h2>
                        <p className="text__news text-lg text-[#999999]">
                        A chic and fully-furnished 2-bedroom apartment with <br />
                        panoramic city views... Read More
                        </p>
                        <Link to={'/collections'} className="link__news text-xl text-[#ffc702] hover:text-white hover:bg-[#ffc702]">{item.btn}</Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
    
    </>
  );
}
