import icon_wpp_color from "@assets/icons/icon_wpp_color.png";
import HeaderPage from "@layouts/header-pages/header-page";
import { useEffect, useState, useContext } from "react";
import SplineModel from "@components/spline/spline.jsx";
import AppContext from "@context/app-context";
import { toast } from "sonner";
import axios from "axios";
import "./contact.css";

export default function Contact() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Message, setMessage] = useState();

  const [sectionOne, setSectionOne] = useState({
    title: "",
    bg_photo: "",
    subtitle: "",
  });

  function getDataContact() {
    axios
      .get(`${urlApi}landing/g/contact`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setSectionOne(response.data[0].section_one);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function postEmailContact() {
    toast.promise(
      axios
        .post(
          `${urlApi}landing/i/mail-contact`,
          {
            name: Name,
            email: Email,
            message: Message,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "api-key": apiKey,
            },
          }
        )
        .then((response) => {
          if (response.data.success) {
            setName("");
            setEmail("");
            setMessage("");
            return "Correo enviado con éxito";
          } else {
            throw new Error(
              "Error al enviar el correo: " + response.data.message
            );
          }
        }),
      {
        loading: "Enviando correo...",
        success: (msg) => msg,
        error: (err) => err.message || "Error en el envió de correo",
      }
    );
  }

  useEffect(() => {
    getDataContact();
  }, []);

  return (
    <>
      <HeaderPage dataHeader={context.dataHeader} />

      <SplineModel />

      <section
        className="contact"
        style={{
          backgroundImage: `url(${
            sectionOne.bg_photo != "" ? sectionOne.bg_photo : ""
          })`,
        }}
      >
        <h1 className="title__contact text-8xl text-[white]">
          {sectionOne.title}
        </h1>
        <div className="card-form__contact">
          <div className="cntr-form__contact">
            <h2 className="subtitle__contact text-3xl text-[white]">
              {sectionOne.subtitle}
            </h2>
            <div
              className="form__contact"
              id="section-destination-contact-form"
            >
              <div className="cntr-info__contact">
                <div className="info__contact">
                  <label className="label__contact text-white">Nombre</label>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="input__contact"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="info__contact">
                  <label className="label__contact text-white">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input__contact"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="cntr-message__contact">
                <label className="label__contact text-white">Mensaje</label>
                <input
                  type="text"
                  placeholder="Mensaje..."
                  className="input__contact"
                  value={Message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="cntr-btn__contact">
                <button
                  className="btn-input__contact text-xl text-[white] hover:text-black bg-transparent hover:bg-[white]"
                  onClick={() => postEmailContact()}
                >
                  Enviar
                </button>
              </div>
            </div>
            <div
              className="cntr-redes__contact"
              id="section-destination-networks"
            >
              <p className="text__contact text-base text-[white]">
                Escríbenos por otros medios
              </p>
              <div className="redes__contact">
                <a
                  href="https://wa.me/573118345217/?text=Hola..."
                  target="_blank"
                >
                  <img
                    src={icon_wpp_color}
                    alt="WhatsApp"
                    className="img-redes__contact"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
