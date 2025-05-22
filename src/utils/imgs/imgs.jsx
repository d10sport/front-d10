import logo from "@assets/img/logo_sin_fondo.png";
import PropTypes from "prop-types";

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

export { ImageLogo };
