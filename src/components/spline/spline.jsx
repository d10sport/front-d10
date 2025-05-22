import { useEffect, useState, useContext } from "react";
import logo from "@assets/img/logo_sin_fondo.png";
import AppContext from "@context/app-context";
import "./spline.css";

export default function SplineModel() {
  const [isFinished, setIsFinished] = useState(false);
  const context = useContext(AppContext);

  useEffect(() => {
    context.setLoading(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("nav_header")?.classList.add("hidden");

    setTimeout(() => {
      document.body.classList.remove("overflow-hidden");
      document.getElementById("nav_header")?.classList.remove("hidden");
      document.querySelector(".wpp")?.classList.remove("hidden");
      window.scrollTo(0, 0);
    }, 2500);

    setTimeout(() => {
      setIsFinished(true);
      context.setLoading(false);
    }, 2600);
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
    </section>
  );
}
