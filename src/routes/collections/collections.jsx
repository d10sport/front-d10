import HeaderPage from '../../layouts/header-pages/header-page'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react'
import './collections.css'

export default function Collections() {

  const [selectedId, setSelectedId] = useState(null)
  const [selectedId2, setSelectedId2] = useState(null)

  const items2024 = [
    { id: 1, title: 'Campeones año 2024', subtitle: 'Campeones año 2024' },
    { id: 2, title: 'Campeones año 2023', subtitle: 'Campeones año 2023' },
    { id: 3, title: 'Campeones año 2022', subtitle: 'Campeones año 2022' },
    { id: 4, title: 'Campeones año 2022', subtitle: 'Campeones año 2022' }
  ]

  const items2023 = [
    { id: 5, title: 'Campeones año 2024', subtitle: 'Campeones año 2024' },
    { id: 6, title: 'Campeones año 2023', subtitle: 'Campeones año 2023' },
    { id: 7, title: 'Campeones año 2022', subtitle: 'Campeones año 2022' },
    { id: 8, title: 'Campeones año 2022', subtitle: 'Campeones año 2022' }
  ]

  const onSelectItem2024 = (id) => {
    setSelectedId(id)
  }

  const onSelectItem2023 = (id) => {
    setSelectedId2(id)
  }

  return (
    <>
      <HeaderPage />
      <div className='h-full w-full py-8 px-12'>
        <div className='w-full'>
          <h1 className='text_300 text-5xl font-extrabold text-center'>Colecciones:</h1>
        </div>
        <div id='colection_2024 w-full'>
          <div className='w-full flex justify-between py-4'>
            <h2 className='text-4xl text_100'>Colección 2024:</h2>
            <button className='btn_yellow_active'>Adquirir</button>
          </div>
          <div>
            <h3 className='text_300'>Campeones año 2024</h3>
            <p className='text-xl text_400'>A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More</p>
          </div>
          <div className='relative grid auto-rows-[150px] grid-cols-3 gap-6 my-8'>
            {items2024.map((item, index) => (
              <motion.div
                key={index}
                layoutId={item.id}
                className={`${index === 0 ? 'col-span-1 row-span-2' : ''} ${index === 1 ? 'col-span-2 row-span-2' : ''}
                ${index === 2 ? 'col-span-2 row-span-2' : ''} ${index === 3 ? 'col-span-1 row-span-2' : ''}
                bg_100 row-span-1 rounded-xl border-2 p-4 hover:cursor-pointer transition-all hover:scale-95 hover:shadow-lg`}
                onClick={() => onSelectItem2024(item.id)}
              >
                <motion.h5 className='text_300'>{item.subtitle}</motion.h5>
                <motion.h2 className='text_100'>{item.title}</motion.h2>
              </motion.div>
            ))}

            <AnimatePresence>
              {selectedId && (
                <motion.div
                  layoutId={selectedId}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 mx-auto my-auto w-3/4 max-w-md h-3/4 max-h-md
                  bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center"
                >
                  {/* Botón de cierre en la esquina superior derecha */}
                  <motion.button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold"
                  >
                    &times;
                  </motion.button>

                  {/* Contenido expandido */}
                  <motion.h5 className="text-gray-500 mb-2">{selectedId.subtitle}</motion.h5>
                  <motion.h2 className="text-gray-900 mb-4">{selectedId.title}</motion.h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div id='colection_2024 w-full'>
          <div className='w-full flex justify-between py-4'>
            <h2 className='text-4xl text_100'>Colección 2024:</h2>
            <button className='btn_yellow_active'>Adquirir</button>
          </div>
          <div>
            <h3 className='text_300'>.</h3>
            <p className='text-xl text_400'>A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More</p>
          </div>
          <div className='relative grid auto-rows-[150px] grid-cols-3 gap-6 my-8'>
            {items2023.map((item, index) => (
              <motion.div
                key={index}
                layoutId={item.id}
                className={`
                ${index === 0 ? 'col-span-1 row-span-2' : ''}
                ${index === 1 ? 'col-span-2 row-span-2' : ''}
                ${index === 2 ? 'col-span-2 row-span-2' : ''}
                ${index === 3 ? 'col-span-1 row-span-2' : ''}
                bg_100 row-span-1 rounded-xl border-2 p-4 hover:cursor-pointer transition-all hover:scale-95 hover:shadow-lg`}
                onClick={() => onSelectItem2023(item.id)}
              >
                <motion.h5 className='text_300'>{item.subtitle}</motion.h5>
                <motion.h2 className='text_100'>{item.title}</motion.h2>
              </motion.div>
            ))}

            <AnimatePresence>
              {selectedId2 && (
                <motion.div
                  layoutId={selectedId2}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 mx-auto my-auto w-3/4 max-w-md h-3/4 max-h-md
                  bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center"
                >
                  {/* Botón de cierre en la esquina superior derecha */}
                  <motion.button
                    onClick={() => setSelectedId2(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold"
                  >
                    &times;
                  </motion.button>

                  {/* Contenido expandido */}
                  <motion.h5 className="text-gray-500 mb-2">{selectedId2.subtitle}</motion.h5>
                  <motion.h2 className="text-gray-900 mb-4">{selectedId2.title}</motion.h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  )
}
