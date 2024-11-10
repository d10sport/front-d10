/* eslint-disable no-unused-vars */
import logo from '@assets/img/logo_sin_fondo.png'
import fondo from '@assets/img/fondo_home_d10_academy.png'
import { useEffect, useState } from 'react';
import './spline.css';

export default function SplineModel() {
  const [isFinished, setIsFinished] = useState(false);
  const [moveTitle, setMoveTitle] = useState(false);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    document.getElementById('nav_header').classList.add('hidden');

    setTimeout(() => {
      document.body.classList.remove('overflow-hidden');
      document.getElementById('nav_header').classList.remove('hidden');
      document.querySelector('.wpp').classList.remove('hidden');
      window.scrollTo(0, 0);
      setIsFinished(true);
    }, 3000);
  }, []);

  return (
    <section id='section_spline' className={`h-screen w-full select-none relative z-50 ${isFinished ? 'hidden' : ''}`}>
      <div className='absolute top-0 left-0'>
        <img src={fondo} className='w-screen h-screen object-cover' alt="fondo" />
      </div>
      {!moveTitle && (
        <>
          <div className='div_img fade-in'>
            <img src={logo} alt="logo D10" />
          </div>
          <div className='div_title_logo fade-in'>
            <h1 className='title'>D10</h1>
          </div>
        </>
      )}
    </section>
  );
}