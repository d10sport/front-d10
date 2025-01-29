import PropTypes from "prop-types";
import "./footer.css";

export default function Footer({ dataFooter }) {
  Footer.propTypes = {
    dataFooter: PropTypes.object,
  };

  function handleClickIdRedirect(id) {
    if (id) {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }

  return (
    <>
      {/* <!-- Footer Section --> */}

      <footer className="footer__copyright text-white bg-[#191919]">
        <div className="copy__footer">
          <p>©2024 D10. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="ctnr-redes__footer">
          <div className="redes__footer"></div>
        </div>
      </footer>

      <footer className="footer__info text-white bg-[#141414]">
        <div className="contact__footer">
          <div className="container-contact__footer">
            <h1 className="title__footer text-7xl">D10+</h1>
            {/* <input
              type="text"
              placeholder="Enter Your Email"
              className="input__footer"
            /> */}
          </div>
        </div>
        <div className="services__footer">
          <ul className="list__footer">
            <p className="text-list__footer text-[#999999]">Inicio</p>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-home")
                }
              >
                Inicio
              </button>
            </li>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-about")
                }
              >
                Nosotros
              </button>
            </li>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-commercial")
                }
              >
                Comercial
              </button>
            </li>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-collections")
                }
              >
                Colecciones
              </button>
            </li>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-news")
                }
              >
                Noticias
              </button>
            </li>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-academy")
                }
              >
                Academia
              </button>
            </li>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-sponsors")
                }
              >
                Socios
              </button>
            </li>
          </ul>
          <ul className="list__footer">
            <p className="text-list__footer text-[#999999]">Nosotros</p>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-meet")
                }
              >
                Conócenos
              </button>
            </li>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-founder")
                }
              >
                Fundador
              </button>
            </li>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-objectives")
                }
              >
                Objetivos
              </button>
            </li>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-mission")
                }
              >
                Misión
              </button>
            </li>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-vision")
                }
              >
                Vision
              </button>
            </li>
          </ul>
          <ul className="list__footer">
            <p className="text-list__footer text-[#999999]">Servicios</p>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-vestry")
                }
              >
                Vestuario
              </button>
            </li>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-workout")
                }
              >
                Entrenamiento
              </button>
            </li>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-training")
                }
              >
                Capacitación
              </button>
            </li>
          </ul>
          <ul className="list__footer">
            <p className=" text-[#999999]">Contacto</p>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-contact-form")
                }
              >
                Contacto
              </button>
            </li>
            <li className="item-list__footer">
              <button
                onClick={() =>
                  handleClickIdRedirect("section-destination-networks")
                }
              >
                Redes
              </button>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
