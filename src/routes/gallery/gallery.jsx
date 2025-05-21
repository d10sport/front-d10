import { useContext, useEffect, useState } from "react";
import Header from "@layouts/header/header.jsx";
import Footer from "@layouts/footer/footer.jsx";
import AppContext from "@context/app-context";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import axios from "axios";
import "./gallery.css";
// import ImageRmLogo from "./example-img.png";

export default function Gallery() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  // const lista = [
  //   {
  //     img: ImageRmLogo,
  //   },
  //   {
  //     img: ImageRmLogo,
  //   },
  //   {
  //     img: ImageRmLogo,
  //   },
  //   {
  //     img: ImageRmLogo,
  //   },
  //   {
  //     img: ImageRmLogo,
  //   },
  //   {
  //     img: ImageRmLogo,
  //   },
  //   {
  //     img: ImageRmLogo,
  //   },
  //   {
  //     img: ImageRmLogo,
  //   },
  //   {
  //     img: ImageRmLogo,
  //   },
  //   {
  //     img: ImageRmLogo,
  //   },
  //   {
  //     img: ImageRmLogo,
  //   },
  //   {
  //     img: ImageRmLogo,
  //   },
  // ];

  const [sectionOne, setSectionOne] = useState({
    gallery: "",
  });

  function getDataGallery() {
    axios
      .get(`${urlApi}landing/g/gallery`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        if (response.data?.length == 0 || response.data[0] == undefined) return;
        setSectionOne(response.data[0].section_one);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getDataGallery();
  }, []);

  return (
    <>
      <Header dataHeader={context.dataHeader} />

      <section className="gallery" id="section-destination-galeria">
        <h1 className="title__gallery">Galería</h1>
        <ul className="list__gallery">
          {sectionOne.length > 0 ? (
            sectionOne.map((item, index) => (
              <li key={index} className="item__gallery">
                <img
                  className="img__gallery"
                  src={item.gallery}
                  alt={`Img ${index + 1}`}
                />
              </li>
            ))
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </ul>
      </section>

      <Footer dataFooter={context.dataFooter} />
    </>
  );
}
