import { useState, useEffect, useContext } from "react";
import { ImageLogo } from "@utils/imgs/imgs.jsx";
import { ChevronDown, X } from "lucide-react";
import AppContext from "@context/app-context";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Header({ dataHeader }) {
  Header.propTypes = {
    dataHeader: PropTypes.shape({
      logo: PropTypes.string,
    }),
  };

  const context = useContext(AppContext);
  const [data, setData] = useState(dataHeader);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const setLoadingPages = () => {
    context.setLoading(true);
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    setData(dataHeader);
  }, [dataHeader, data]);

  var urlAcademy = `https://academia.${window.location.host}/`;

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-7xl">
        <div
          className={`mx-auto flex h-12 items-center justify-between rounded-full px-6 shadow-lg backdrop-blur-sm transition-all duration-300 ${scrolled ? "bg-black/40 border-white border-[0.5px]" : "bg-black/80"
            }`}
        >
          <Link className="select-none text-xl font-bold" to={"/"}>
            {data.logo == "" ? (
              <ImageLogo style={{ maxWidth: "30px" }} alt="Logo" />
            ) : (
              <img
                src={data.logo}
                alt="logo D10"
                className="logo max-w-[30px]"
              />
            )}
          </Link>
          <div className="hidden space-x-8 md:flex">
            <Link onClick={() => setLoadingPages()}
              to={"/about-us"}
              className="text-sm uppercase tracking-wider hover:text-gray-300"
            >
              Nosotros
            </Link>
            <Link onClick={() => setLoadingPages()}
              to={"/services"}
              className="text-sm uppercase tracking-wider hover:text-gray-300"
            >
              Servicios
            </Link>
            <Link onClick={() => setLoadingPages()}
              to={"/gallery"}
              className="text-sm uppercase tracking-wider hover:text-gray-300"
            >
              Galería
            </Link>
            <Link onClick={() => setLoadingPages()}
              to={"/contact"}
              className="text-sm uppercase tracking-wider hover:text-gray-300"
            >
              Contacto
            </Link>
          </div>

          <a
            target="_blank"
            href={urlAcademy}
            className="justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background
            transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
            focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none
            [&_svg]:size-4 [&_svg]:shrink-0 border h-9 rounded-md px-3 hidden md:flex items-center border-white/20
            hover:bg-white hover:text-black"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-log-in mr-2 h-4 w-4"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
            Login
          </a>

          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
          {/* </div> */}
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-black pt-16 md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to={"/about-us"}
              className="border-b border-zinc-800 py-3 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Quienes somos
            </Link>
            <Link
              to={"/services"}
              className="border-b border-zinc-800 py-3 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              to={"/gallery"}
              className="border-b border-zinc-800 py-3 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Galería
            </Link>
            <Link
              to={"/contact"}
              className="border-b border-zinc-800 py-3 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <a
              target="_blank"
              href={urlAcademy}
              className="flex items-center border-b border-zinc-800 py-3 text-lg font-medium"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-log-in mr-2 h-4 w-4"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Login
            </a>
          </div>
        </div>
      )}
    </>
  );
}
