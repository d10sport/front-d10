import { Link } from "react-router-dom";
import { LogoHeader } from "../../utils/icons/icons";
import './header.css';

export default function Header() {
  return (
    <nav id="nav_header" className="nav fixed">
      <LogoHeader />
      <ul className="list__nav">
        <li className="items__nav">
          <Link to={'/about-us'} className="a-linear__nav text-lg">
            Quienes somos
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/services'} className="a-linear__nav text-lg">
            Servicios
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/contact'} className="a-linear__nav text-lg">
            Contactanos
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/spline'} className="a-linear__nav text-lg">
            Spline
          </Link>
        </li>
      </ul>
      <button className="login__nav text-lg">D10+</button>
    </nav>

  );
}