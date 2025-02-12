import { useContext } from "react";
import SplineModel from "@components/spline/spline.jsx";
import Header from "@layouts/header/header.jsx";
import Footer from "@layouts/footer/footer.jsx";
import AppContext from "@context/app-context";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./gallery.css";
import ImageRmLogo from "./example-img.png";

export default function Gallery() {
  const context = useContext(AppContext);

  const lista = [
    {
      img: ImageRmLogo,
    },
    {
      img: ImageRmLogo,
    },
    {
      img: ImageRmLogo,
    },
    {
      img: ImageRmLogo,
    },
    {
      img: ImageRmLogo,
    },
    {
      img: ImageRmLogo,
    },
    {
      img: ImageRmLogo,
    },
    {
      img: ImageRmLogo,
    },
    {
      img: ImageRmLogo,
    },
    {
      img: ImageRmLogo,
    },
    {
      img: ImageRmLogo,
    },
    {
      img: ImageRmLogo,
    },
  ];

  return (
    <>
      <Header dataHeader={context.dataHeader} />

      <SplineModel />

      <section className="gallery">
        <ul className="list__gallery">
          {lista.length > 0 ? (
            lista.map((item, index) => (
              <li key={index} className="item__gallery">
                <img
                  className="img__gallery"
                  src={item.img}
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
