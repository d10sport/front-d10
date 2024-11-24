import { useEffect } from 'react';
import fondoHomeD10Academy from '../../assets/img/fondo_home_d10_academy.png';
import HeaderPage from '../../layouts/header-pages/header-page'
import img1_services from '../../assets/img/img1_services.png'
import img2_services from '../../assets/img/img2_services.png'
import img3_services from '../../assets/img/img3_services.png'
import './services.css'

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderPage />
      <div className='h-20 text-center mt-12'>
        <h1 className='text_300 text-4xl font-extrabold'>Servicios</h1>
      </div>
      <div className='w-full grid items-center gap-52 mb-12 py-10'>
        <section id='first_services' className='w-full h-96'>
          <div className='flex justify-between w-full h-full'>
            <aside className='relative w-1/2 bg-transparent h-full'>
              <div className='absolute left-36 top-0 z-10 grid gap-4'>
                <span className='text-xl text_300'>Servicios de vestuario</span>
                <h2 className='text-white text-3xl'>Indumentaria deportiva</h2>
              </div>
              <div className='absolute top-24 -right-36 z-10 rounded-3xl w-full h-64'>
                <aside className='relative h-full w-full'>
                  <div className='absolute top-0 left-0 flex p-4 justify-center flex-col h-full items-center'>
                    <span className='relative text-pretty text-xl inset-0.5 text-white font-medium rounded-xl w-full z-40'>
                      Nuestros productos ofrecen un diseño ergonómico que se ajuste
                      perfectamente al cuerpo del futbolista, maximizando la
                      comodidad y la movilidad. Ofreciendo opciones de
                      personalización, como colores, materiales y tamaños,
                      para que los equipos puedan adaptar los productos a sus
                      preferencias individuales, utilizando materiales de vanguardia
                      que ofrezcan durabilidad, resistencia y transpirabilidad,
                      fundamentales para el desempeño óptimo durante los
                      entrenamientos.</span>
                  </div>
                  <img className='aspect-video absolute left-0 top-0 h-full w-full opacity-20 rounded-3xl z-10 object-cover' src={fondoHomeD10Academy} />
                  <div className="absolute h-full w-full bg-gray-200 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"></div>
                  <div className='absolute bg-white/25 -right-1/2 blur-[45px] h-full w-full rounded-3xl z-20'></div>
                </aside>
              </div>
            </aside>
            <aside className='relative w-1/2 h-full right-30'>
              <div className='absolute'>
                <img className='rounded-3xl object-cover' src={img1_services} alt="img" />
              </div>
            </aside>
          </div>
        </section>


        <section id='second_services' className='w-full h-96'>
          <div className='flex justify-between w-full h-full'>
            <aside className='relative w-1/2 h-full'>
              <div className='absolute right-0'>
                <img className='rounded-3xl object-cover' src={img2_services} alt="img" />
              </div>
            </aside>
            <aside className='relative h-full w-1/2 bg-transparent'>
              <div className='absolute right-36 top-0 z-10 grid gap-4'>
                <span className='text-xl text_300 text-end'>Servicios de entrenamiento</span>
                <h2 className='text-white text-3xl'>Programas de entrenamiento exclusivos</h2>
              </div>
              <div className='absolute top-24 -left-36 left z-10 rounded-3xl w-full h-64'>
                <aside className='relative h-full w-full'>
                  <div className='absolute top-0 left-0 flex p-4 justify-center flex-col h-full items-center'>
                    <span className='relative text-pretty text-xl inset-0.5 text-white font-medium rounded-xl w-full z-40'>
                      Ofrecemos acceso a programas de entrenamiento exclusivos desarrollados en
                      colaboración con clubes y entrenadores de futbol formativo y profesional
                      para contribuir con el crecimiento de los entrenadores de los clubes asociados
                      y con el objetivo de aportar un grano de arena en la formación deportiva de sus jugadores.
                    </span>
                  </div>
                  <img className='aspect-video absolute left-0 top-0 h-full w-full opacity-20 rounded-3xl z-10 object-cover' src={fondoHomeD10Academy} />
                  <div className="absolute h-full w-full bg-gray-200 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"></div>
                  <div className='absolute bg-white/25 -left-1/2 blur-[45px] h-full w-full rounded-3xl z-20'></div>
                </aside>
              </div>
            </aside>
          </div>
        </section>

        <section id='third_services' className='w-full h-96 mb-14'>
          <div className='flex justify-between w-full h-full px-8'>
            <aside className='relative h-full w-1/2 bg-transparent'>
              <div className='absolute left-20 top-0 z-10 grid gap-4'>
                <span className='text-xl text_300'>Servicios de capacitación</span>
                <h2 className='text-white text-3xl'>Scouting y capacitación</h2>
              </div>
              <div className='absolute top-24 -right-20 z-10 rounded-3xl w-full h-64'>
                <aside className='relative h-full w-full'>
                  <div className='absolute top-0 left-0 flex p-4 justify-center flex-col h-full items-center'>
                    <span className='relative text-pretty text-xl inset-0.5 text-white font-medium rounded-xl w-full z-40'>
                      Ofrecemos un proceso de veedurías con scoutings profesionales, con la finalidad
                      de buscar y descubrir jóvenes talentos que posean habilidades sobresalientes
                      en el fútbol y que tengan el potencial de destacar en niveles superiores,
                      analizando el rendimiento de jugadores actuales en busca de posibles fichajes
                      para las categorías juveniles, ampliando la búsqueda más allá de las fronteras
                      nacionales, identificando talentos en diferentes países y regiones.
                    </span>
                  </div>
                  <img className='aspect-video absolute left-0 top-0 h-full w-full opacity-20 rounded-3xl z-10 object-cover' src={fondoHomeD10Academy} />
                  <div className="absolute h-full w-full bg-gray-200 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"></div>
                  <div className='absolute bg-white/15 -right-1/2 blur-[45px] h-full w-full rounded-3xl z-20'></div>
                </aside>
              </div>
            </aside>
            <aside className='relative w-1/2 h-full'>
              <div className='absolute w-full right-24'>
                <img className='rounded-3xl w-full h-full object-cover' src={img3_services} alt="img" />
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  )
}