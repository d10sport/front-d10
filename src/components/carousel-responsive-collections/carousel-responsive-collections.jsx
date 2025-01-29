import { useEffect, useRef, useState } from "react";
import "./carousel-responsive-collections.css";
import PropTypes from 'prop-types';
import M from "materialize-css";

export default function CarouselResponsiveCollections({ collections }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [items, setItems] = useState(collections);
  const refCarousel = useRef(null);

  CarouselResponsiveCollections.propTypes = {
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
    if (items.length === 0 || refCarousel.current === null) return;
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
    <div className="mx-auto px-4 relative py-4">
      {items.length > 0 && (
        <>
          <div className="w-full flex justify-between py-4">
            <h2 className="text-4xl text_100">{items[0]?.title}</h2>
            <div className="relative">
              <button
                className="btn_yellow_active"
                disabled
                onMouseOver={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                Adquirir
              </button>
              {showTooltip && (
                <div className="absolute top-full mt-1 px-2 py-1 text-sm text-white bg-gray-600 rounded">
                  Pronto disponible
                </div>
              )}
            </div>
          </div>
          <div>
            <h3 className="text_300">{items[0]?.subtitle}</h3>
            <p className="text-xl text_400">{items[0]?.description}</p>
          </div>
        </>
      )}
      <section className="collection">
        <div className="container">
          <div ref={refCarousel} className="carousel">
            {items.map((item, index) => (
              item?.photos.map((img) => (
                <div key={index} className="carousel-item py-8">
                  <h5 className="text_300 text-lg font-bold">{img.title}</h5>
                  <span className="text-white text-xl font-semibold">{img.price}</span>
                  <img src={img.photo} className="h-full" alt={`Item ${item.title}`} />
                </div>
              ))
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
