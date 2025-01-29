import logo from "@assets/img/logo_sin_fondo.png";
import imageFondo from "@assets/img/fondo_home_d10_academy.png";
import PropTypes from "prop-types";

function Loading() {
  return (
    <>
      <div className="h-full w-full select-none relative z-50">
        <img className="h-full w-full" src={imageFondo} />
        <div className="loader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="font-semibold text-2xl">Cargando...</h1>
          </div>
        </div>
      </div>
    </>
  );
}

function ImageLogo({ src, alt, className = "", style = {} }) {
  ImageLogo.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  return (
    <img
      src={src ?? logo}
      alt={alt ?? "Logo"}
      className={`object-contain ${className}`}
      style={style}
    />
  );
}

export { Loading, ImageLogo };
