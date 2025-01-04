import { ImageLogo } from '@utils/imgs/imgs.jsx'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './header-page.css';

export default function HeaderPage({ dataHeader }) {

  HeaderPage.propTypes = {
    dataHeader: PropTypes.shape({
      bg_photo: PropTypes.string,
      logo: PropTypes.string,
      navStyle: PropTypes.object
    }).isRequired
  };

  const [data, setData] = useState(dataHeader);
  const [navStyle, setNavStyle] = useState(dataHeader.navStyle);

  useEffect(() => {
    setData(dataHeader);
    setNavStyle({
      ...dataHeader.navStyle,
      "--dynamic-bg": `url(${dataHeader.bg_photo})`,
    });
  }, [dataHeader, data]);

  return (
    <nav id="nav_header" className="nav_page" style={navStyle}>
      <Link className='select-none' to={'/'} >
        {data.logo != "" ? (
          <img src={data.logo} alt="logo D10" className="logo" />
        ) :
          (
            <ImageLogo style={{ width: 'auto' }} />
          )}
        {/* <img src={data.logo != "" ? data.logo : ImageLogo()} alt="logo D10" className="logo" /> */}
      </Link>
      <ul className="list__nav_page">
        <li className="items__nav">
          <Link to={'/about-us'} className="a-linear__nav_page text-sm text-[#fff]">
            Quienes somos
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/services'} className="a-linear__nav_page text-sm">
            Servicios
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/contact'} className="a-linear__nav_page text-sm">
            Contactanos
          </Link>
        </li>
      </ul>
      <button className="login__nav_page text-sm text-white hover:text-[#000] hover:bg-[#ffc702]"><a target="_blank" href="https://academia.d10mas.com">D10+</a></button>
    </nav>

  );
}