import { Environment, OrbitControls } from '@react-three/drei';
import ModelBalonGlass from '@utils/model3D/BalonGlass.jsx';
import logo from '@assets/img/logo_sin_fondo.png';
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './spline.css';

export default function SplineModel() {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    document.getElementById('nav_header')?.classList.add('hidden');

    setTimeout(() => {
      document.body.classList.remove('overflow-hidden');
      document.getElementById('nav_header')?.classList.remove('hidden');
      document.querySelector('.wpp')?.classList.remove('hidden');
      window.scrollTo(0, 0);
    }, 3500);

    setTimeout(() => {
      setIsFinished(true);
    }, 3600);
  }, []);

  return (
    <section id='section_spline' className={`h-screen w-full select-none relative z-50 ${isFinished ? 'hidden' : ''}`}>
      {/* Título en el centro */}
        <>
          <div className='div_img fade-in'>
            <img src={logo} alt="logo D10" />
          </div>
          <div className='div_title_logo fade-in'>
            <h1 className='title'>D10</h1>
          </div>
        </>

      {/* Balon Glass Model */}
      {!isFinished && (
        <div id='model_glass' className="full-screen active animate-jump-in">
          <Canvas className="w-full h-[105%;] canvas">
            <ambientLight />
            <OrbitControls enableZoom={false} autoRotate={false} enableRotate={false} />
            <Suspense fallback={null}>
              <ModelBalonGlass position={[0, 0, -60]} scale={1.2} />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div>
      )}
    </section>
  );
}