import SignIn from '../d10-academy/sign-in/sing-in.jsx'
import SignUp from '../d10-academy/sign-up/sign-up.jsx'
import HomeAcademy from '../d10-academy/home/home.jsx'
import { Route, Routes } from "react-router-dom"
import Services from '../services/services.jsx'
import SplineModel from '../spline/spline.jsx'
import AboutUs from '../about-us/about-us.jsx'
import Contact from '../contact/contact.jsx'
import ErrorPage from './error.jsx'
import Home from "../home/home.jsx"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/spline" element={<SplineModel />} />
      <Route path="/d10/academy/signin" element={<SignIn />} />
      <Route path="/d10/academy/signup" element={<SignUp />} />
      <Route path="/d10/academy/home" element={<HomeAcademy />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
