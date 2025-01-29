import logo from "@assets/img/logo_sin_fondo.png";
import { ImageLogo } from '@utils/imgs/imgs.jsx'
import { Link } from "react-router-dom";
import { useState } from "react";
import "./side-panel.css";

export default function SidePanel() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <>
      <nav className="nav-panel">
        <Link className='select-none' to={'/'} >
          <ImageLogo style={{ maxWidth: '80px' }} alt="Logo" />
        </Link>
        <button onClick={togglePanel} className="btn__nav-panel">
          ☰
        </button>
      </nav>

      <div
        className={`overlay ${isPanelOpen ? "active" : ""}`}
        onClick={closePanel}
      ></div>

      <aside className={`panel ${isPanelOpen ? "active" : ""}`}>
        <div className="cntr-section1__panel">
          <div className="cntr-img__panel">
            <img src={logo} alt="Logo" className="img__panel" />
          </div>
          <Link to={'/about-us'} className="link__panel text--active text-2xl">
            Quienes somos
          </Link>
          <Link to={'/services'} className="link__panel text--active text-2xl">
            Servicios
          </Link>
          <Link to={'/contact'} className="link__panel text--active text-2xl">
            Contacto
          </Link>
        </div>
        <div className="cntr-section2__panel">
          <footer className="footer__panel">&#169; D10mas</footer>
        </div>
      </aside>
    </>
  );
}
