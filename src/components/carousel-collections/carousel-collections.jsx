import { useEffect, useRef, useState } from "react";
import { ImageLogo } from '@utils/imgs/imgs.jsx'
import { Link } from "react-router-dom";
import "./carousel-collections.css";
import PropTypes from 'prop-types';
import M from "materialize-css";

export default function CarouselCollections({ collections }) {
  const [items, setItems] = useState(collections);
  const refCarousel = useRef(null);

  CarouselCollections.propTypes = {
    collections: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        photo: PropTypes.string,
      })
    ).isRequired,
  };

  useEffect(() => {
    setItems(collections);
  }, [collections]);

  useEffect(() => {
    if (items.length === 1 || refCarousel.current === null) return;
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
              <h2 className="subtitle">{item.title}</h2>
              {item.photo != "" ? (
                <img className="img_carrusel" src={item.photo} alt={`Item ${item.title}`} />
              ) : (
                <ImageLogo className="img_carrusel" alt={`Item ${item.title}`} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
