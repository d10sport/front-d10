import SectionCollections from "@components/section-collections/section-collections";
import { useState, useEffect, useRef, useContext } from "react";
import HeaderPage from "@layouts/header-pages/header-page";
import SplineModel from '@components/spline/spline.jsx'
import AppContext from "@context/app-context";
import Footer from "@layouts/footer/footer";
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

      <div className="collection__hidden inline-block w-full py-8 px-12 mb-8">
        <div className="w-full">
          <h1 className="text_300 text-5xl font-extrabold text-center">
            {collections.section_one.title}
          </h1>
        </div>
        <div>
          <SectionCollections collections={collections.section_one.collections} />
        </div>
      </div>

      <Footer dataFooter={context.dataFooter} />
    </>
  );
}
