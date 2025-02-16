import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./section-collections.css";

export default function SectionCollections({ collections }) {
  SectionCollections.propTypes = {
    collections: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        photos: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  };

  const [items, setItems] = useState(collections);
  const [selectedItems, setSelectedItems] = useState({});

  const onSelectItem = (collectionId, item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [collectionId]: item,
    }));
  };

  const onCloseModal = (collectionId) => {
    setSelectedItems((prev) => ({
      ...prev,
      [collectionId]: null,
    }));
  };

  function scrollToYear() {
    if (collections.length > 0) {
      const hashParams = new URLSearchParams(
        window.location.hash.split("?")[1]
      );
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

  useEffect(() => {
    if (collections.length > 0) {
      setItems(collections);
      scrollToYear();
    }
  }, [collections]);

  useEffect(() => {
    scrollToYear();
  }, []);

  return (
    <div className="mx-auto px-4 relative">
      {items.map((collection, collectionIndex) => (
        <div key={collectionIndex} id={collection.link}>
          <div className="w-full flex justify-between py-4">
            <h2 className="text-4xl text_100">{collection.title}</h2>
          </div>
          <div>
            <h3 className="title__collections">{collection.subtitle}</h3>
            <p className="text-xl text_400">{collection.description}</p>
          </div>

          <div className="relative grid auto-rows-[150px] grid-cols-3 gap-6 my-8">
            {collection.photos.map((item, i) => (
              <motion.div
                key={i}
                layoutId={`${collectionIndex}-${item.id}`}
                className={`relative ${i === 0 ? "col-span-1 row-span-2" : ""}
                  ${i === 1 ? "col-span-2 row-span-2" : ""}
                  ${i === 2 ? "col-span-2 row-span-2" : ""}
                  ${i === 3 ? "col-span-1 row-span-2" : ""}
                  row-span-1 rounded-xl border-2 p-4 hover:cursor-pointer
                  transition-all hover:scale-95 hover:shadow-lg`}
                onClick={() => onSelectItem(collectionIndex, item)}
              >
                <div className="absolute top-0 left-0 w-full h-full z-10">
                  <div className="blurred-background absolute bottom-4 left-4">
                    <motion.h5 className="text-[white] text-lg font-bold">
                      {item.title}
                    </motion.h5>
                  </div>
                </div>
                <img
                  className="absolute rounded-lg -z-20 inset-0 w-full h-full object-cover"
                  src={item.photo}
                />
              </motion.div>
            ))}
            {Object.values(selectedItems).some((item) => item) && (
              <motion.div
                className="fixed inset-0 bg-black opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
            <AnimatePresence>
              {selectedItems[collectionIndex] && (
                <motion.div
                  layoutId={`${collectionIndex}-${selectedItems[collectionIndex].id}`}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 mx-auto my-auto w-3/4 max-w-md h-3/4 max-h-md
                  bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center"
                >
                  {/* Botón de cierre */}
                  <motion.button
                    onClick={() => onCloseModal(collectionIndex)}
                    className="absolute top-4 right-4 z-20 text-gray-500 hover:text-black text-4xl font-bold"
                  >
                    &times;
                  </motion.button>
                  <img
                    className="absolute rounded-lg z-10 inset-0 w-full h-full object-cover"
                    src={selectedItems[collectionIndex].photo}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
}
