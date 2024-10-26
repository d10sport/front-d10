import { Outlet, Link } from "react-router-dom";


export default function Header() {
  return (
    <div className='fixed top-0 left-0 right-0'>
      <nav className='w-full'>
        <ul className='flex w-full gap-8 justify-between'>
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
    </div>
  );
}