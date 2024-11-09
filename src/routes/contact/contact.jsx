import HeaderPage from '../../layouts/header-pages/header-page';
import icon_fb_color from '../../assets/icons/icon_fb_color.png';
import icon_ig_color from '../../assets/icons/icon_ig_color.png';
import icon_wpp_color from '../../assets/icons/icon_wpp_color.png';
import './contact.css'

export default function Contact() {
  return (
    <>
      <HeaderPage />
      
      <section className="contact">
      <h1 className="title__contact text-8xl text-[#ffc702]">Contactanos</h1>
      <div className="card-form__contact bg-black">
        <div className="cntr-form__contact">
          <h2 className="subtitle__contact text-3xl text-[#d2dcfd]">Envíanos un mensaje</h2>
          <form action="" className="form__contact">
            <div className="cntr-info__contact">
              <div className="info__contact">
                <label className="label__contact text-white">Nombre</label>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="input__contact"
                />
              </div>
              <div className="info__contact">
                <label className="label__contact text-white">Correo</label>
                <input
                  type="email"
                  placeholder="Username@gmail.com"
                  className="input__contact"
                />
              </div>
            </div>
            <div className="cntr-message__contact">
              <label className="label__contact text-white">Mensaje</label>
              <input
                type="text"
                placeholder="Mensaje..."
                className="input__contact"
              />
            </div>
            <div className="cntr-btn__contact">
              <input type="button" value="Enviar" className="btn-input__contact text-xl text-[#ffc702] hover:text-black bg-transparent hover:bg-[#ffc702]" />
            </div>
          </form>
          <div className="cntr-redes__contact">
            <p className="text__contact text-base text-[#d2dcfd]">Escríbenos por otros medios</p>
            <div className="redes__contact">
              <img
                src={icon_wpp_color}
                alt="WhatsApp"
                className="img-redes__contact"
              />
              <img
                src={icon_ig_color}
                alt="Instagram"
                className="img-redes__contact"
              />
              <img 
                src={icon_fb_color} 
                alt="Facebook" 
                className="img-redes__contact" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}