// import CarouselCollections from "@components/carousel-collections/carousel-collections";
// import CarouselSponsors from "@components/carrusel-sponsors/carousel-sponsors";
import { useContext, useState, useEffect } from "react";
// import { Environment, OrbitControls } from "@react-three/drei";
// import ModelBalonGlass from "@utils/model3D/BalonGlass.jsx";
import getTokenDecoded from "../../token/token-data.js";
import SplineModel from "@components/spline/spline.jsx";
import Header from "@layouts/header/header.jsx";
import Footer from "@layouts/footer/footer.jsx";
import AppContext from "@context/app-context";
// import { Canvas } from "@react-three/fiber";
// import { Loading } from "@utils/imgs/imgs";
// import { Link } from "react-router-dom";
import axios from "axios";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./admin.css";

export default function Admin() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [isEditing, setIsEditing] = useState(false);

  //   const list = [
  //     {
  //       title: "D10",
  //       sloganOne: "Viste",
  //       sloganTwo: "tu pasión,",
  //       sloganThree: "entrena tu talento",
  //     },
  //   ];

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

  const [sectionThree, setSectionThree] = useState({
    video: "",
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

  // --------------------------------------

  const [sectionOneAboutUs, setSectionOneAboutUs] = useState({
    title: "",
    description: "",
  });

  const [sectionTwoAboutUs, setSectionTwoAboutUs] = useState({
    title1: "",
    title2: "",
    bg_photo: "",
    subtitle: "",
    description: "",
  });

  const [sectionThreeAboutUs, setSectionThreeAboutUs] = useState({
    title: "",
    description: "",
  });

  const [sectionFourAboutUs, setSectioFourAboutUs] = useState({
    title: "",
    bg_photo: "",
    description: "",
  });

  const [sectionSixAboutUs, setSectionSixAboutUs] = useState({
    title: "",
    bg_photo: "",
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
        setSectionOneAboutUs(response.data[0].section_one);
        setSectionTwoAboutUs(response.data[0].section_two);
        setSectionThreeAboutUs(response.data[0].section_three);
        setSectioFourAboutUs(response.data[0].section_four);
        setSectionSixAboutUs(response.data[0].section_six);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // --------------------------------------

  const [sectionTwoServices, setSectionTwoServices] = useState({
    photo: "",
    title: "",
    subtitle: "",
    description: "",
  });

  const [sectionThreeServices, setSectionThreeServices] = useState({
    photo: "",
    title: "",
    subtitle: "",
    description: "",
  });

  const [sectionFourServices, setSectioFourServices] = useState({
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
        setSectionTwoServices(response.data[0].section_two);
        setSectionThreeServices(response.data[0].section_three);
        setSectioFourServices(response.data[0].section_four);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // --------------------------------------

  useEffect(() => {
    getDateHome();
    getDataAbout();
    getServices();
  }, []);

  return (
    <>
      <Header dataHeader={context.dataHeader} />

      <SplineModel />

      <section className="admin-section">
        {/* --------------- */}
        {/* ----- Home ---- */}
        {/* --------------- */}

        <h1 className="title__admin-section">Home</h1>

        <ul className="list__admin-section">
          <li className="item__admin-section">
            <h1 className="subtitle__admin-section">Inicio</h1>
            <input
              type="text"
              className="input__admin-section"
              value={sectionOne.company}
              readOnly
            />
            <input
              type="text"
              className="input__admin-section"
              value={sectionOne.slogan}
              readOnly
            />
            <input
              type="text"
              className="input__admin-section"
              value={sectionOne.slogan_two}
              readOnly
            />
            <input
              type="text"
              className="input__admin-section"
              value={sectionOne.slogan_three}
              readOnly
            />
            {isEditing ? (
              <div className="confirm-edit__admin-section">
                <p className="text__admin-section">
                  ¿Estás seguro de editarlo?
                </p>
                <button
                  className="btn-confirm__admin-section"
                  onClick={() => console.log("Lógica de edición aquí")}
                >
                  Sí
                </button>
                <button
                  className="btn-cancel__admin-section"
                  onClick={() => setIsEditing(false)}
                >
                  No
                </button>
              </div>
            ) : (
              <button
                className="btn-edit__admin-section"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </li>

          <li className="item__admin-section">
            <h1 className="subtitle__admin-section">Nosotros</h1>
            <input
              type="text"
              className="input__admin-section"
              value={sectionTwo.title}
              readOnly
            />

            <textarea
              type="text"
              className="textarea__admin-section"
              value={sectionTwo.description}
              readOnly
            ></textarea>

            {isEditing ? (
              <div className="confirm-edit__admin-section">
                <p className="text__admin-section">
                  ¿Estás seguro de editarlo?
                </p>
                <button
                  className="btn-confirm__admin-section"
                  onClick={() => console.log("Lógica de edición aquí")}
                >
                  Sí
                </button>
                <button
                  className="btn-cancel__admin-section"
                  onClick={() => setIsEditing(false)}
                >
                  No
                </button>
              </div>
            ) : (
              <button
                className="btn-edit__admin-section"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </li>

          <li className="item__admin-section">
            <h1 className="subtitle__admin-section">Comercial</h1>
            <input
              type="text"
              className="input__admin-section"
              value={sectionThree.video}
              readOnly
            />

            {isEditing ? (
              <div className="confirm-edit__admin-section">
                <p className="text__admin-section">
                  ¿Estás seguro de editarlo?
                </p>
                <button
                  className="btn-confirm__admin-section"
                  onClick={() => console.log("Lógica de edición aquí")}
                >
                  Sí
                </button>
                <button
                  className="btn-cancel__admin-section"
                  onClick={() => setIsEditing(false)}
                >
                  No
                </button>
              </div>
            ) : (
              <button
                className="btn-edit__admin-section"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </li>

          <li className="item__admin-section">
            <h1 className="subtitle__admin-section">News</h1>
            <input
              type="text"
              className="input__admin-section"
              value={sectionFour.news.h1}
              readOnly
            />
            <input
              type="text"
              className="input__admin-section"
              value={sectionFour.news.title}
              readOnly
            />
            <input
              type="text"
              className="input__admin-section"
              value={sectionFour.news.description}
              readOnly
            />
            {isEditing ? (
              <div className="confirm-edit__admin-section">
                <p className="text__admin-section">
                  ¿Estás seguro de editarlo?
                </p>
                <button
                  className="btn-confirm__admin-section"
                  onClick={() => console.log("Lógica de edición aquí")}
                >
                  Sí
                </button>
                <button
                  className="btn-cancel__admin-section"
                  onClick={() => setIsEditing(false)}
                >
                  No
                </button>
              </div>
            ) : (
              <button
                className="btn-edit__admin-section"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </li>

          <li className="item__admin-section">
            <h1 className="subtitle__admin-section">Academia</h1>
            <input
              type="text"
              className="input__admin-section"
              value={sectionFive.title_1}
              readOnly
            />
            <input
              type="text"
              className="input__admin-section"
              value={sectionFive.title_2}
              readOnly
            />
            <input
              type="text"
              className="input__admin-section"
              value={sectionFive.text_link}
              readOnly
            />
            {isEditing ? (
              <div className="confirm-edit__admin-section">
                <p className="text__admin-section">
                  ¿Estás seguro de editarlo?
                </p>
                <button
                  className="btn-confirm__admin-section"
                  onClick={() => console.log("Lógica de edición aquí")}
                >
                  Sí
                </button>
                <button
                  className="btn-cancel__admin-section"
                  onClick={() => setIsEditing(false)}
                >
                  No
                </button>
              </div>
            ) : (
              <button
                className="btn-edit__admin-section"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </li>

          <li className="item__admin-section">
            <h1 className="subtitle__admin-section">Aliados</h1>
            <input
              type="text"
              className="input__admin-section"
              value={sectionSix.tile}
              readOnly
            />

            {isEditing ? (
              <div className="confirm-edit__admin-section">
                <p className="text__admin-section">
                  ¿Estás seguro de editarlo?
                </p>
                <button
                  className="btn-confirm__admin-section"
                  onClick={() => console.log("Lógica de edición aquí")}
                >
                  Sí
                </button>
                <button
                  className="btn-cancel__admin-section"
                  onClick={() => setIsEditing(false)}
                >
                  No
                </button>
              </div>
            ) : (
              <button
                className="btn-edit__admin-section"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </li>

          {/* {list.map((item, index) => (
            <li className="admin__item" key={index}>
              <h2 className="admin__title">{item.title}</h2>
              <input type="text" className="input__admin"  />
              <input type="text" className="input__admin" />
              <input type="text" className="input__admin" />
              <input type="text" className="input__admin" />
              <p className="admin__text">{item.sloganOne}</p>
              <p className="admin__text">{item.sloganTwo}</p>
              <p className="admin__text">{item.sloganThree}</p>
            </li>
          ))} */}
        </ul>

        {/* --------------- */}
        {/* -- Nosotros -- */}
        {/* --------------- */}

        <h1 className="title__admin-section">Nosotros</h1>

        <ul className="list__admin-section">
          <li className="item__admin-section">
            <h1 className="subtitle__admin-section">Conócenos</h1>
            <input
              type="text"
              className="input__admin-section"
              value={sectionOneAboutUs.title}
              readOnly
            />

            <textarea
              type="text"
              className="textarea__admin-section"
              value={sectionOneAboutUs.description}
              readOnly
            ></textarea>

            {isEditing ? (
              <div className="confirm-edit__admin-section">
                <p className="text__admin-section">
                  ¿Estás seguro de editarlo?
                </p>
                <button
                  className="btn-confirm__admin-section"
                  onClick={() => console.log("Lógica de edición aquí")}
                >
                  Sí
                </button>
                <button
                  className="btn-cancel__admin-section"
                  onClick={() => setIsEditing(false)}
                >
                  No
                </button>
              </div>
            ) : (
              <button
                className="btn-edit__admin-section"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </li>

          <li className="item__admin-section">
            <h1 className="subtitle__admin-section">Fundador</h1>
            <input
              type="text"
              className="input__admin-section"
              value={sectionTwoAboutUs.title1}
              readOnly
            />

            <input
              type="text"
              className="input__admin-section"
              value={sectionTwoAboutUs.title2}
              readOnly
            />

            <input
              type="text"
              className="input__admin-section"
              value={sectionTwoAboutUs.subtitle}
              readOnly
            />

            <textarea
              type="text"
              className="textarea__admin-section"
              value={sectionTwoAboutUs.description}
              readOnly
            ></textarea>

            {isEditing ? (
              <div className="confirm-edit__admin-section">
                <p className="text__admin-section">
                  ¿Estás seguro de editarlo?
                </p>
                <button
                  className="btn-confirm__admin-section"
                  onClick={() => console.log("Lógica de edición aquí")}
                >
                  Sí
                </button>
                <button
                  className="btn-cancel__admin-section"
                  onClick={() => setIsEditing(false)}
                >
                  No
                </button>
              </div>
            ) : (
              <button
                className="btn-edit__admin-section"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </li>

          <li className="item__admin-section">
            <h1 className="subtitle__admin-section">Objetivos</h1>
            <input
              type="text"
              className="input__admin-section"
              value={sectionThreeAboutUs.title}
              readOnly
            />

            <textarea
              type="text"
              className="textarea__admin-section"
              value={sectionThreeAboutUs.description}
              readOnly
            ></textarea>

            {isEditing ? (
              <div className="confirm-edit__admin-section">
                <p className="text__admin-section">
                  ¿Estás seguro de editarlo?
                </p>
                <button
                  className="btn-confirm__admin-section"
                  onClick={() => console.log("Lógica de edición aquí")}
                >
                  Sí
                </button>
                <button
                  className="btn-cancel__admin-section"
                  onClick={() => setIsEditing(false)}
                >
                  No
                </button>
              </div>
            ) : (
              <button
                className="btn-edit__admin-section"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </li>

          <li className="item__admin-section">
            <h1 className="subtitle__admin-section">Misión</h1>
            <input
              type="text"
              className="input__admin-section"
              value={sectionFourAboutUs.title}
              readOnly
            />

            <textarea
              type="text"
              className="textarea__admin-section"
              value={sectionFourAboutUs.description}
              readOnly
            ></textarea>

            {isEditing ? (
              <div className="confirm-edit__admin-section">
                <p className="text__admin-section">
                  ¿Estás seguro de editarlo?
                </p>
                <button
                  className="btn-confirm__admin-section"
                  onClick={() => console.log("Lógica de edición aquí")}
                >
                  Sí
                </button>
                <button
                  className="btn-cancel__admin-section"
                  onClick={() => setIsEditing(false)}
                >
                  No
                </button>
              </div>
            ) : (
              <button
                className="btn-edit__admin-section"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </li>

          <li className="item__admin-section">
            <h1 className="subtitle__admin-section">Visión</h1>
            <input
              type="text"
              className="input__admin-section"
              value={sectionSixAboutUs.title}
              readOnly
            />

            <textarea
              type="text"
              className="textarea__admin-section"
              value={sectionSixAboutUs.description}
              readOnly
            ></textarea>

            {isEditing ? (
              <div className="confirm-edit__admin-section">
                <p className="text__admin-section">
                  ¿Estás seguro de editarlo?
                </p>
                <button
                  className="btn-confirm__admin-section"
                  onClick={() => console.log("Lógica de edición aquí")}
                >
                  Sí
                </button>
                <button
                  className="btn-cancel__admin-section"
                  onClick={() => setIsEditing(false)}
                >
                  No
                </button>
              </div>
            ) : (
              <button
                className="btn-edit__admin-section"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </li>
        </ul>

        {/* --------------- */}
        {/* -- Servicios -- */}
        {/* --------------- */}

        <h1 className="title__admin-section">Service</h1>

        <ul className="list__admin-section">
          <li className="item__admin-section">
            <h1 className="subtitle__admin-section">Vestuario</h1>
            <input
              type="text"
              className="input__admin-section"
              value={sectionTwoServices.title}
              readOnly
            />
            <input
              type="text"
              className="input__admin-section"
              value={sectionTwoServices.subtitle}
              readOnly
            />
            <textarea
              type="text"
              className="textarea__admin-section"
              value={sectionTwoServices.description}
              readOnly
            ></textarea>

            {isEditing ? (
              <div className="confirm-edit__admin-section">
                <p className="text__admin-section">
                  ¿Estás seguro de editarlo?
                </p>
                <button
                  className="btn-confirm__admin-section"
                  onClick={() => console.log("Lógica de edición aquí")}
                >
                  Sí
                </button>
                <button
                  className="btn-cancel__admin-section"
                  onClick={() => setIsEditing(false)}
                >
                  No
                </button>
              </div>
            ) : (
              <button
                className="btn-edit__admin-section"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </li>

          <li className="item__admin-section">
            <h1 className="subtitle__admin-section">Entrenamiento</h1>
            <input
              type="text"
              className="input__admin-section"
              value={sectionThreeServices.title}
              readOnly
            />
            <input
              type="text"
              className="input__admin-section"
              value={sectionThreeServices.subtitle}
              readOnly
            />
            <textarea
              type="text"
              className="textarea__admin-section"
              value={sectionThreeServices.description}
              readOnly
            ></textarea>

            {isEditing ? (
              <div className="confirm-edit__admin-section">
                <p className="text__admin-section">
                  ¿Estás seguro de editarlo?
                </p>
                <button
                  className="btn-confirm__admin-section"
                  onClick={() => console.log("Lógica de edición aquí")}
                >
                  Sí
                </button>
                <button
                  className="btn-cancel__admin-section"
                  onClick={() => setIsEditing(false)}
                >
                  No
                </button>
              </div>
            ) : (
              <button
                className="btn-edit__admin-section"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </li>

          <li className="item__admin-section">
            <h1 className="subtitle__admin-section">Capacitación</h1>
            <input
              type="text"
              className="input__admin-section"
              value={sectionFourServices.title}
              readOnly
            />
            <input
              type="text"
              className="input__admin-section"
              value={sectionFourServices.subtitle}
              readOnly
            />
            <textarea
              type="text"
              className="textarea__admin-section"
              value={sectionFourServices.description}
              readOnly
            ></textarea>

            {isEditing ? (
              <div className="confirm-edit__admin-section">
                <p className="text__admin-section">
                  ¿Estás seguro de editarlo?
                </p>
                <button
                  className="btn-confirm__admin-section"
                  onClick={() => console.log("Lógica de edición aquí")}
                >
                  Sí
                </button>
                <button
                  className="btn-cancel__admin-section"
                  onClick={() => setIsEditing(false)}
                >
                  No
                </button>
              </div>
            ) : (
              <button
                className="btn-edit__admin-section"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </li>
        </ul>
      </section>

      <Footer dataFooter={context.dataFooter} />
    </>
  );
}
