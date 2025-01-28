import Collections from '@routes/collections/collections.jsx'
import Services from '@routes/services/services.jsx'
import AboutUs from '@routes/about-us/about-us.jsx'
import Contact from '@routes/contact/contact.jsx'
import { Route, Routes } from "react-router-dom"
import ErrorPage from '@routes/router/error.jsx'
import Home from '@routes/home/home.jsx'
import News from '@routes/news/news.jsx'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/news" element={<News />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
