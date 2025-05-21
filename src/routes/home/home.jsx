import CarouselCollections from "@components/carousel-collections/carousel-collections";
import CarouselSponsors from "@components/carrusel-sponsors/carousel-sponsors";
import { useContext, useEffect, useState, useMemo } from "react";
import SplineModel from "@components/spline/spline.jsx";
import getTokenDecoded from "../../token/token-data.js";
import Header from "@layouts/header/header.jsx";
import Footer from "@layouts/footer/footer.jsx";
import AppContext from "@context/app-context";
import { ArrowRight } from "lucide-react";

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
      label: "",
      title1: "",
      title2: "",
      title3: "",
      description: "",
      link: "",
    },
  });

  const [sectionThree, setSectionThree] = useState({
    video: "",
    title: "",
    description: "",
  });

  const [sectionFive, setSectionFive] = useState({
    title_1: "",
    title_2: "",
    title_3: "",
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
          <h1 className="title__home  text-3xl lg:text-6xl select-none">
            {sectionOne.slogan}
          </h1>
          <h5 className="title__home  text-3xl lg:text-6xl select-none">
            {sectionOne.slogan_two}
          </h5>
          <h5 className="title__home  text-3xl lg:text-6xl select-none">
            {sectionOne.slogan_three}
          </h5>
          <Link to={"/gallery"} className="btn__home text-xl">
            Nuestra Galería
          </Link>
        </div>
      </section>

      {/* <!-- About us Section --> */}
      <section id="section-destination-about" className="bg-zinc-900 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
              {sectionTwo.title}
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-300">
              {sectionTwo.description}
            </p>
            <Link
              to={"/about-us"}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 group border border-white bg-transparent hover:bg-white hover:text-black"
            >
              Saber más
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- Commercial Section --> */}

      <section id="section-destination-commercial" className="bg-black py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-zinc-800">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold">{sectionThree.title}</h2>
              <p className="mt-2 text-gray-400">{sectionThree.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Collection Section --> */}
      <div id="section-destination-collections">
        <CarouselCollections collections={sectionFour.collection} />
      </div>

      {/* News Section */}

      <section
        id="section-destination-news"
        className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black py-24"
      >
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-30" />
        <div className="absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-16 bottom-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="mb-2 inline-flex items-center space-x-2">
                <div className="h-px w-8 bg-white/50" />
                <span className="text-sm font-medium uppercase tracking-wider text-white/70">
                  {sectionFour.news.label}
                </span>
              </div>
              <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                {sectionFour.news.title1}{" "}
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {sectionFour.news.title2}
                </span>{" "}
                {sectionFour.news.title3}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                {sectionFour.news.description}
              </p>
              <Link
                to={sectionFour.news.link}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 group w-fit border border-white bg-transparent hover:bg-white hover:text-black"
              >
                Ver todas las noticias
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Bloque de código opcional */}

            {/* <div className="relative">
              <div className="absolute -left-10 -top-10 h-20 w-20 rounded-full border border-zinc-800"></div>
              <div className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full border border-zinc-800"></div>
              <div
                className="relative space-y-6 rounded-lg border border-zinc-800 bg-black/50 p-8 backdrop-blur-sm"
                style={{ opacity: 1 }}
              >
                <div
                  className="group flex cursor-pointer items-center space-x-4 rounded-md p-3 transition-colors hover:bg-white/5"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white/70 transition-colors group-hover:bg-white/10 group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-alert h-5 w-5"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" x2="12" y1="8" y2="12"></line>
                      <line x1="12" x2="12.01" y1="16" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      Company Updates
                    </h3>
                    <p className="text-sm text-gray-400">
                      Latest updates and articles
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>

                <div
                  className="group flex cursor-pointer items-center space-x-4 rounded-md p-3 transition-colors hover:bg-white/5"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white/70 transition-colors group-hover:bg-white/10 group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trending-up h-5 w-5"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      Industry Trends
                    </h3>
                    <p className="text-sm text-gray-400">
                      Latest updates and articles
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>

                <div
                  className="group flex cursor-pointer items-center space-x-4 rounded-md p-3 transition-colors hover:bg-white/5"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white/70 transition-colors group-hover:bg-white/10 group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-newspaper h-5 w-5"
                    >
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                      <path d="M18 14h-8"></path>
                      <path d="M15 18h-5"></path>
                      <path d="M10 6h8v4h-8V6Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      Press Releases
                    </h3>
                    <p className="text-sm text-gray-400">
                      Latest updates and articles
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-6">
                  <div className="flex -space-x-2">
                    {["A", "B", "C"].map((letter) => (
                      <div
                        key={letter}
                        className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-black bg-zinc-800"
                      >
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                          {letter}
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">
                    12 new articles this week
                  </span>
                </div>
              </div>
            </div> */}

            {/* Fin de bloque de código opcional */}
          </div>
        </div>
      </section>

      {/* <!-- D10+ Academy Section --> */}

      <section id="section-destination-academy" className="bg-black py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-x-12 md:space-y-0">
            <div className="relative h-32 w-32 md:h-48 md:w-48">
              <img
                alt="Academy Logo"
                loading="lazy"
                decoding="async"
                className="object-contain"
                src={sectionFive.title_1}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <div className="max-w-xl text-center md:text-left">
              <h2 className="mb-4 text-4xl font-bold">{sectionFive.title_2}</h2>
              <p className="mb-6 text-gray-300">{sectionFive.title_3}</p>
              <a
                href={sectionFive.link}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 group border border-white bg-transparent hover:bg-white hover:text-black"
              >
                {sectionFive.text_link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors" id="section-destination-sponsors">
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
