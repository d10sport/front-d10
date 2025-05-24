import { useEffect, useState, useContext } from "react";
import { ImageLogo } from "@utils/imgs/imgs.jsx";
import Header from "@layouts/header/header.jsx";
import AppContext from "@context/app-context";
import axios from "axios";

export default function Services() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [sectionOne, setSectionOne] = useState({
    title: "",
    description: "",
  });

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

  const [sectionFour, setSectionFour] = useState({
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
        setSectionOne(response.data[0].section_one);
        setSectionTwo(response.data[0].section_two);
        setSectionThree(response.data[0].section_three);
        setSectionFour(response.data[0].section_four);
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
      <Header dataHeader={context.dataHeader} />

      <section className="relative w-full overflow-hidden bg-black text-white py-16 md:py-24">
        <canvas
          className="absolute inset-0 w-full h-full opacity-50"
          style={{ mixBlendMode: "overlay" }}
          width="1864"
          height="320"
        ></canvas>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div
            className="max-w-3xl mx-auto text-center"
            style={{
              opacity: 1,
              willChange: "opacity, transform",
              transform: "none",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              {sectionOne.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {sectionOne.description}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 md:w-56 md:h-56 rounded-full bg-gradient-to-l from-indigo-500/10 to-pink-500/10 blur-3xl"></div>
      </section>

      <section className="relative w-full overflow-hidden bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Bloque 1 */}

            <div className="relative mb-24 md:mb-32 last:mb-0">
              <div className="absolute inset-0 -z-10 opacity-20">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,20 C100,10 200,30 400,25"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                  />
                  <path
                    d="M0,35 C110,30 185,40 400,37"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.28"
                  />
                  <path
                    d="M0,50 C120,50 170,50 400,49"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.26"
                  />
                  <path
                    d="M0,65 C130,70 155,60 400,61"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.24"
                  />
                  <path
                    d="M0,80 C140,90 140,70 400,73"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.22"
                  />
                  <path
                    d="M0,95 C150,110 125,80 400,85"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.2"
                  />
                  <path
                    d="M0,110 C160,130 110,90 400,97"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.18"
                  />
                  <path
                    d="M0,125 C170,150 95,100 400,109"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.16"
                  />
                  <path
                    d="M0,140 C180,170 80,110 400,121"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.14"
                  />
                  <path
                    d="M0,155 C190,190 65,120 400,133"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.12"
                  />
                </svg>
              </div>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div
                  className="w-full md:w-1/2"
                  style={{
                    opacity: 1,
                    transform: "none",
                    willChange: "opacity, transform",
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3] group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    {sectionTwo.photo != "" ? (
                      <img
                        alt="Minimalist Design"
                        loading="lazy"
                        decoding="async"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        src={sectionTwo.photo}
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    ) : (
                      <ImageLogo
                        className="rounded-3xl object-cover"
                        alt="img"
                      />
                    )}
                  </div>
                </div>
                <div
                  className="w-full md:w-1/2"
                  style={{
                    opacity: 1,
                    transform: "none",
                    willChange: "opacity, transform",
                  }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {sectionTwo.subtitle}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {sectionTwo.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Bloque 2 */}

            <div className="relative mb-24 md:mb-32 last:mb-0">
              <div className="absolute inset-0 -z-10 opacity-20">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,20 C100,10 200,30 400,25"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                  />
                  <path
                    d="M0,35 C110,30 185,40 400,37"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.28"
                  />
                  <path
                    d="M0,50 C120,50 170,50 400,49"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.26"
                  />
                  <path
                    d="M0,65 C130,70 155,60 400,61"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.24"
                  />
                  <path
                    d="M0,80 C140,90 140,70 400,73"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.22"
                  />
                  <path
                    d="M0,95 C150,110 125,80 400,85"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.2"
                  />
                  <path
                    d="M0,110 C160,130 110,90 400,97"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.18"
                  />
                  <path
                    d="M0,125 C170,150 95,100 400,109"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.16"
                  />
                  <path
                    d="M0,140 C180,170 80,110 400,121"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.14"
                  />
                  <path
                    d="M0,155 C190,190 65,120 400,133"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.12"
                  />
                </svg>
              </div>
              <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
                <div
                  className="w-full md:w-1/2"
                  style={{
                    opacity: 1,
                    transform: "none",
                    willChange: "opacity, transform",
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3] group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    {sectionThree.photo != "" ? (
                      <img
                        alt="Minimalist Design"
                        loading="lazy"
                        decoding="async"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        src={sectionThree.photo}
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    ) : (
                      <ImageLogo
                        className="rounded-3xl object-cover"
                        alt="img"
                      />
                    )}
                  </div>
                </div>
                <div
                  className="w-full md:w-1/2"
                  style={{
                    opacity: 1,
                    transform: "none",
                    willChange: "opacity, transform",
                  }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {sectionThree.subtitle}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {sectionThree.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Bloque 3 */}

            <div className="relative mb-24 md:mb-32 last:mb-0">
              <div className="absolute inset-0 -z-10 opacity-20">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,20 C100,10 200,30 400,25"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                  />
                  <path
                    d="M0,35 C110,30 185,40 400,37"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.28"
                  />
                  <path
                    d="M0,50 C120,50 170,50 400,49"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.26"
                  />
                  <path
                    d="M0,65 C130,70 155,60 400,61"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.24"
                  />
                  <path
                    d="M0,80 C140,90 140,70 400,73"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.22"
                  />
                  <path
                    d="M0,95 C150,110 125,80 400,85"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.2"
                  />
                  <path
                    d="M0,110 C160,130 110,90 400,97"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.18"
                  />
                  <path
                    d="M0,125 C170,150 95,100 400,109"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.16"
                  />
                  <path
                    d="M0,140 C180,170 80,110 400,121"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.14"
                  />
                  <path
                    d="M0,155 C190,190 65,120 400,133"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.12"
                  />
                </svg>
              </div>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div
                  className="w-full md:w-1/2"
                  style={{
                    opacity: 1,
                    transform: "none",
                    willChange: "opacity, transform",
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3] group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    {sectionFour.photo != "" ? (
                      <img
                        alt="Minimalist Design"
                        loading="lazy"
                        decoding="async"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        src={sectionFour.photo}
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    ) : (
                      <ImageLogo
                        className="rounded-3xl object-cover"
                        alt="img"
                      />
                    )}
                  </div>
                </div>
                <div
                  className="w-full md:w-1/2"
                  style={{
                    opacity: 1,
                    transform: "none",
                    willChange: "opacity, transform",
                  }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {sectionFour.subtitle}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {sectionFour.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fondos decorativos */}
        <div className="absolute top-1/4 left-0 w-32 h-32 rounded-full bg-gradient-to-r from-neutral-800/30 to-neutral-600/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 rounded-full bg-gradient-to-l from-neutral-800/30 to-neutral-600/20 blur-3xl"></div>
      </section>
    </>
  );
}
