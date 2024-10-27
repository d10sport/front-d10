import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Header from '../../layouts/header/header';
import ModelBalon3d from '../../utils/model3D/Balon3d';

export default function AboutUs() {
  return (
      <div className='h-full'>
      <Header />
      <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={false} autoRotate={true} enableRotate={false} autoRotateSpeed={1.5} />
        <Suspense fallback={null}>
          <ModelBalon3d position={[0, -2, 0]} scale={2.0} />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}