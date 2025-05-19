import HeaderPage from "@layouts/header-pages/header-page.jsx";
import { useEffect, useState, useContext } from "react";
import SplineModel from "@components/spline/spline.jsx";
import { IconD10Mas, IconD10 } from "../../utils/icons/icons";
import AppContext from "@context/app-context";
import axios from "axios";
import "./about-us.css";

export default function AboutUs() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [sectionOne, setSectionOne] = useState({
    title: "",
    description: "",
  });

  const [sectionTwo, setSectionTwo] = useState({
    title1: "",
    title2: "",
    bg_photo: "",
    subtitle: "",
    description: "",
  });

  const [sectionThree, setSectionThree] = useState({
    title: "",
    description: "",
  });

  const [sectionFour, setSectionFour] = useState({
    title: "",
    bg_photo: "",
    description: "",
  });

  const [sectionFive, setSectionFive] = useState([]);

  const [sectionSix, setSectionSix] = useState({
    title: "",
    bg_photo: "",
    description: "",
  });

  function loadIcon(icon, count) {
    let icons = [];
    for (let index = 0; count > icons.length; index++) {
      icons.push({ icon: icon });
    }
    setSectionFive(icons);
  }

  function getDataAbout() {
    axios
      .get(`${urlApi}landing/g/aboutus`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        if (response.data?.length == 0 || response.data[0] == undefined) return;
        setSectionOne(response.data[0].section_one);
        setSectionTwo(response.data[0].section_two);
        setSectionThree(response.data[0].section_three);
        setSectionFour(response.data[0].section_four);
        setSectionSix(response.data[0].section_six);
        if (
          response.data[0]?.section_five?.count_repeat > 0 &&
          response.data[0]?.section_five?.icon != ""
        ) {
          loadIcon(
            response.data[0]?.section_five?.icon,
            response.data[0]?.section_five?.count_repeat
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getDataAbout();
  }, []);

  return (
    <>
      <HeaderPage dataHeader={context.dataHeader} />

      <SplineModel />

      <section className="aboutus principal_div">
        {/* <div
          className="cntr-txt__aboutus bg-black"
          id="section-destination-meet"
        >
          <h1 className="title-1__aboutus text-8xl">{sectionOne.title}</h1>
          <p className="text__aboutus padding-cntr-txt__space text-2xl text-[#d1d5dc]">
            {sectionOne.description}
          </p>
        </div> */}

        {/* Panel */}
        <div className="block md:hidden flex flex-col items-center text-center p-4 space-y-4">
          <div>
            <h2 className="text-4xl font-bold text-white">
              {sectionTwo.title1} <br /> {sectionTwo.title2}
            </h2>
            <h3 className="text-3xl text-white mt-2">{sectionTwo.subtitle}</h3>
            <p className="text-lg text-white mt-2">{sectionTwo.description}</p>
          </div>

          {sectionTwo.bg_photo && (
            <img
              src={sectionTwo.bg_photo}
              alt="Fondo"
              className="w-full h-auto rounded-lg shadow-md max-h-80 object-cover"
            />
          )}
        </div>

        {/* Objetivos */}
        <div
          className="cntr-central__aboutus hidden md:block"
          style={{
            backgroundImage: `url(${sectionTwo.bg_photo !== "" ? sectionTwo.bg_photo : ""})`,
          }}
          id="section-destination-founder"
        >
          <div className="central-cntr__aboutus">
            <h2 className="title-2__aboutus text-6xl text-white">
              {sectionTwo.title1}
              <br />
              {sectionTwo.title2}
            </h2>
            <h3 className="title-3__aboutus text-5xl">{sectionTwo.subtitle}</h3>
            <p className="text__aboutus text-white text-2xl">
              {sectionTwo.description}
            </p>
          </div>
        </div>

        <div
          className="cntr-txt__aboutus background--gradient"
          id="section-destination-objectives"
        >
          <h3 className="title-3__aboutus text-6xl py-4">
            {sectionThree.title}
          </h3>
          <p className="text__aboutus padding-cntr-txt__space text-[#d1d5dc] text-2xl">
            {sectionThree.description}
          </p>
        </div>

        {/* Mision */}
        <div
          className="cntr-img__aboutus hidden md:flex"
          style={{
            backgroundImage: `url(${sectionFour.bg_photo !== "" ? sectionFour.bg_photo : ""})`,
          }}
        >
          <div className="cntr-empty__aboutus"></div>
          <div className="cntr-side__aboutus" id="section-destination-mission">
            <h3 className="title-3__aboutus text-white text-4xl py-4">
              {sectionFour.title}
            </h3>
            <p className="text__aboutus text-white font-semibold text-2xl">
              {sectionFour.description}
            </p>
          </div>
        </div>

        <div className="block md:hidden flex flex-col items-center px-4 py-6 space-y-3 bg-black">
          {/* Texto */}
          <div className="max-w-[90%]">
            <h3 className="title-3__aboutus text-4xl py-4">
              {sectionFour.title}
            </h3>
            <p className="text__aboutus text-[#d1d5dc] text-2xl">{sectionFour.description}</p>
          </div>

          {/* Imagen */}
          {sectionFour.bg_photo && (
            <img
              src={sectionFour.bg_photo}
              alt="Fondo"
              className="w-11/12 max-h-48 object-cover rounded-md shadow max-h-80 object-cover"
            />
          )}
        </div>

        {/* Franja */}
        <div className="sponsors__aboutus bg-black">
          {sectionFive.length > 0 ? (
            sectionFive.map((item) => (
              <img
                key={item.icon}
                src={item.icon}
                alt="Image Sponsor"
                className="img__aboutus"
              />
            ))
          ) : (
            <>
              <IconD10 />
              <IconD10Mas />
              <IconD10 />
              <IconD10Mas />
              <IconD10 />
              <IconD10Mas />
            </>
          )}
        </div>

        <div
          className="cntr-img__aboutus"
          style={{
            backgroundImage: `url(${sectionSix.bg_photo != "" ? sectionSix.bg_photo : ""
              })`,
          }}
        >
          <div className="cntr-side__aboutus" id="section-destination-vision">
            <h3 className="title-3__aboutus text-4xl py-4">
              {sectionSix.title}
            </h3>
            <p className="text__aboutus text-[#d1d5dc] text-2xl">
              {sectionSix.description}
            </p>
          </div>
          <div className="cntr-empty__aboutus"></div>
        </div>
      </section>
    </>
  );
}
