import { Link } from "react-router-dom";
import { LogoHeader } from "../../utils/icons/icons";
import './header.css';

export default function Header() {
  return (
    <nav id="nav_header" className="nav fixed">
      <LogoHeader />
      <ul className="list__nav">
        <li className="items__nav">
          <Link to={'/about-us'} className="a-linear__nav text-sm">
            Quienes somos
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/services'} className="a-linear__nav text-sm">
            Servicios
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/contact'} className="a-linear__nav text-sm">
            Contactanos
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/spline'} className="a-linear__nav text-sm">
            Spline
          </Link>
        </li>
      </ul>
      <button className="login__nav text-sm">D10+</button>
    </nav>

  );
}