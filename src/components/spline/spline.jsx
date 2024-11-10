import logo from '@assets/img/logo_sin_fondo.png'
import { useEffect, useState } from 'react';
import './spline.css';

export default function SplineModel() {
  const [isFinished, setIsFinished] = useState(false);
  const [moveTitle, setMoveTitle] = useState(false);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    document.getElementById('nav_header').classList.add('hidden');

    setTimeout(() => {
      setMoveTitle(true);
    }, 2000);

    setTimeout(() => {
      document.body.classList.remove('overflow-hidden');
      document.getElementById('nav_header').classList.remove('hidden');
      document.querySelector('.wpp').classList.remove('hidden');
      window.scrollTo(0, 0);
    }, 2800);

    setTimeout(() => {
      setIsFinished(true);
    }, 3000);
  }, []);

  return (
    <section id='section_spline' className={`h-screen w-full select-none relative z-50 ${isFinished ? 'hidden' : ''}`}>
      {/* Título en el centro */}
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