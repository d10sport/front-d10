import CarouselCollections from "@components/carousel-collections/carousel-collections";
import { useContext, useEffect, useState, useMemo } from "react";
import SplineModel from "@components/spline/spline.jsx";
import getTokenDecoded from "../../token/token-data.js";
import Header from "@layouts/header/header.jsx";
import Footer from "@layouts/footer/footer.jsx";
import AppContext from "@context/app-context";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import "swiper/css";
import "./home.css";

export default function Home() {
  const context = useContext(AppContext);
  const loading = context.loading;
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [deviceType, setDeviceType] = useState("desktop");
  const [isFirstVisit, setIsFirstVisit] = useState(false);

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
    link: "",
    logo: "",
    title: "",
    description: "",
  });

  const [sectionSix, setSectionSix] = useState({
    tile: "",
    icons: [{ icon: "" }],
  });

  const [sectionSeven, setSectionSeven] = useState({
    title: "",
    description: "",
    image: "",
    date: "",
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

  function getLastDataReNews() {
    axios
      .get(`${urlApi}landing/g/last-re-news`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setSectionSeven(response.data[0]);
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
    getLastDataReNews();
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

  useEffect(() => {
    const hasVisited = localStorage.getItem("firstVisit");

    if (!hasVisited) {
      setIsFirstVisit(true);
      localStorage.setItem("firstVisit", "true");
    }
  }, []);

  return (
    <>
      {" "}
      {!loading && (
        <>
          <Header dataHeader={context.dataHeader} />

          {isFirstVisit && <SplineModel />}

          {/* <!-- Home Section --> */}
          <section
            id="home"
            className="relative flex h-screen items-center justify-center"
          >
            <div className="absolute inset-0 z-0">
              <div className="img-container__home">
                {sectionOne.bg_photo !== "" &&
                  (changeImage.show ? (
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
                  ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] to-transparent z-10"></div>
            </div>

            {sectionOne.bg_photo !== "" && (
              <div className="container relative z-10 px-4 text-start">
                <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
                  <span
                    style={{
                      WebkitTextStroke: "3px white",
                      fontSize: "100px",
                      color: "black",
                    }}
                  >
                    {sectionOne.company} <br />
                  </span>
                  {sectionOne.slogan} <br />
                  {sectionOne.slogan_two} <br />
                  {sectionOne.slogan_three}
                </h1>
                <a
                  href="#/services"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 mt-8 bg-white text-black hover:bg-gray-200"
                >
                  Descubre más
                </a>
              </div>
            )}
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
          <section
            id="section-destination-commercial"
            className="bg-black py-24"
          >
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl">
                <div className="relative aspect-video overflow-hidden rounded-lg bg-zinc-800">
                  {sectionThree.video != "" && (
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
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="mt-6 text-center">
                  <h2 className="text-2xl font-bold">{sectionThree.title}</h2>
                  <p className="mt-2 text-gray-400">
                    {sectionThree.description}
                  </p>
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

                {/* Bloque de primer noticia */}

                <div
                  className="relative overflow-hidden rounded-lg border border-zinc-800 bg-black/50 backdrop-blur-sm"
                  style={{ opacity: 1 }}
                >
                  <div className="absolute -right-12 top-5 z-10 rotate-45 bg-white px-12 py-1 text-xs font-bold uppercase tracking-wider text-black">
                    Reciente
                  </div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                    <div
                      className="h-full w-full"
                      style={{ transform: "none" }}
                    >
                      <div className="relative h-full w-full bg-zinc-800">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img
                            alt="Latest news"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            src={sectionSeven.image}
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-gray-300">
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
                          className="lucide lucide-circle-alert mr-1 h-3 w-3 text-white/70"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" x2="12" y1="8" y2="12" />
                          <line x1="12" x2="12.01" y1="16" y2="16" />
                        </svg>
                        Actualización de la empresa
                      </span>
                      <time className="text-sm text-gray-400">
                        {sectionSeven.date_col}
                      </time>
                    </div>
                    <h3
                      className="mb-2 text-xl font-bold leading-tight"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      {sectionSeven.title}
                    </h3>
                    <p
                      className="mb-4 text-sm text-gray-300 line-clamp-3"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      {sectionSeven.description}
                    </p>
                    <div style={{ opacity: 1, transform: "none" }}>
                      <a
                        href="#/news"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 underline-offset-4 h-10 group p-0 text-sm font-medium text-white hover:no-underline"
                      >
                        {/* Leer el artículo completo */}
                        Leer mas artículos
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right ml-1 h-3 w-3 transition-transform group-hover:translate-x-1"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
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
                    src={sectionFive.logo}
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
                  <h2 className="mb-4 text-4xl font-bold">
                    {sectionFive.title}
                  </h2>
                  <p className="mb-6 text-gray-300">
                    {sectionFive.description}
                  </p>
                  <a
                    href={sectionFive.link}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 group border border-white bg-transparent hover:bg-white hover:text-black"
                  >
                    Ingrese ahora
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
            <h1 className="text-center text-lg text-white mb-10 tracking-widest uppercase">
              {sectionSix.tile}
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full px-4 md:px-20">
              {sectionSix.icons.map((src, index) => {
                let totalCols = 6; // Default (desktop)
                if (deviceType === "mobile") totalCols = 2;
                else if (deviceType === "tablet") totalCols = 3;

                const isLastInRow = (index + 1) % totalCols === 0;
                const isLastItem = index === sectionSix.icons.length - 1;
                const isAfterLastItem = index === sectionSix.icons.length - 2;
                const isFirstRow = index < totalCols;
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-center h-24

                  // Desktop
                ${
                  !isLastInRow && !isLastItem && totalCols == 6
                    ? "border-r border-white/10"
                    : ""
                }
                ${
                  !isFirstRow && totalCols == 6
                    ? "border-t border-white/10"
                    : ""
                }
                ${
                  isFirstRow && totalCols == 6
                    ? "border-b border-b-white/10 border-t-2 border-t-transparent"
                    : ""
                }
                ${
                  isLastItem && totalCols == 6
                    ? "border-r border-b-white/10"
                    : ""
                }

                // Mobile
                ${
                  !isLastInRow && !isLastItem && totalCols == 2
                    ? "border-r border-white/10"
                    : ""
                }
                ${
                  !isFirstRow && totalCols == 2
                    ? "border-t border-white/10"
                    : ""
                }
                ${
                  isFirstRow && totalCols == 2
                    ? "border-b border-b-white/10 border-t-2 border-t-transparent"
                    : ""
                }
                ${
                  isLastItem && totalCols == 2
                    ? "border-r border-t border-b-white/10"
                    : ""
                }
                ${
                  isAfterLastItem && totalCols == 2
                    ? "border-b border-white/10"
                    : ""
                }
              `}
                  >
                    <img
                      src={src.icon}
                      alt={`Logo ${index}`}
                      className="h-14 filter grayscale opacity-90 object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </section>
          <Footer dataFooter={context.dataFooter} />
        </>
      )}
    </>
  );
}
