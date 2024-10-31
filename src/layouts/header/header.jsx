import { Link } from "react-router-dom";
import { LogoHeader } from "../../utils/icons/icons";

export default function Header() {
  return (
    <nav className="nav">
      <LogoHeader />
      <ul className="list__nav">
        <li className="items__nav">
          <Link to={'/about-us'} className="a-linear__nav">
            Quienes somos
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/services'} className="a-linear__nav">
            Servicios
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/contact'} className="a-linear__nav">
            Contactanos
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/spline'} className="a-linear__nav">
            Spline
          </Link>
        </li>
      </ul>
      <button className="login__nav">D10+</button>
    </nav>

  );
}