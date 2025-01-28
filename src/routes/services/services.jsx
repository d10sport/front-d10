import HeaderPage from "../../layouts/header-pages/header-page";
import { useEffect, useState, useContext } from "react";
import SplineModel from '@components/spline/spline.jsx'
import { ImageLogo } from "@utils/imgs/imgs.jsx";
import AppContext from "@context/app-context";
import axios from "axios";
import "./services.css";

export default function Services() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [sectionTwo, setSectionTwo] = useState({
    photo: "",
    title: "",
    subtitle: "",
    description: "",
  });

  const [sectionThree, setSectionThree] = useState({
    photo: "",
    title: "",
    subtitle: "",
    description: "",
  });

  const [sectionFour, setSectioFour] = useState({
    photo: "",
    title: "",
    subtitle: "",
    description: "",
  });

  function getServices() {
    axios
      .get(`${urlApi}landing/g/services`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setSectionTwo(response.data[0].section_two);
        setSectionThree(response.data[0].section_three);
        setSectioFour(response.data[0].section_four);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getServices();
  }, []);

  return (
    <>
      <HeaderPage dataHeader={context.dataHeader} />

      <SplineModel />

      <section className="services">
        <div className="col-text__services">
          <div className="cntr-text__services">
            <h1 className="title__services"> {sectionTwo.title} </h1>
            <h2 className="subtitle__services"> {sectionTwo.subtitle} </h2>
            <p className="text__services"> {sectionTwo.description} </p>
          </div>
          <div className="cntr-text__services cntr-text--bg">
            <h1 className="title__services"> {sectionThree.title} </h1>
            <h2 className="subtitle__services">{sectionThree.subtitle}</h2>
            <p className="text__services">{sectionThree.description}</p>
          </div>
          <div className="cntr-text__services">
            <h1 className="title__services"> {sectionFour.title} </h1>
            <h2 className="subtitle__services"> {sectionFour.subtitle} </h2>
            <p className="text__services">{sectionFour.description}</p>
          </div>
        </div>
        <div className="col-img__services">
          <div className="cntr-img__services">
            {sectionTwo.photo != "" ? (
              <img src={sectionTwo.photo} alt="img" className="img__services" />
            ) : (
              <ImageLogo className="rounded-3xl object-cover" alt="img" />
            )}
          </div>

          <div className="cntr-img__services">
            {sectionThree.photo != "" ? (
              <img
                src={sectionThree.photo}
                alt="img"
                className="img__services"
              />
            ) : (
              <ImageLogo className="rounded-3xl object-cover" alt="img" />
            )}
          </div>

          <div className="cntr-img__services">
            {sectionFour.photo != "" ? (
              <img
                src={sectionFour.photo}
                alt="img"
                className="img__services"
              />
            ) : (
              <ImageLogo className="rounded-3xl object-cover" alt="img" />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
