import { useEffect, useState } from 'react'
import logo from '@assets/img/logo_sin_fondo.png';
import './maintenance.css';

export default function Maintenance({ maintenance, photo }) {
  const [bgPhoto, setBgPhoto] = useState(photo)

  useEffect(() => {
    if (maintenance) {
      document.title = "Maintenance"
      setBgPhoto(photo)
    } else {
      document.title = "D10"
    }
  }, [photo])

  // useEffect(() => {
  //   setTimeout(() => {
  //     document.body.classList.add('overflow-hidden');
  //     document.getElementById('nav_header')?.classList.add('hidden');
  //     window.scrollTo(0, 0);
  //   }, 3600);
  // }, [])

  return (
    <div id='section_maintenance' className={`h-screen w-full select-none z-[60] ${maintenance && photo != "" ? 'relative' : 'hidden'}`}>
      <div className='w-full h-full absolute top-0 left-0 bottom-0'>
        <img className='h-full w-full' src={bgPhoto != "" ? bgPhoto : logo} alt="logo D10" />
      </div>
      <div className='w-full h-full absolute top-0 left-0 bottom-0 bg-black bg-opacity-70'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <h1 className='text-white text-6xl'>Estamos en mantenimiento</h1>
          <p className='text-white text-2xl'>Estamos trabajando para mejorar tu experiencia</p>
        </div>
      </div>
    </div>
  )
}