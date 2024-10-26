import { Outlet, Link } from "react-router-dom";


export default function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`/about-us`}>Quienes somos</Link>
          </li>
          <li>
            <Link to={`/services`}>Servicios</Link>
          </li>
          <li>
            <Link to={`/contact`}>Contactanos</Link>
          </li>
          <Outlet/>
        </ul>
      </nav>
    </>
  );
}