import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './carousel.css';

import Item1 from '../../assets/img/photo_carousel_item1.png';
import Item2 from '../../assets/img/photo_carousel_item2.png';
import Item3 from '../../assets/img/photo_carousel_item3.png';
import Item4 from '../../assets/img/photo_carousel_item4.png';
import Item5 from '../../assets/img/photo_carousel_item5.png';

const items = [
  { year: 2022, image: Item1 },
  { year: 2023, image: Item2 },
  { year: 2024, image: Item3 },
  { year: 2025, image: Item4 },
  { year: 2026, image: Item5 }
];

export default function Carousel() {
  useEffect(() => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    const instance = M.Carousel.init(elementosCarousel, {
      duration: 150,
      dist: -80,
      shift: 5,
      padding: 5,
      numVisible: 5,
      indicators: true,
      noWrap: false
    })[0];

    
    const autoPlay = setInterval(() => {
      instance.next();
    }, 3000);

    
    return () => {
      clearInterval(autoPlay);
    };
  }, []);

  return (
    <section className="collection">
      <div className="container">
        <div className="carousel">
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              <h2 className="subtitulo">Colección {item.year}</h2>
              <img src={item.image} alt={`Item ${item.year}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
