import { Link } from "react-router-dom";
import { LogoHeader } from "../../utils/icons/icons";
import './header.css';

export default function Header() {
  return (
    <nav id="nav_header" className="nav fixed">
      <LogoHeader />
      <ul className="list__nav">
        <li className="items__nav">
          <Link to={'/about-us'} className="a-linear__nav text-sm text-[#000]">
            Quienes somos
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/services'} className="a-linear__nav text-sm text-[#000]">
            Servicios
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/contact'} className="a-linear__nav text-sm text-[#000]">
            Contactanos
          </Link>
        </li>
      </ul>
      <button className="login__nav text-sm text-[#fff] hover:text-white bg-[#000]"><a target="_blank" href="https://academia.d10mas.com">D10+</a></button>
    </nav>

  );
}