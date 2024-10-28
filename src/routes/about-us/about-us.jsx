import './about-us.css'
import { Environment, OrbitControls } from '@react-three/drei';
import fondoD10 from './../../assets/img/fondo_color_d10+.png'
import ModelBalon3d from '../../utils/model3D/Balon3d';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';

export default function AboutUs() {
  return (
    <div id='section-d10_academy' className='h-full w-full bg-black flex flex-col justify-center items-center '>
      <div className='w-full h-full grid place-content-center justify-center z-30 text-white'>
        {/* Imagen */}
        <div className='top-40 left-[25%] z-10 w-auto h-auto object-cover' src={fondoD10} >
          <img className='relative object-cover w-fit' src={fondoD10} />
        </div>

        {/* 3D Model */}
        <div className='section_model_3d absolute left-4 z-20 top-[6.5rem] w-[60%] h-[31rem]'>
          <Canvas className='w-fit h-full'>
            <ambientLight />
            <OrbitControls enableZoom={false} autoRotate={true} enableRotate={false} autoRotateSpeed={1.5} />
            <Suspense fallback={null}>
              <ModelBalon3d position={[0, -2.5, 0]} scale={2.8} />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div>

        {/* Texto */}
        <div className='absolute top-1/3 mt-5 left-1/3  transform -translate-y-1/2 flex flex-col z-20 items-center justify-center'>
          <h1 className='text-8xl font-bold text-white mb-4'>D10 +</h1>
        </div>

        {/* Texto */}
        <div className='absolute top-1/2 left-1/2 mt-10 transform -translate-x-1/2 -translate-y-1/2 flex flex-col z-20 items-center justify-center'>
          <h1 className='text-8xl font-bold text-white mb-4'>Academy</h1>
        </div>

        {/* Ingresa ahora */}
        <div className='w-full text-center'>
          <Link to="/services" className='text-[#9EFF00] underline text-3xl font-bold'>Ingresa ahora</Link>
        </div>
      </div>
    </div>
  )
}