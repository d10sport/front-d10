import { BackgroundHome, BackgroundAboutUsHome, BackgroundHomeD10Academy, Team1, Team2, Team3, Team4, Team5 } from '../../utils/imgs/imgs.jsx'
import { Wpp } from '../../utils/icons/icons.jsx'
import { Environment, OrbitControls } from '@react-three/drei';
import Carousel from "../../components/carousel/carousel.jsx";
import SplineModel from '../../components/spline/spline.jsx';
import ModelBalon3d from '../../utils/model3D/Balon3d.jsx';
import { VideoHome } from "../../utils/videos/videos.jsx";
import { Autoplay, Pagination } from 'swiper/modules';
import Header from "../../layouts/header/header.jsx";
import Footer from "../../layouts/footer/footer.jsx";
import { Canvas } from '@react-three/fiber';
import { Link } from "react-router-dom";
import { Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importar los estilos básicos de Swiper
import 'swiper/css/navigation'; // Importar estilos específicos si usas navegación
import 'swiper/css/pagination'; // Importar estilos específicos si usas paginación

// Importar módulos adicionales si necesitas
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
          <h1 className="title__home text-black text-8xl">D10</h1>
          <h1 className="title__home text-6xl">Viste</h1>
          <h1 className="title__home text-6xl">tu pasión,</h1>
          <h1 className="title__home text-6xl">entrena tu talento</h1>
        </div>
      </section>

      {/* <!-- About us Section --> */}
      <section className="about">
        <BackgroundAboutUsHome />
        <div className='content__about'>
          <h1 className="title__about text-4xl text-[#ffc702]">Quienes somos</h1>
          <p className="text__about text-xl text-white">
            En D10 vivimos y respiramos fútbol. Somos una organización comprometida
            con el desarrollo de talentos en el fútbol, desde los primeros pasos
            hasta alcanzar su máximo potencial. Donde puedan forjar no solo sus
            habilidades en el campo, sino también su carácter y amor por el deporte.
          </p>
          
          <Link to={'/about-us'} className="btn__about text-2xl text-[#ffc702] hover:text-white hover:bg-[#ffc702]">
            SABER MÁS
          </Link>

        </div>
      </section>

      {/* <!-- Commercial Section --> */}
      <section className="commercial">
        <VideoHome />
      </section>

      {/* <!-- Collection Section --> */}

      <Carousel />

      {/* News Section */}

      <section className="news__banner bg-black">
        <div className="container__news__banner">
          <h1 className="title__news__banner text-2xl text-[#ffc702]">Seccion de Noticias</h1>
          <h2 className="subtitle__news__banner text-2xl text-white">Noticias del año 20XX</h2>
          <p className="text__news__banner text-lg text-[#999999]">
            Aquí podrás darle clic para ver las noticias <br />
            más relevantes del año 20XX
          </p>
          <Link to={'/news'} className="link__news__banner text-xl text-[#ffc702] hover:text-white hover:bg-[#ffc702]">Ver más</Link>
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
              <a href="https://academia.d10plus.com/" target='_blank' className='text-[#FFC702] underline text-4xl font-bold'>Ingresa ahora</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors bg-black">
        <h1 className="title__sponsors text-4xl text-white">Partners de Éxito</h1>
        <div className="container__sponsors">
          <Swiper className='w-full flex py-8 my-4 justify-center items-center'
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={4}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Team1 />
            </SwiperSlide>
            <SwiperSlide>
              <Team2 />
            </SwiperSlide>
            <SwiperSlide>
              <Team3 />
            </SwiperSlide>
            <SwiperSlide>
              <Team4 />
            </SwiperSlide>
            <SwiperSlide>
              <Team5 />
            </SwiperSlide>
            <SwiperSlide>
              <Team1 />
            </SwiperSlide>
            <SwiperSlide>
              <Team2 />
            </SwiperSlide>
            <SwiperSlide>
              <Team3 />
            </SwiperSlide>
            <SwiperSlide>
              <Team4 />
            </SwiperSlide>
            <SwiperSlide>
              <Team5 />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <Footer />

    </>
  )
}
