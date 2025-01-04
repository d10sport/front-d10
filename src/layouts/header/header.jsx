import SidePanel from "@components/responsive-side/side-panel.jsx";
import { ImageLogo } from '@utils/imgs/imgs.jsx'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./header.css";

export default function Header({ dataHeader }) {
  Header.propTypes = {
    dataHeader: PropTypes.shape({
      navStyle: PropTypes.object,
      bg_photo: PropTypes.string,
      logo: PropTypes.string,
    }),
  };

  const [data, setData] = useState(dataHeader);
  const [navStyle, setNavStyle] = useState(dataHeader.navStyle);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    setData(dataHeader);
    setNavStyle({
      ...dataHeader.navStyle,
      "--dynamic-bg": `url(${dataHeader.bg_photo})`,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dataHeader, data]);

  var urlAcademy = `https://academia.${window.location.host}/`;

  return (
    <nav id="nav_header" className="nav fixed" style={navStyle}>
      <Link className='select-none' to={'/'} >
        {data.logo == "" ? (
          <ImageLogo style={{ maxWidth: '40px' }} alt="Logo" />
        ) :
          (
            <img src={data.logo} alt="logo D10" className="logo" />
          )}
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
