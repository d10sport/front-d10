import ModelBalonGlass from '../../utils/model3D/BalonGlass.jsx';
import { Environment, OrbitControls } from '@react-three/drei';
import ModelBalon3d from '../../utils/model3D/Balon3d.jsx';
import logo from '../../assets/img/logo_sin_fondo.png';
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './spline.css';

export default function SplineModel() {
  const [showModel, setShowModel] = useState(1);
  const [moveTitle, setMoveTitle] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    document.getElementById('nav_header').classList.add('hidden');
    const timers = [
      setTimeout(() => {
        setShowModel(0);
        setMoveTitle(true);
      }, 3500),
      setTimeout(() => {
        setIsFinished(true);
      }, 4000),
      setTimeout(() => {
        document.body.classList.remove('overflow-hidden');
        document.getElementById('nav_header').classList.remove('hidden');
        document.querySelector('.wpp').classList.remove('hidden');
        window.scrollTo(0, 0);
      }, 4500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className={`h-screen w-full ${isFinished ? 'hidden' : ''}`}>
      {/* Título en el centro */}
      {!moveTitle && (
        <>
          <div className='div_img'>
            <img src={logo} alt="logo D10" />
          </div>
          <div className='div_title_logo'>
            <h1 className='title'>D10</h1>
          </div>
        </>
      )}

      {/* Balon Glass Model */}
      {!isFinished && showModel === 1 && (
        <div id='model_glass' className="full-screen active">
          <Canvas className="w-full h-full canvas">
            <ambientLight />
            <OrbitControls enableZoom={false} autoRotate={false} enableRotate={false} />
            <Suspense fallback={null}>
              <ModelBalonGlass position={[0, 0, -60]} scale={1.0} />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div>
      )}

      {/* Balon 3D Model */}
      {!isFinished && showModel === 6 && (
        <div className="full-screen active">
          <Canvas className="w-full h-full">
            <ambientLight />
            <OrbitControls enableZoom={false} autoRotate={true} enableRotate={false} autoRotateSpeed={1.5} />
            <Suspense fallback={null}>
              <ModelBalon3d position={[0, -2.2, 0]} scale={2.3} />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div>
      )}
    </section>
  );
}