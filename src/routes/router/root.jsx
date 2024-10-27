import { Route, Routes } from "react-router-dom"
import Services from "../services/services.jsx"
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
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
