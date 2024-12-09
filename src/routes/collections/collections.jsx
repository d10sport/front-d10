import SectionCollections from "@components/section-collections/section-collections";
import HeaderPage from "../../layouts/header-pages/header-page";
import SplineModel from '@components/spline/spline.jsx';
import { useState, useEffect, useRef } from "react";
import M from "materialize-css";
import "./collections.css";
import axios from 'axios';

export default function Collections() {
  const urlApi = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const refCarousel = useRef(null);
  const [collections, setCollections] = useState({
    title: "",
    subtitle: "",
    section_one: {
      collections: []
    }
  });
  const items = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }];

  function getNews() {
    axios.get(`${urlApi}landing/g/collections`, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      }
    })
      .then((response) => {
        setCollections(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    const elementosCarousel = refCarousel;
    M.Carousel.init(elementosCarousel.current, {
      duration: 150,
      dist: 0,
      shift: 5,
      padding: 5,
      numVisible: 1,
      indicators: false,
      noWrap: false,
    });
  }, []);

  useEffect(() => {
    getNews();
  }, []);

  // Fin de la conexión

  return (
    <>
      <HeaderPage />

      <SplineModel />

      <div className="collection__hidden h-full w-full py-8 px-12">
        <div className="w-full">
          <h1 className="text_300 text-5xl font-extrabold text-center">
            {collections.section_one.title}
          </h1>
        </div>
        <SectionCollections collections={collections.section_one.collections} />
      </div>

      <section className="responsive__cards">
        <div className="container">
          <div ref={refCarousel} className="carousel">
            {items.map((item, index) => (
              <div key={index} className="carousel-item">
                <div className="cntr__collection">
                  <h1>COLLECTIONS {item.num}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
