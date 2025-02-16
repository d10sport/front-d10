import CarouselResponsiveCollections from "@components/carousel-responsive-collections/carousel-responsive-collections";
import SectionCollections from "@components/section-collections/section-collections";
import { useState, useEffect, useContext, useMemo } from "react";
import HeaderPage from "@layouts/header-pages/header-page";
import SplineModel from "@components/spline/spline.jsx";
import AppContext from "@context/app-context";
import Footer from "@layouts/footer/footer";
import "./collections.css";
import axios from "axios";

export default function Collections() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [deviceType, setDeviceType] = useState("desktop");

  const [collections, setCollections] = useState({
    title: "",
    subtitle: "",
    section_one: {
      collections: [],
    },
  });

  const showCarrusel = useMemo(() => {
    switch (deviceType) {
      case "mobile":
        return { show: true };
      case "tablet":
        return { show: true };
      default:
        return { show: false };
    }
  }, [deviceType]);

  function getCollections() {
    axios
      .get(`${urlApi}landing/g/collections`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setCollections(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getCollections();
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setDeviceType("mobile");
      } else if (width > 768 && width <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <HeaderPage dataHeader={context.dataHeader} />

      <SplineModel />

      <div className="collection__hidden principal_div inline-block w-full py-8 px-12 mb-8">
        <div className="w-full">
          <h1 className="title__collections text-5xl font-extrabold text-center">
            {collections.section_one.title}
          </h1>
        </div>
        <div>
          {showCarrusel.show ? (
            <CarouselResponsiveCollections
              collections={collections.section_one.collections}
            />
          ) : (
            <SectionCollections
              collections={collections.section_one.collections}
            />
          )}
        </div>
      </div>

      <Footer dataFooter={context.dataFooter} />
    </>
  );
}
