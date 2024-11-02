import logo from '../../assets/icons/logo.png';
import icon1 from '../../assets/icons/icon1.png';
import icon2 from '../../assets/icons/icon2.png';
import icon3 from '../../assets/icons/icon3.png';
import icon4 from '../../assets/icons/icon4.png';
import { Link } from 'react-router-dom';


function LogoHeader({props}) {
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


export {
  LogoHeader,
  Icon1,
  Icon2,
  Icon3,
  Icon4
}