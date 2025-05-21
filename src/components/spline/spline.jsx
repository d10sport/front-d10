import logo from "@assets/img/logo_sin_fondo.png";
import Video from "@assets/video/video.webm";
import { useEffect, useState } from "react";
import "./spline.css";

export default function SplineModel() {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    document.getElementById("nav_header")?.classList.add("hidden");

    setTimeout(() => {
      document.body.classList.remove("overflow-hidden");
      document.getElementById("nav_header")?.classList.remove("hidden");
      document.querySelector(".wpp")?.classList.remove("hidden");
      window.scrollTo(0, 0);
    }, 4500);

    setTimeout(() => {
      setIsFinished(true);
    }, 4600);
  }, []);

  return (
    <section
      id="section_spline"
      className={`section h-screen w-full select-none relative z-50 ${isFinished ? "hidden" : ""}`}
    >
      {/* Contenido fijo y centrado con logo a la izquierda, texto a la derecha */}
      <div className="fixed inset-0 z-20 flex items-center justify-center fade-in pointer-events-none">
        <img
          className="w-32 sm:w-48 md:w-72 lg:w-80 object-contain"
          src={logo}
          alt="logo D10"
        />
        <h1 className="text-black font-bold text-7xl lg:text-9xl title">
          D10
        </h1>
      </div>

      {/* Video */}
      {!isFinished && (
        <div id="model_glass" className="full-screen active animate-jump-in">
          <div className="w-full h-full canvas">
            <video
              className="video__start"
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              controls={false}
            >
              <source src={Video} type="video/webm" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
