import HeaderPage from '@layouts/header-pages/header-page.jsx';
import SplineModel from '@components/spline/spline.jsx';
import { useEffect, useState, useContext } from 'react';
import AppContext from '@context/app-context';
import axios from 'axios';
import './about-us.css';

export default function AboutUs() {
  const contex = useContext(AppContext);
  const urlApi = contex.urlApi;
  const apiKey = contex.apiKey;

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

  const [sectionFour, setSectioFour] = useState({
    title: "",
    bg_phot: "",
    description: "",
  });

  const [sectionFive, setSectionFive] = useState({
    icon: "",
    count_repeat: "",
  });

  const [sectionSix, setSectionSix] = useState({
    title: "",
    bg_phot: "",
    description: "",
  });

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
        setSectioFour(response.data[0].section_four);
        setSectionFive(response.data[0].section_five);
        setSectionSix(response.data[0].section_six);
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
      <HeaderPage dataHeader={contex.dataHeader} />

      <SplineModel />

      <section className="aboutus">
        <div className="cntr-txt__aboutus bg-black">
          <h1 className="title-1__aboutus text-8xl text-[#ffc702]">
            {sectionOne.title}
          </h1>
          <p className="text__aboutus padding-cntr-txt__space text-2xl text-white">
            {sectionOne.description}
          </p>
        </div>

        <div
          className="cntr-central__aboutus"
          style={{
            backgroundImage: `url(${sectionTwo.bg_photo != "" ? sectionTwo.bg_photo : ''
              })`,
          }}
        >
          <div className="central-cntr__aboutus">
            <h2 className="title-2__aboutus text-6xl text-white">
              {sectionTwo.title1}
              <br />
              {sectionTwo.title2}
            </h2>
            <h3 className="title-3__aboutus text-5xl text-[#ffc702]">
              {sectionTwo.subtitle}
            </h3>
            <p className="text__aboutus text-white text-2xl">
              {sectionTwo.description}
            </p>
          </div>
        </div>

        <div className="cntr-txt__aboutus bg-black">
          <h3 className="title-3__aboutus text-[#ffc702] text-6xl">
            {sectionThree.title}
          </h3>
          <p className="text__aboutus padding-cntr-txt__space text-white text-2xl">
            {sectionThree.description}
          </p>
        </div>

        <div
          className="cntr-img__aboutus"
          style={{
            backgroundImage: `url(${sectionFour.bg_phot != "" ? sectionFour.bg_phot : ''
              })`,
          }}
        >
          <div className="cntr-empty__aboutus"></div>
          <div className="cntr-side__aboutus">
            <h3 className="title-3__aboutus text-[#ffc702] text-4xl">
              {sectionFour.title}
            </h3>
            <p className="text__aboutus text-white text-2xl">
              {sectionFour.description}
            </p>
          </div>
        </div>

        <div className="sponsors__aboutus bg-black">
          <img src={sectionFive.icon}alt="Image Sponsor" className="img__aboutus" />
        </div>

        <div
          className="cntr-img__aboutus"
          style={{
            backgroundImage: `url(${sectionSix.bg_phot != "" ? sectionSix.bg_phot : ''
              })`,
          }}
        >
          <div className="cntr-side__aboutus">
            <h3 className="title-3__aboutus text-[#ffc702] text-4xl">
              {sectionSix.title}
            </h3>
            <p className="text__aboutus text-white text-2xl">
              {sectionSix.description}
            </p>
          </div>
          <div className="cntr-empty__aboutus"></div>
        </div>
      </section>
    </>
  );
}