import { useContext, useEffect, useState, useRef } from "react";
import Header from "@layouts/header/header.jsx";
import Footer from "@layouts/footer/footer.jsx";
import AppContext from "@context/app-context";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import "./gallery.css";
import "swiper/css";

const colorsWorkflows = [
  {
    color: "from-rose-500/5 to-red-900",
  },
  {
    color: "from-slate-500/5 to-slate-900",
  },
  {
    color: "from-blue-500/5 to-gray-700",
  },
  {
    color: "from-indigo-500/5 to-orange-900",
  },
  {
    color: "from-zinc-500/5 to-stone-700",
  }
];

export default function Gallery() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [loopItems, setLoopItems] = useState([]);

  function getDataGallery() {
    axios
      .get(`${urlApi}landing/g/gallery`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        if (response.data?.length == 0 || response.data[0] == undefined) return;

        // Duplicar los elementos para el scroll infinito
        let count = response.data[0].section_one.length * 100;
        setLoopItems([...Array(count).keys()].map((_, i) => {
          const index = i % response.data[0].section_one.length;
          return {
            ...response.data[0].section_one[index],
            color: colorsWorkflows[index % colorsWorkflows.length].color,
            gallery: response.data[0].section_one[index].gallery,
          };
        }));

      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getDataGallery();
  }, []);


  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrame;

    const scroll = () => {
      container.scrollLeft += 1;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      <Header dataHeader={context.dataHeader} />

      <section className="gallery pt-5 mb-20" id="section-destination-galeria">

        <div className="text-[32px] font-[bold] justify-self-center pt-20 pb-5 px-2.5;">
          <h1 className=" mb-2 text-lg font-medium uppercase tracking-widest text-gray-300">Galería</h1>
        </div>

        <div className="relative overflow-hidden">
          {/* Sombras laterales */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar space-x-4 w-full animate-scroll-slow"
          >
            {loopItems.length > 0 && (
              loopItems.map((item, i) => (
                <div
                  key={i}
                  className={`min-w-[250px] relative max-w-[250px] h-[380px] rounded-3xl ${item.color} bg-gradient-to-b text-white p-6 flex flex-col justify-end shrink-0`}
                >
                  <img
                    className=" h-full w-full object-cover rounded-3xl"
                    src={item.gallery}
                    alt={`Img ${i + 1}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 rounded-3xl">
                    <div className="relative z-10 flex flex-col justify-start h-full p-4">
                      <div className="flex items-center justify-between items-center">
                        <span className="text-lg font-semibold">D10 &nbsp;<span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">⚡</span></span>
                      </div>
                      <p className="text-xs opacity-80 mt-1">Modelo</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section >
      <Footer dataFooter={context.dataFooter} />
    </>
  );
}
