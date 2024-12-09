import { useState } from "react";
// import logo from "@assets/img/logo_sin_fondo.png";
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
        <img alt="logo" className="img__nav-panel" />
        <button onClick={togglePanel} className="btn__nav-panel">
          ☰
        </button>
      </nav>

      <div
        className={`overlay ${isPanelOpen ? "active" : ""}`}
        onClick={closePanel}
      ></div>

      <aside className={`panel ${isPanelOpen ? "active" : ""}`}>
        <div className="cntr-img__panel">
          <img alt="Logo" className="img__panel" />
        </div>
        <a className="link__panel text--active" href="#">
          Quienes somos
        </a>
        <a className="link__panel text--active" href="#">
          Servicios
        </a>
        <a className="link__panel text--active" href="#">
          Contacto
        </a>
        <a className="link__panel text--active" href="#">
          Iniciar sesión
        </a>
      </aside>
    </>
  );
}
