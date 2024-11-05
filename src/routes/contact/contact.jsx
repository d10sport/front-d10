import HeaderPage from '../../layouts/header_pages/header_page'
import './contact.css'

export default function Contact() {
  return (
    <>
      <HeaderPage />
      
      <section className="contact">
      <h1 className="title__contact text-8xl">Contactanos</h1>
      <div className="card-form__contact">
        <div className="cntr-form__contact">
          <h2 className="subtitle__contact text-3xl">Envíanos un mensaje</h2>
          <form action="" className="form__contact">
            <div className="cntr-info__contact">
              <div className="info__contact">
                <label className="label__contact">Nombre</label>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="input__contact"
                />
              </div>
              <div className="info__contact">
                <label className="label__contact">Correo</label>
                <input
                  type="email"
                  placeholder="Username@gmail.com"
                  className="input__contact"
                />
              </div>
            </div>
            <div className="cntr-message__contact">
              <label className="label__contact">Mensaje</label>
              <input
                type="text"
                placeholder="Mensaje..."
                className="input__contact"
              />
            </div>
            <div className="cntr-btn__contact">
              <input type="button" value="Enviar" className="btn-input__contact text-xl" />
            </div>
          </form>
          <div className="cntr-redes__contact">
            <p className="text__contact text-base">Escríbenos por otros medios</p>
            <div className="redes__contact">
              <img
                src="wppicon.png"
                alt="WhatsApp"
                className="img-redes__contact"
              />
              <img
                src="igicon.png"
                alt="Instagram"
                className="img-redes__contact"
              />
              <img src="fbicon.png" alt="Facebook" className="img-redes__contact" />
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}