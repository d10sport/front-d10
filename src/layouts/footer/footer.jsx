import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import "./footer.css";

export default function Footer() {
  // export default function Footer({ dataFooter }) {
  // Footer.propTypes = {
  //   dataFooter: PropTypes.object,
  // };

  function handleClickIdRedirect(id) {
    if (id) {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }

  var urlAcademy = `https://academia.${window.location.host}/`;

  return (
    <>
      {/* <!-- Footer Section --> */}

      <section className="border-t border-zinc-800 bg-black py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>© 2025 D10. All rights reserved.</p>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 underline-offset-4 hover:underline h-10 px-4 py-2 mt-2 text-xs text-gray-500 hover:text-white">
            Terms & Conditions
          </button>
        </div>
      </section>

      <footer className="bg-zinc-950 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
            <div>
              <h3 className="text-xl font-bold">D10+</h3>
              <p className="mt-2 text-sm text-gray-400">
                Redefiniendo la excelencia desde 2024
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="/"
                className="text-gray-400 hover:text-white"
                onClick={() =>
                  handleClickIdRedirect("section-destination-home")
                }
              >
                Inicio
              </a>
              <Link to={"/about-us"} className="text-gray-400 hover:text-white">
                Nosotros
              </Link>
              <Link to={"/services"} className="text-gray-400 hover:text-white">
                Servicios
              </Link>
              <Link to={"/contact"} className="text-gray-400 hover:text-white">
                Contacto
              </Link>
              <Link to={"/gallery"} className="text-gray-400 hover:text-white">
                Galería
              </Link>
              <a
                target="_blank"
                href={urlAcademy}
                className="text-gray-400 hover:text-white"
              >
                Academia
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
