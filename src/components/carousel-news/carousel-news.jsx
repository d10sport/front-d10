import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './carousel.css';

import Item1 from '../../assets/img/photo_carousel_item1.png';
import Item2 from '../../assets/img/photo_carousel_item2.png';
import Item3 from '../../assets/img/photo_carousel_item3.png';
import Item4 from '../../assets/img/photo_carousel_item4.png';
import Item5 from '../../assets/img/photo_carousel_item5.png';


export default function Carousel() {
  useEffect(() => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
      duration: 150,
      dist: -80,
      shift: 5,
      padding: 5,
      numVisible: 5,
      indicators: true,
      noWrap: false
    });
  }, []);

  return (
        <section className="collection">
            <div className="container">
                <div className="carousel">
                    <div className="carousel-item">
                        <h2 className="subtitulo">Colección 2022</h2>
                        <img src={Item1} alt="Item 1" />
                    </div>

                    <div className="carousel-item">
                        <h2 className="subtitulo">Colección 2023</h2>
                        <img src={Item2} alt="Item 2" />
                    </div>

                    <div className="carousel-item">
                        <h2 className="subtitulo">Colección 2024</h2>
                        <img src={Item3} alt="Item 3" />
                    </div>

                    <div className="carousel-item">
                        <h2 className="subtitulo">Colección 2025</h2>
                        <img src={Item4} alt="Item 4" />
                    </div>

                    <div className="carousel-item">
                        <h2 className="subtitulo">Colección 2026</h2>
                        <img src={Item5} alt="Item 5" />
                    </div>
                </div>
            </div>
        </section>
  );
}
