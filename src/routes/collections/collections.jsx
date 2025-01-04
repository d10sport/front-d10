import SectionCollections from "@components/section-collections/section-collections";
import HeaderPage from "../../layouts/header-pages/header-page";
import SplineModel from '@components/spline/spline.jsx';
import { useState, useEffect, useRef, useContext } from "react";
import AppContext from "@context/app-context";
import M from "materialize-css";
import "./collections.css";
import axios from 'axios';

export default function Collections() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;
  const refCarousel = useRef(null);

  const [collections, setCollections] = useState({
    title: "",
    subtitle: "",
    section_one: {
      collections: []
    }
  });
  const items = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }];

  function getCollections() {
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

  function getDateLayout() {
    axios.get(`${urlApi}landing/g/layout`, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      }
    })
      .then((response) => {
        if (response.data?.length == 0 || response.data[0] == undefined) return;
        setDataHeader(response.data[0].header);
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
    getCollections();
  }, []);

  return (
    <>
      <HeaderPage dataHeader={context.dataHeader} />

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
