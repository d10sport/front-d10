import { createBrowserRouter } from "react-router-dom"
import Services from "../services/services.jsx"
import AboutUs from '../about-us/about-us.jsx'
import Contact from '../contact/contact.jsx'
import ErrorPage from './error.jsx'
import Home from "../home/home.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/services",
    element: <Services />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
])

export default router
