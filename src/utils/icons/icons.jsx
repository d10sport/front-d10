import logo from '../../assets/icons/logo_company.png';
import icon1 from '../../assets/icons/icon_fb.png';
import icon2 from '../../assets/icons/icon_in.png';
import icon3 from '../../assets/icons/icon_x.png';
import icon4 from '../../assets/icons/icon_yt.png';
import wpp from '../../assets/icons/logo_wpp.png';
import { Link } from 'react-router-dom';


function LogoHeader() {
  return (
    <Link to={'/'} >
      <img src={logo} alt="logo D10" className="logo" />
    </Link>
  )
}

function Icon1() {
  return (
    <img src={icon1} alt="icon" className="img__footer" />
  )
}

function Icon2() {
  return (
    <img src={icon2} alt="icon" className="img__footer" />
  )
}


function Icon3() {
  return (
    <img src={icon3} alt="icon" className="img__footer" />
  )
}


function Icon4() {
  return (
    <img src={icon4} alt="icon" className="img__footer" />
  )
}

function Wpp() {
  return (
    <img src={wpp} alt="WhatsApp Logo" className='img__wpp'/>
  )
}


export {
  LogoHeader,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Wpp
}