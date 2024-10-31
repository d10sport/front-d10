import ModelBalonPolyhedra from '../../utils/model3D/BalonPolyhedra.jsx';
import ModelBaloLeather from '../../utils/model3D/BalonLeather.jsx';
import ModelBalonGlass from '../../utils/model3D/BalonGlass.jsx';
import ModelBalonShell from '../../utils/model3D/BalonShell.jsx';
import { Environment, OrbitControls } from '@react-three/drei';
import ModelBalon3d from '../../utils/model3D/Balon3d.jsx';
import Header from '../../layouts/header/header';
import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './spline.css';

export default function SplineModel() {
  const [showModel, setShowModel] = useState(1);
  const [moveTitle, setMoveTitle] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowModel(2), 3500),
      setTimeout(() => setShowModel(3), 4000),
      setTimeout(() => setShowModel(4), 4500),
      setTimeout(() => setShowModel(5), 5000),
      setTimeout(() => setShowModel(6), 5500),
      setTimeout(() => {
        setMoveTitle(true);
      }, 7000),
      setTimeout(() => {
        setShowModel(0);
      }, 8000),
      setTimeout(() => {
        setIsFinished(true);
      }, 9000)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className={`bg-[#121316] h-screen w-full ${ moveTitle && showModel === 0 ? 'hidden' : '' }`}>
      <Header />
      {/* Título en el centro */}
      {!isFinished && <h1 className={`title ${moveTitle ? 'move-left init' : ''}`}>D10</h1>}

      {/* Balon Particles Model */}
      {!isFinished && showModel === 1 && (
        <div className="full-screen active">
          <div className="w-full h-full">
            <Spline onSplineMouseUp={false} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 90%)' }} scene="https://prod.spline.design/t5PufU61ncZuOixv/scene.splinecode" />
          </div>
        </div>
      )}

      {/* Balon Polyhedra Model */}
      {!isFinished && showModel === 2 && (
        <div className="full-screen active">
          <Canvas className="w-full h-full">
            <ambientLight />
            <OrbitControls enableZoom={false} autoRotate={true} enableRotate={false} autoRotateSpeed={2.5} />
            <Suspense fallback={null}>
              <ModelBalonPolyhedra position={[0, 0, 0]} scale={2.0} spe />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div>
      )}

      {/* Balon Shell Model */}
      {!isFinished && showModel === 3 && (
        <div className="full-screen active">
          <Canvas className="w-full h-full">
            <ambientLight />
            <OrbitControls enableZoom={false} autoRotate={true} enableRotate={false} autoRotateSpeed={1.5} />
            <Suspense fallback={null}>
              <ModelBalonShell position={[0.2, 0, 0]} scale={3.0} />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div>
      )}

      {/* Balon Leather Model */}
      {!isFinished && showModel === 4 && (
        <div className="full-screen active">
          <Canvas className="w-full h-full">
            <ambientLight />
            <OrbitControls enableZoom={false} autoRotate={false} enableRotate={false} autoRotateSpeed={1.5} />
            <Suspense fallback={null}>
              <ModelBaloLeather position={[0, -200, -400]} />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div>
      )}

      {/* Balon Glass Model */}
      {!isFinished && showModel === 5 && (
        <div className="full-screen active">
          <Canvas className="w-full h-full">
            <ambientLight />
            <OrbitControls enableZoom={false} autoRotate={false} enableRotate={false} />
            <Suspense fallback={null}>
              <ModelBalonGlass position={[0, 0, -70]} scale={1.0} />
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
