/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "./carousel-collections.css";
import { ImageLoading } from '@utils/imgs/imgs.jsx'

export default function CarouselCollections({ collections }) {
  const [items, setItems] = useState(collections);
  const refCarousel = useRef(null);

  useEffect(() => {
    setItems(collections);
  }, [collections]);

  useEffect(() => {
    if (items.length === 1|| refCarousel.current === null ) return;
    const elementosCarousel = refCarousel;
    const instance = M.Carousel.init(elementosCarousel.current, {
      duration: 150,
      dist: -80,
      shift: 5,
      padding: 5,
      numVisible: 5,
      indicators: true,
      noWrap: false,
    });

    const autoPlay = setInterval(() => {
      instance.next();
    }, 3000);

    return () => {
      clearInterval(autoPlay);
    };
  }, [items]);

  return (
    <section className="collection">
      <div className="container">
        <div ref={refCarousel} className="carousel">
          {items.map((item, index) => (
            <Link key={index} className="carousel-item" to={item.link}>
              <h2 className="subtitle">Colección {item.title}</h2>
              <img src={ item.photo != "" ? item.photo : ImageLoading } alt={`Item ${item.title}`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
