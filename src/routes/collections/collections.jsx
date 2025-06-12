import CarouselResponsiveCollections from "@components/carousel-responsive-collections/carousel-responsive-collections";
import SectionCollections from "@components/section-collections/section-collections";
import { useState, useEffect, useContext, useMemo } from "react";
import Header from "@layouts/header/header.jsx";
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

  async function getCollections() {
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

  async function getDataCollections() {
    await getCollections();
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
  }

  async function loadCollections() {
    await getDataCollections();
    return true;
  }

  useEffect(() => {
    context.getDataPage(loadCollections());
  }, []);


  return (
    <>
      <Header dataHeader={context.dataHeader} />

      <div className="collection__hidden inline-block w-full py-24 px-12 mb-8">
        <div className="w-full mb-6">
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
