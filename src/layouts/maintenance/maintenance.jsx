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

  return (
    <div id='section_maintenance' className={`h-screen w-full select-none z-[60] ${maintenance && photo != "" ? 'relative' : 'hidden'}`}>
      <div className='w-full h-full absolute top-0 left-0 bottom-0'>
        {bgPhoto != "" && <img className='h-full w-auto' src={bgPhoto} alt="bgPhoto" />}
      </div>
      <div className='w-full sm:h-full h-1/5 md:h-full absolute top-0 left-0 bottom-0 bg-transparent user-select-none'>
        <img className='h-full w-auto' src={logo} alt="logo D10" />
      </div>
      <div className='w-full h-full absolute top-0 left-0 bottom-0 bg-transparent user-select-none'>
        <div className='w-full h-full flex flex-col justify-center gap-4 items-center text-center'>
          <h1 className='text-white text-9xl font-bold'>D10 +</h1>
          <h1 className='text-white text-6xl'>¡¡ Llegaremos pronto !!</h1>
          <p className='text_300 text-2xl'>Estamos trabajando para mejorar tu experiencia.</p>
        </div>
      </div>
    </div>
  )
}