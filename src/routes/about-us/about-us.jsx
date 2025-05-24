import { IconD10Mas, IconD10 } from "../../utils/icons/icons";
import { useEffect, useState, useContext } from "react";
import Header from "@layouts/header/header.jsx";
import Footer from "@layouts/footer/footer.jsx";
import AppContext from "@context/app-context";
import axios from "axios";

export default function AboutUs() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  // const [sectionOne, setSectionOne] = useState({
  //   title: "",
  //   description: "",
  // });

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

  async function getDataAbout() {
    await axios
      .get(`${urlApi}landing/g/aboutus`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        if (response.data?.length == 0 || response.data[0] == undefined) return;
        // setSectionOne(response.data[0].section_one);
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
    return true;
  }

  // useEffect(() => {
  //   context.getDataPage(getDataAbout());
  // }, []);

  useEffect(() => {
    getDataAbout();
  }, []);

  return (
    <>
      <Header dataHeader={context.dataHeader} />

      <section className="min-h-screen bg-black text-white">
        {/* Fundador */}

        <section
          className="relative min-h-[70vh] w-full"
          id="section-destination-founder"
        >
          <div className="absolute inset-0 z-0">
            <img
              alt="Founder background"
              decoding="async"
              data-nimg="fill"
              className="object-cover brightness-50"
              src={sectionTwo.bg_photo}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
          <div className="container relative z-20 mx-auto grid h-full grid-cols-1 md:grid-cols-2 px-4 py-24">
            <div className="flex flex-col items-start justify-center text-left">
              <div className="relative">
                <div className="absolute -left-6 top-1/2 h-12 w-1 bg-white transform -translate-y-1/2"></div>
                <h2 className="mb-2 text-lg font-medium uppercase tracking-widest text-gray-300">
                  {sectionTwo.title1}
                </h2>
                <h1 className="mb-2 text-5xl font-bold tracking-tight md:text-6xl">
                  {sectionTwo.title2}
                </h1>
                <div className="mb-6 h-px w-24 bg-white/30"></div>
                <h2 className="mb-8 text-3xl font-medium text-gray-300">
                  {sectionTwo.subtitle}
                </h2>
              </div>
              <div className="max-w-xl">
                <p className="text-lg leading-relaxed text-gray-200">
                  {sectionTwo.description}
                </p>
                {/* <p className="text-lg leading-relaxed text-gray-200">
                  Fundada en [año], nuestra empresa ha estado a la vanguardia de la innovación en [sector]. Con pasión por la excelencia y un compromiso con la calidad, nuestro fundador estableció una empresa que ha crecido desde una pequeña startup hasta convertirse en un líder del sector.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-200">
                  Nuestra trayectoria se ha caracterizado por la mejora continua, el crecimiento estratégico y una dedicación inquebrantable al éxito de nuestros clientes.
                </p> */}
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center relative">
              <div className="absolute right-0 bottom-0 h-4/5 w-4/5 border-r-2 border-b-2 border-white/20"></div>
              <div className="absolute right-8 bottom-8 h-4/5 w-4/5 border-r-2 border-b-2 border-white/10"></div>
            </div>
          </div>
        </section>

        {/* Objetivos */}

        <section
          className="bg-zinc-900 py-24"
          id="section-destination-objectives"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-10 text-4xl font-bold">{sectionThree.title}</h2>
              <div className="space-y-6 text-left">
                <p className="text-lg text-gray-300">
                  {sectionThree.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Misión */}
        <section className="relative py-24" id="section-destination-mission">
          <div className="absolute inset-0 z-0">
            <img
              alt="Mission background"
              loading="lazy"
              decoding="async"
              className="object-cover brightness-40"
              src={sectionFour.bg_photo}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }}
            />
          </div>
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div className="container relative z-20 mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-8 text-4xl font-bold">{sectionFour.title}</h2>
              <p className="text-xl leading-relaxed text-gray-200">
                {sectionFour.description}
              </p>
            </div>
          </div>
        </section>

        {/* Franja */}
        <section className="bg-zinc-900 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
              {sectionFive.length > 0 ? (
                sectionFive.map((item, index) => (
                  <div
                    key={index}
                    className="relative h-12 w-24 md:h-16 md:w-32 grayscale transition-all duration-300 hover:grayscale-0"
                  >
                    <img
                      alt={item.alt || "Image Sponsor"}
                      loading="lazy"
                      decoding="async"
                      className="object-contain"
                      src={item.icon}
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: 0,
                        color: "transparent",
                      }}
                    />
                  </div>
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
          </div>
        </section>

        {/* <div className="sponsors__aboutus bg-black">
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
        </div> */}

        {/* Vision */}

        <section className="relative py-24" id="section-destination-vision">
          <div className="absolute inset-0 z-0">
            <img
              alt="Vision background"
              loading="lazy"
              decoding="async"
              className="object-cover brightness-40"
              src={sectionSix.bg_photo}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }}
            />
          </div>
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div className="container relative z-20 mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-8 text-4xl font-bold">{sectionSix.title}</h2>
              <p className="text-xl leading-relaxed text-gray-200">
                {sectionSix.description}
              </p>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}
