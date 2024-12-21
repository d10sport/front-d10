import { Link } from "react-router-dom";
import { ImageLoading } from '@utils/imgs/imgs.jsx'
import SidePanel from "@components/responsive-side/side-panel.jsx";
import { useEffect, useState } from "react";
import axios from 'axios';
import "./header.css";


export default function Header() {

  const urlApi = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [sectionOne, setSectionOne] = useState({
    logo: '',
    bg_photo: ''
  });

  function getDateLayout() {
    axios.get(`${urlApi}landing/g/layout`, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      }
    })
      .then((response) => {
        setSectionOne(response.data[0].section_one);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const backgroundImage = sectionOne.bg_photo != "" ? sectionOne.bg_photo : ImageLoading();

  const navStyle = {
    animation: `scroll-animation 3s linear both`,
    animationTimeline: `scroll(root block)`,
    animationRange: `0 292px`,
    "--dynamic-bg": `url(${backgroundImage})`
  }

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    getDateLayout();

    // Agregar listener de evento
    window.addEventListener("resize", handleResize);

    // Limpiar listener en desmontaje
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var urlAcademy = `https://academia.${window.location.host}/`;

  return (
    <nav id="nav_header" className="nav fixed" style={navStyle}>
      <Link className='select-none' to={'/'} >
        <img src={sectionOne.logo != "" ? sectionOne.logo : ImageLoading() } alt="logo D10" className="logo" />
      </Link>

      {isMobileView ? (
        // Mostrar SidePanel en vistas móviles
        <SidePanel />
      ) : (
        // Mostrar navegación normal en pantallas grandes
        <>
          <ul className="list__nav">
            <li className="items__nav">
              <Link
                to={"/about-us"}
                className="a-linear__nav text-sm text-[#000]"
              >
                Quienes somos
              </Link>
            </li>
            <li className="items__nav">
              <Link
                to={"/services"}
                className="a-linear__nav text-sm text-[#000]"
              >
                Servicios
              </Link>
            </li>
            <li className="items__nav">
              <Link
                to={"/contact"}
                className="a-linear__nav text-sm text-[#000]"
              >
                Contactanos
              </Link>
            </li>
          </ul>
          <a
            target="_blank"
            href={urlAcademy}
            className="login__nav text-sm text-[#fff] hover:text-white text-center bg-[#000]"
          >
            D10+
          </a>
        </>
      )}
    </nav>
  );
}
