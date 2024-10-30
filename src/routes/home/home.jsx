/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import './home.css';

import fondo from '../../assets/img/fondo2.jpg';

import logo from '../../assets/icons/logo.png';

import brush from '../../assets/icons/brush.png';
import team1 from '../../assets/icons/team1.png';
import team2 from '../../assets/icons/team2.png';
import team3 from '../../assets/icons/team3.png';
import team4 from '../../assets/icons/team4.png';
import team5 from '../../assets/icons/team5.png';

import video from '../../assets/video/ford-commercial.mp4';

import item1 from '../../assets/img/items1.png';
import item2 from '../../assets/img/items2.png';
import item3 from '../../assets/img/items3.png';
import item4 from '../../assets/img/items4.png';
import item5 from '../../assets/img/items5.png';

import news1 from '../../assets/img/news1.png';

import icon1 from '../../assets/icons/icon1.png';
import icon2 from '../../assets/icons/icon2.png';
import icon3 from '../../assets/icons/icon3.png';
import icon4 from '../../assets/icons/icon4.png';

import { Environment, OrbitControls } from '@react-three/drei';
import fondoD10 from './../../assets/img/Noise.png'
import ModelBalon3d from '../../utils/model3D/Balon3d';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      {/* <!-- Home Section --> */}
      <nav className="nav">
        <img src={logo} alt="logo D10" className="logo" />
        <ul className="list__nav">
          <li className="items__nav">
            <Link to={'/about-us'} className="a-linear__nav">
              Quienes somos
            </Link>
          </li>
          <li className="items__nav">
            <Link to={'/services'} className="a-linear__nav">
              Servicios
            </Link>
          </li>
          <li className="items__nav">
            <Link to={'/contact'} className="a-linear__nav">
              Contactanos
            </Link>
          </li>
        </ul>
        <button className="login__nav">D10+</button>
      </nav>

      <section className="home">
        {/* <img src={fondo} alt="Fondo" className="img-fondo__home"/> */}
        <div className="img-container__home">
          <img src={fondo} alt="Descripción de la imagen" className="img-fondo__home" />
          <div className="blur-overlay__home"></div>
        </div>

        <div className="container__home">
          <h1 className="title__home">D10</h1>
          <h1 className="title__home text__color__white">Viste</h1>
          <h1 className="title__home text__color__white">tu pasión,</h1>
          <h1 className="title__home text__color__white">entrena tu talento</h1>
        </div>
      </section>

      {/* <!-- Sponsors Section --> */}

      <section className="sponsors">
        <img src={brush} alt="paint brush" className="brush__sponsors" />
        <img src={brush} alt="paint brush" className="brush__sponsors" />
        <img src={brush} alt="paint brush" className="brush__sponsors" />
        <img src={brush} alt="paint brush" className="brush__sponsors" />
        <img src={brush} alt="paint brush" className="brush__sponsors" />
        <div className="upimg__sponsors">
          <img src={team1} alt="logo team" className="team__sponsors" />
          <img src={team2} alt="logo team" className="team__sponsors" />
          <img src={team3} alt="logo team" className="team__sponsors" />
          <img src={team4} alt="logo team" className="team__sponsors" />
          <img src={team5} alt="logo team" className="team__sponsors" />
        </div>
      </section>

      {/* <!-- Commercial Section --> */}

      <section className="commercial">
        <video
          src={video}
          className="video__commercial"
          autoPlay
          muted
          loop
        ></video>
      </section>

      {/* <!-- Collection Section --> */}

      <section className="coleccion">
        <div className="container__coleccion small__space">
          <ul className="list__coleccion">
            <li className="items__coleccion item--disable">Coleccion 20XX</li>
            <li className="items__coleccion item--disable">Coleccion 20XX</li>
            <li className="items__coleccion">Coleccion 20XX</li>
            <li className="items__coleccion item--disable">Coleccion 20XX</li>
            <li className="items__coleccion item--disable">Coleccion 20XX</li>
          </ul>
        </div>
        <div className="container__coleccion mid__space">
          <img src={item1} alt="Modelo" />
          <img src={item2} alt="Modelo" />
          <img src={item3} alt="Modelo" />
          <img src={item4} alt="Modelo" />
          <img src={item5} alt="Modelo" />
        </div>
        <div className="container__coleccion small__space close__space">
          <span className="selection__coleccion selection--disable"></span>
          <span className="selection__coleccion selection--disable"></span>
          <span className="selection__coleccion"></span>
          <span className="selection__coleccion selection--disable"></span>
          <span className="selection__coleccion selection--disable"></span>
        </div>
      </section>

      <section className="news">
        <div className="container__news small__space">
          <p className="text__news">1 of 60</p>
          <p className="text__news">Noticias de coleccion 2024</p>
          <div className="btn-grp__news">
            <button className="btn__news">←</button>
            <button className="btn__news btn__news--enable">→</button>
          </div>
        </div>
        <div className="container__news big__space">
          <div className="card__news">
            <img src={news1} alt="img noticia" className="img__news" />
            <h1>Noticia año 20XX</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              accusantium hic reprehenderit
            </p>
          </div>
          <div className="card__news">
            <img src={news1} alt="img noticia" className="img__news" />
            <h1>Noticia año 20XX</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              accusantium hic reprehenderit
            </p>
          </div>
          <div className="card__news">
            <img src={news1} alt="img noticia" className="img__news" />
            <h1>Noticia año 20XX</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              accusantium hic reprehenderit
            </p>
          </div>
          <div className="card__news">
            <img src={news1} alt="img noticia" className="img__news" />
            <h1>Noticia año 20XX</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              accusantium hic reprehenderit
            </p>
          </div>
          <div className="card__news">
            <img src={news1} alt="img noticia" className="img__news" />
            <h1>Noticia año 20XX</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              accusantium hic reprehenderit
            </p>
          </div>
        </div>
      </section>

      {/* <!-- D10+ Academy Section --> */}

      <section className="academy">
        <div id='section-d10_academy' className='relative h-full w-full bg-black flex flex-col justify-center items-center '>

          {/* Imagen fondo */}
          <div className='top-0 left-0 right-0 bottom-0 z-10 absolute'>
            <img className='relative object-cover w-full h-full' src={fondoD10} />
          </div>

          <div className='w-full h-full grid place-content-center justify-center z-30'>
            {/* 3D Model */}
            <div className='section_model_3d absolute z-20 w-[60%] h-full'>
              <Canvas className='w-fit h-full'>
                <ambientLight />
                <OrbitControls enableZoom={false} autoRotate={true} enableRotate={false} autoRotateSpeed={1.5} />
                <Suspense fallback={null}>
                  <ModelBalon3d position={[0, -2.2, 0]} scale={2.3} />
                </Suspense>
                <Environment preset="sunset" />
              </Canvas>
            </div>

            {/* Texto */}
            <div className='select-none absolute top-1/3 mt-5 left-1/3  transform -translate-y-1/2 flex flex-col z-20 items-center justify-center'>
              <h1 className='text-9xl font-black text-[#FFC702] mb-4'>D10 +</h1>
            </div>

            {/* Texto */}
            <div className='select-none absolute top-1/2 left-2/3 mt-6 transform -translate-x-1/2 -translate-y-1/2 flex flex-col z-20 items-center justify-center'>
              <h1 className='text-9xl font-black text-[#FFC702] mb-4'>Academy</h1>
            </div>

            {/* Ingresa ahora */}
            <div className='relative top-2/3 mt-40 text-center z-40'>
              <Link to="/services" className='text-[#FFC702] underline text-4xl font-bold'>Ingresa ahora</Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer Section --> */}

      <footer className="footer__info">
        <div className="contact__footer">
          <h1>D10</h1>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="input__footer"
          />
        </div>
        <div className="services__footer">
          <ul className="list__footer">
            <p className="text-list__footer">Home</p>
            <li className="item-list__footer">Hero Section</li>
            <li className="item-list__footer">Features</li>
            <li className="item-list__footer">Properties</li>
            <li className="item-list__footer">Testimonials</li>
            <li className="item-list__footer">FAQ's</li>
          </ul>
          <ul className="list__footer">
            <p className="text-list__footer">About</p>
            <li className="item-list__footer">Our Story</li>
            <li className="item-list__footer">Our Works</li>
            <li className="item-list__footer">How it Works</li>
            <li className="item-list__footer">Our Team</li>
            <li className="item-list__footer">Our Client</li>
          </ul>
          <ul className="list__footer">
            <p className="text-list__footer">Services</p>
            <li className="item-list__footer">Valuation Mastery</li>
            <li className="item-list__footer">Strategic Marketing</li>
            <li className="item-list__footer">Negotiation Wizardry</li>
            <li className="item-list__footer">Closing Success</li>
            <li className="item-list__footer">Property Management</li>
          </ul>
          <ul className="list__footer">
            <p className="text-list__footer">Contact</p>
            <li className="item-list__footer">Contact Form</li>
            <li className="item-list__footer">Our Offices</li>
          </ul>
        </div>
      </footer>

      <footer className="footer__copyright">
        <div className="copy__footer">
          <p>©2024 D10. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="redes__footer">
          <img src={icon1} alt="icon" className="img__footer" />
          <img src={icon2} alt="icon" className="img__footer" />
          <img src={icon3} alt="icon" className="img__footer" />
          <img src={icon4} alt="icon" className="img__footer" />
        </div>
      </footer>
    </>
  )
}
