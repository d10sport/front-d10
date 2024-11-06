/* eslint-disable react/no-unescaped-entities */
import { BackgroundHome, BackgroundAboutUsHome, BackgroundHomeD10Academy, Team1, Team2, Team3, Team4, Team5 } from '../../utils/imgs/imgs.jsx'
import { Icon1, Icon2, Icon3, Icon4, Wpp } from '../../utils/icons/icons.jsx'
import { Environment, OrbitControls } from '@react-three/drei';
import { VideoHome } from "../../utils/videos/videos.jsx";
import ModelBalon3d from '../../utils/model3D/Balon3d.jsx';
import Header from "../../layouts/header/header.jsx";
import Carousel from "../../layouts/carousel/carousel.jsx";
import SplineModel from '../spline/spline.jsx';
import { Canvas } from '@react-three/fiber';
import { Link } from "react-router-dom";
import { Suspense } from 'react';
import './home.css';

export default function Home() {

  return (
    <>
      {/* <!-- Header Section --> */}
      <Header />

      {/* Frames iniciales */}
      <SplineModel />

      <div className="wpp hidden">
        <a href="https://wa.me/Numero" target='_blank'>
          <Wpp />
        </a>
      </div>

      {/* <!-- Home Section --> */}
      <section className="home">
        <div className="img-container__home">
          <BackgroundHome />
          <div className="blur-overlay__home"></div>
        </div>

        <div className="container__home">
          <h1 className="title__home text-8xl">D10</h1>
          <h1 className="title__home text__color__white text-6xl">Viste</h1>
          <h1 className="title__home text__color__white text-6xl">tu pasión,</h1>
          <h1 className="title__home text__color__white text-6xl">entrena tu talento</h1>
        </div>
      </section>

      {/* <!-- About us Section --> */}
      <section className="about">
        <BackgroundAboutUsHome />
        <div className='content__about'>
          <h1 className="title__about text-4xl">Quienes somos</h1>
          <p className="text__about text-xl">
            En D10 vivimos y respiramos fútbol. Somos una organización comprometida
            con el desarrollo de talentos en el fútbol, desde los primeros pasos
            hasta alcanzar su máximo potencial. Donde puedan forjar no solo sus
            habilidades en el campo, sino también su carácter y amor por el deporte.
          </p>
          <a href="#" className="btn__about text-2xl">SABER MÁS</a>
        </div>
      </section>

      {/* <!-- Commercial Section --> */}
      <section className="commercial">
        <VideoHome />
      </section>

      {/* <!-- Collection Section --> */}

      <Carousel />

      {/* News Section */}
      <section className="news">
        <div className="container__news">
          <h1 className="title__news text-2xl">Noticia</h1>
          <h2 className="subtitle__news text-2xl">Campeones año 2024</h2>
          <p className="text__news text-lg">
            A chic and fully-furnished 2-bedroom apartment with <br />
            panoramic city views... Read More
          </p>
          <Link to={'/collections'} className="link__news text-xl">Ver más</Link>
        </div>
      </section>

      {/* <!-- D10+ Academy Section --> */}
      <section className="academy">
        <div id='section-d10_academy' className='relative h-full w-full bg-black flex flex-col justify-center items-center '>

          {/* Imagen fondo */}
          <div className='top-0 left-0 right-0 bottom-0 z-10 absolute'>
            <BackgroundHomeD10Academy />
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
            <div className='relative select-none top-2/3 mt-40 text-center z-40'>
              <Link to="/services" className='text-[#FFC702] underline text-4xl font-bold'>Ingresa ahora</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors">
        <h1 className="title__sponsors text-4xl">Partners de Éxito</h1>
        <div className="container__sponsors">
          <Team1 />
          <Team2 />
          <Team3 />
          <Team4 />
          <Team5 />
        </div>
      </section>

      {/* <!-- Footer Section --> */}
      <footer className="footer__info">
        <div className="contact__footer">
          <div className="container-contact__footer">
            <h1 className="title__footer text-4xl">D10</h1>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="input__footer"
            />
          </div>
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
        <div className="ctnr-redes__footer">
          <div className="redes__footer">
            <Icon1 />
            <Icon2 />
            <Icon3 />
            <Icon4 />
          </div>
        </div>
      </footer>
    </>
  )
}
