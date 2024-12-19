/* eslint-disable no-undef */
import { ImageLoading } from '@utils/imgs/imgs.jsx'
import CarouselCollections from '@components/carousel-collections/carousel-collections';
import CarouselSponsors from '@components/carrusel-sponsors/carousel-sponsors';
import { Environment, OrbitControls } from '@react-three/drei';
import ModelBalonGlass from '@utils/model3D/BalonGlass.jsx';
import SplineModel from '@components/spline/spline.jsx';
// import { VideoHome } from "@utils/videos/videos.jsx";
import Header from "@layouts/header/header.jsx";
import Footer from "@layouts/footer/footer.jsx";
import { Wpp } from '@utils/icons/icons.jsx';
import { Canvas } from '@react-three/fiber';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import './home.css';

export default function Home() {
  const urlApi = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [sectionOne, setSectionOne] = useState({
    slogan: '',
    company: '',
    bg_photo: ''
  });

  const [sectionTwo, setSectionTwo] = useState({
    title: '',
    description: '',
    bg_photo: ''
  });

  const [sectionFour, setSectioFour] = useState({
    collection: [{
      title: '',
      photo: '',
      link: ''
    }],
    news: {
      h1: '',
      title: '',
      description: '',
      link: ''
    }
  });

  const [sectionThree, setSectionThree] = useState({
    video: ''
  });

  const [sectionFive, setSectionFive] = useState({
    title_1: '',
    title_2: '',
    text_link: '',
    link: '',
    bg_photo: ''
  })

  const [sectionSix, setSectionSix] = useState({
    tile: '',
    icons: [
      { icon: ''}
    ]
  })

  function getDateHome() {
    axios.get(`${urlApi}landing/g/home`, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      }
    })
      .then((response) => {
        setSectionOne(response.data[0].section_one);
        setSectionTwo(response.data[0].section_two);
        setSectionThree(response.data[0].section_three);
        setSectioFour(response.data[0].section_four);
        setSectionFive(response.data[0].section_five);
        setSectionSix(response.data[0].section_six);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getDateHome();
  }, []);

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
          <img src={sectionOne.bg_photo != "" ? sectionOne.bg_photo : ImageLoading() } alt="Descripción de la imagen" className="img-fondo__home" />
          <div className="blur-overlay__home"></div>
        </div>

        <div className="container__home">
          <h1 className="title__home text-black text-8xl select-none">{sectionOne.company}</h1>
          <h1 className="title__home text-6xl select-none">{sectionOne.slogan}</h1>
          <h1 className="title__home text-6xl select-none">tu pasión,</h1>
          <h1 className="title__home text-6xl select-none">entrena tu talento</h1>
        </div>
      </section>

      {/* <!-- About us Section --> */}
      <section className="about">
        <img src={sectionTwo.bg_photo != "" ? sectionTwo.bg_photo : ImageLoading() } alt="Descripción de la imagen" className="absolute w-full h-full -z-0" />
        <div className='content__about'>
          <h1 className="text-4xl text-[#ffc702] select-none">{sectionTwo.title}</h1>
          <p className="text__about text-2xl text-white select-none">
            {sectionTwo.description}
          </p>
          <Link to={'/about-us'} className="btn__about text-xl text-[#ffc702] hover:text-black hover:bg-[#ffc702]">
            Saber más
          </Link>
        </div>
      </section>

      {/* <!-- Commercial Section --> */}
      <section className="commercial">
        {/* <VideoHome url={sectionThree.video} /> */}
        <video src={ sectionThree.video != "" ? sectionThree.video : ImageLoading() } className="video__commercial" autoPlay muted loop></video>
      </section>

      {/* <!-- Collection Section --> */}
      <CarouselCollections collections={sectionFour.collection} />

      {/* News Section */}

      <section className="news__banner bg-black">
        <div className="container__news__banner">
          <h1 className="title__news__banner text-2xl text-[#ffc702] select-none">Seccion de Noticias</h1>
          <h2 className="subtitle__news__banner text-2xl text-white select-none">{sectionFour.news.title}</h2>
          <p className="text__news__banner text-lg text-[#999999] select-none">
            {sectionFour.news.description}
          </p>
          <Link to={sectionFour.news.link} className="link__news__banner text-xl text-[#ffc702] hover:text-black hover:bg-[#ffc702]">Ver más</Link>
        </div>
      </section>

      {/* <!-- D10+ Academy Section --> */}
      <section className="academy">
        <div id='section-d10_academy' className='relative h-full w-full bg-black flex flex-col justify-center items-center'>

          {/* Imagen fondo */}
          <div className='top-0 left-0 right-0 bottom-0 z-10 absolute'>
            <img className='relative object-cover w-full h-full' src={sectionFive.bg_photo != "" ? sectionFive.bg_photo : ImageLoading()} />
          </div>

          <div className='w-full h-full grid place-content-center justify-center z-30'>
            {/* 3D Model */}
            <div className='section_model_3d absolute z-20 w-[60%] h-full'>
              <Canvas className='w-fit h-full'>
                <ambientLight />
                <OrbitControls enableZoom={false} autoRotate={false} enableRotate={false} />
                <Suspense fallback={null}>
                  <ModelBalonGlass position={[0, 0, -1]} scale={0.1} />
                </Suspense>
                <Environment preset="sunset" />
              </Canvas>
            </div>

            {/* Texto */}
            <div className='select-none absolute top-1/3 mt-5 left-1/3  transform -translate-y-1/2 flex flex-col z-20 items-center justify-center'>
              <h1 className='text-9xl font-black text-[#FFC702] mb-4 select-none'>{sectionFive.title_1}</h1>
            </div>

            {/* Texto */}
            <div className='select-none absolute top-1/2 left-2/3 mt-6 transform -translate-x-1/2 -translate-y-1/2 flex flex-col z-20 items-center justify-center'>
              <h1 className='text-9xl font-black text-[#FFC702] mb-4 select-none'>{sectionFive.title_2}</h1>
            </div>

            {/* Ingresa ahora */}
            <div className='relative select-none top-2/3 mt-40 text-center z-40'>
              <a href={sectionFive.link} target='_blank' className='text-[#FFC702] underline text-4xl font-bold select-none'>{sectionFive.text_link}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors bg-black">
        <h1 className="title__sponsors text-4xl text-white select-none">{sectionSix.tile}</h1>
        <div className="container__sponsors">
          <CarouselSponsors sponsors={sectionSix.icons} />
        </div>
      </section>

      <Footer />

    </>
  )
}
