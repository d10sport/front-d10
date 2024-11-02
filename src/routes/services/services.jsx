import HeaderPage from '../../layouts/header_pages/header_page'
import './services.css'

export default function Services() {
  return (
    <div className="services">
      <HeaderPage />
      <h1>Services</h1>
      <p>Here are some of the services we offer:</p>
      <ul>
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
        <li>Search Engine Optimization (SEO)</li>
        <li>Content Marketing</li>
      </ul>
    </div>
  )
}