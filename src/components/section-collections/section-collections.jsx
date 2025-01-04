/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SectionCollections({ collections }) {
  const [items, setItems] = useState(collections);
  const [selectedId, setSelectedId] = useState(null);

  function scrollToYear(){
    if (collections.length > 0) {
      const hashParams = new URLSearchParams(window.location.hash.split('?')[1]);
      const year = hashParams.get("year");

      if (year) {
        setTimeout(() => {
          const targetElement = document.getElementById(year);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 2500);
      }
    }
  }

  const onSelectItem = (id) => {
    setSelectedId(id);
  };

  useEffect(() => {
    if (collections.length > 0) {
      setItems(collections);
      // scrollToYear();
    }
  }, [collections]);

  useEffect(() => {
    // scrollToYear();
  }, [])

  return (
    <>
      {items.map((item, index) => (
        <div key={index} id={item.link}>
          <div className="w-full flex justify-between py-4">
            <h2 className="text-4xl text_100">{item.title}</h2>
            <button className="btn_yellow_active">Adquirir</button>
          </div>
          <div>
            <h3 className="text_300">{item.subtitle}</h3>
            <p className="text-xl text_400">
              {item.description}
            </p>
          </div>
          <div className="relative grid auto-rows-[150px] grid-cols-3 gap-6 my-8">
            {item.photos.map((img, i) => (
              <motion.div
                key={i}
                layoutId={img.id}
                className={`${i === 0 ? "col-span-1 row-span-2" : ""} ${i === 1 ? "col-span-2 row-span-2" : ""
                  }
                ${i === 2 ? "col-span-2 row-span-2" : ""} ${i === 3 ? "col-span-1 row-span-2" : ""
                  }
                bg_100 row-span-1 rounded-xl border-2 p-4 hover:cursor-pointer transition-all hover:scale-95 hover:shadow-lg`}
                onClick={() => onSelectItem(img.id)}
              >
                <motion.h5 className="text_300">{img.title}</motion.h5>
                <motion.h2 className="text_100">{img.price}</motion.h2>
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
                  <motion.h5 className="text-gray-500 mb-2">
                    {selectedId.subtitle}
                  </motion.h5>
                  <motion.h2 className="text-gray-900 mb-4">
                    {selectedId.title}
                  </motion.h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </>
  )
}