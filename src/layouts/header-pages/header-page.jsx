import { ImageLoading } from '@utils/imgs/imgs.jsx'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import './header-page.css';

export default function HeaderPage() {

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
    
    useEffect(() => {
      getDateLayout();
    }, []);

    const backgroundImage = sectionOne.bg_photo != "" ? sectionOne.bg_photo : ImageLoading();

    const navStyle = {
      "--dynamic-bg": `url(${backgroundImage})`
    }

  return (
    <nav id="nav_header" className="nav_page" style={navStyle}>
      <Link className='select-none' to={'/'} >
        <img src={sectionOne.logo != "" ? sectionOne.logo : ImageLoading() } alt="logo D10" className="logo" />
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