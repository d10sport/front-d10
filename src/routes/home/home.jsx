import videoSplineAcademyResponsive from "@assets/video/spline_mode_academy_responsive.mp4";
import CarouselCollections from "@components/carousel-collections/carousel-collections";
import CarouselSponsors from "@components/carrusel-sponsors/carousel-sponsors";
import { Suspense, useContext, useEffect, useState, useMemo } from "react";
import videoSplineAcademy from "@assets/video/spline_mode_academy.mp4";
import { Environment, OrbitControls } from "@react-three/drei";
import ModelBalonGlass from "@utils/model3D/BalonGlass.jsx";
import SplineModel from "@components/spline/spline.jsx";
import getTokenDecoded from "../../token/token-data.js";
import Header from "@layouts/header/header.jsx";
import Footer from "@layouts/footer/footer.jsx";
import AppContext from "@context/app-context";
import { Canvas } from "@react-three/fiber";
import { Loading } from "@utils/imgs/imgs";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import "swiper/css";
import "./home.css";

export default function Home() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [deviceType, setDeviceType] = useState("desktop");

  const [sectionOne, setSectionOne] = useState({
    slogan: "",
    slogan_two: "",
    slogan_three: "",
    company: "",
    bg_photo: "",
    bg_photo_res: "",
  });

  const [sectionTwo, setSectionTwo] = useState({
    title: "",
    description: "",
    bg_photo: "",
  });

  const [sectionFour, setSectioFour] = useState({
    collection: [
      {
        title: "",
        photo: "",
        link: "",
      },
    ],
    news: {
      h1: "",
      title: "",
      description: "",
      link: "",
    },
  });

  const [sectionThree, setSectionThree] = useState({
    video: "",
  });

  const [sectionFive, setSectionFive] = useState({
    title_1: "",
    title_2: "",
    text_link: "",
    link: "",
    bg_photo: "",
    logo: "",
  });

  const [sectionSix, setSectionSix] = useState({
    tile: "",
    icons: [{ icon: "" }],
  });

  function getDateHome() {
    axios
      .get(`${urlApi}landing/g/home`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then(async (response) => {
        if (!response.data.success) return;

        const decrypted = await getTokenDecoded(response.data.data);

        if (decrypted) {
          setSectionOne(decrypted.data[0].section_one);
          setSectionTwo(decrypted.data[0].section_two);
          setSectionThree(decrypted.data[0].section_three);
          setSectioFour(decrypted.data[0].section_four);
          setSectionFive(decrypted.data[0].section_five);
          setSectionSix(decrypted.data[0].section_six);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const modelProps = useMemo(() => {
    switch (deviceType) {
      case "mobile":
        return { position: [0, 0, -60], scale: 0.5 };
      case "tablet":
        return { position: [0, 0, -60], scale: 0.7 };
      default:
        return { position: [0, 0, -1], scale: 0.1 };
    }
  }, [deviceType]);

  const changeImage = useMemo(() => {
    switch (deviceType) {
      case "mobile":
        return { show: true };
      case "tablet":
        return { show: true };
      default:
        return { show: false };
    }
  }, [deviceType]);

  useEffect(() => {
    getDateHome();
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
      <Header dataHeader={context.dataHeader} />

      <SplineModel />

      {/* <!-- Home Section --> */}
      <section className="home" id="section-destination-home">
        <div className="img-container__home">
          {sectionOne.bg_photo != "" ? (
            changeImage.show ? (
              <img
                src={sectionOne.bg_photo_res}
                alt="Imagen desde el backend"
                className="img-fondo__home--res"
                onError={(e) =>
                  console.log("Error cargando imagen sección 1", e)
                }
              />
            ) : (
              <img
                src={sectionOne.bg_photo}
                alt="Imagen desde el backend"
                className="img-fondo__home"
                onError={(e) =>
                  console.log("Error cargando imagen sección 1", e)
                }
              />
            )
          ) : (
            <Loading />
          )}

          <div className="blur-overlay__home"></div>
        </div>

        <div className="container__home">
          <h1 className="title__home text-black text-8xl select-none">
            {sectionOne.company}
          </h1>
          <h1 className="title__home text-6xl select-none">
            {sectionOne.slogan}
          </h1>
          <h5 className="title__home text-6xl select-none">
            {sectionOne.slogan_two}
          </h5>
          <h5 className="title__home text-6xl select-none">
            {sectionOne.slogan_three}
          </h5>
          <Link to={"/gallery"} className="btn__home text-xl">
            Nuestra Galería
          </Link>
        </div>
      </section>

      {/* <!-- About us Section --> */}

      <section className="about" id="section-destination-about">
        {sectionTwo.bg_photo != "" ? (
          <img
            src={sectionTwo.bg_photo}
            alt="Descripción de la imagen"
            className="absolute w-full h-full -z-0"
          />
        ) : (
          <Loading />
        )}
        <div className="content__about">
          <h1 className="title__about text-4xl text-[white] select-none">
            {sectionTwo.title}
          </h1>
          <p className="text__about text-2xl text-[#d1d5dc] select-none">
            {sectionTwo.description}
          </p>
          <Link
            to={"/about-us"}
            className="btn__about text-xl text-[white] hover:text-black hover:bg-[white]"
          >
            Saber más
          </Link>
        </div>
      </section>

      {/* <!-- Commercial Section --> */}
      <section className="commercial" id="section-destination-commercial">
        {sectionThree.video != "" ? (
          <video
            className="video__commercial"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controls={false}
          >
            <source src={sectionThree.video} type="video/mp4" />
          </video>

        ) : (
          <Loading />
        )}
      </section>

      {/* <!-- Collection Section --> */}
      <div id="section-destination-collections">
        <CarouselCollections collections={sectionFour.collection} />
      </div>

      {/* News Section */}
      <section className="news__banner bg-black" id="section-destination-news">
        <div className="container__news__banner">
          <h1 className="title__news__banner text-2xl select-none">
            {sectionFour.news.h1}
          </h1>
          <h2 className="subtitle__news__banner text-2xl text-white select-none">
            {sectionFour.news.title}
          </h2>
          <p className="text__news__banner text-lg text-[#999999] select-none">
            {sectionFour.news.description}
          </p>
          <Link
            to={sectionFour.news.link}
            className="link__news__banner text-xl text-[white] hover:text-black hover:bg-[white]"
          >
            Ver más
          </Link>
        </div>
      </section>

      {/* <!-- D10+ Academy Section --> */}
      <section className="academy" id="section-destination-academy">
        <div
          id="section-d10_academy"
          className="relative h-full w-full bg-black flex flex-col justify-center items-center"
        >
          {/* Imagen fondo */}
          <div className="top-0 left-0 right-0 bottom-0 z-10 absolute">
            {sectionFive.bg_photo != "" ? (
              <img
                className="relative object-cover w-full h-full"
                src={sectionFive.bg_photo}
              />
            ) : (
              <Loading />
            )}
          </div>

          <div className="w-full h-full relative justify-center z-30">
            {/* 3D Model */}
            <div className="section_model_3d absolute z-20 w-[60%] h-full">
              <Canvas className="w-fit h-full">
                <ambientLight />
                <OrbitControls
                  enableZoom={false}
                  autoRotate={false}
                  enableRotate={false}
                />
                <Suspense fallback={null}>
                  <ModelBalonGlass
                    position={modelProps.position}
                    scale={modelProps.scale}
                  />
                </Suspense>
                <Environment preset="sunset" />
              </Canvas>
            </div>
            {/* Video 3D Model */}
            {/* {deviceType == "desktop" && (
              <div className="absolute left-0 top-0 right-0 bottom-0">
                <video className="video__spline" autoPlay muted loop>
                  <source
                    src={videoSplineAcademy}
                    className="w-full h-full"
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
            {deviceType == "tablet" && (
              <div className="absolute left-0 top-0 right-0 bottom-0">
                <video className="video__spline" autoPlay muted loop>
                  <source
                    src={videoSplineAcademy}
                    className="w-full h-full"
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
            {deviceType == "mobile" && (
              <div className="absolute left-0 top-0 right-0 bottom-0">
                <video className="video__spline" autoPlay muted loop>
                  <source
                    src={videoSplineAcademyResponsive}
                    className="w-full h-full m-2"
                    type="video/mp4"
                  />
                </video>
              </div>
            )} */}

            {/* Texto */}
            <div className="select-none absolute top-1/4 left-1/4 mt-5 right-10 ml-8 transform -translate-y-1/2 flex flex-col z-20 items-center justify-center">
              <img
                src={sectionFive.title_1}
                className=" flex justify-center size-48 d10_img__academy"
                alt="Img D10+"
              />
            </div>

            {/* Texto */}
            <div className="select-none absolute top-1/2 left-2/3 mt-6 transform -translate-x-1/2 -translate-y-1/2 flex flex-col z-20 items-center justify-center">
              <h1 className="title__academy text-6xl sm:text-8xl md:text-8xl lg:text-9xl font-black text-[white] mb-4 select-none">
                {sectionFive.title_2}
              </h1>
            </div>

            {/* Ingresa ahora */}
            <div className="relative select-none top-2/3 mt-40 text-center z-40">
              <a
                href={sectionFive.link}
                target="_blank"
                className="text-[white] underline text-4xl font-bold select-none"
              >
                {sectionFive.text_link}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors bg-black" id="section-destination-sponsors">
        <h1 className="title__sponsors text-4xl text-white select-none">
          {sectionSix.tile}
        </h1>
        <div className="container__sponsors">
          <CarouselSponsors sponsors={sectionSix.icons} />
        </div>
      </section>

      <Footer dataFooter={context.dataFooter} />
    </>
  );
}
