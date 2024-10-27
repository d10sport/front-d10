/* eslint-disable react/no-unescaped-entities */
import './home.css';
import logo from '../../assets/icons/logo.png';

import brush from '../../assets/icons/brush.png';
import team1 from '../../assets/icons/team1.png';
import team2 from '../../assets/icons/team2.png';
import team3 from '../../assets/icons/team3.png';
import team4 from '../../assets/icons/team4.png';
import team5 from '../../assets/icons/team5.png';

import video from '../../assets/video/ford-commercial.mp4';

import item1 from '../../assets/img/items1.png';
import item2 from '../../assets/img/items2.png';
import item3 from '../../assets/img/items3.png';
import item4 from '../../assets/img/items4.png';
import item5 from '../../assets/img/items5.png';

import news1 from '../../assets/img/news1.png';

import icon1 from '../../assets/icons/icon1.png';
import icon2 from '../../assets/icons/icon2.png';
import icon3 from '../../assets/icons/icon3.png';
import icon4 from '../../assets/icons/icon4.png';

export default function Home() {
  return (
    <>
      {/* <!-- Home Section --> */}
      <nav className="nav">
        <img src={logo} alt="logo D10" className="logo" />
        <ul className="list__nav">
          <li className="items__nav">Quienes somos</li>
          <li className="items__nav">Servicios</li>
          <li className="items__nav">contactanos</li>
        </ul>
        <button className="login__nav">Login</button>
      </nav>

      <header className="home">
        <h1 className="title__home">D10</h1>
        <h1 className="title__home text__color__white">Viste</h1>
        <h1 className="title__home text__color__white">tu pasión,</h1>
        <h1 className="title__home text__color__white">entrena tu talento</h1>
      </header>

      {/* <!-- Sponsors Section --> */}

      <section className="sponsors">
        <img src={brush} alt="paint brush" className="brush__sponsors" />
        <img src={brush} alt="paint brush" className="brush__sponsors" />
        <img src={brush} alt="paint brush" className="brush__sponsors" />
        <img src={brush} alt="paint brush" className="brush__sponsors" />
        <img src={brush} alt="paint brush" className="brush__sponsors" />
        <div className="upimg__sponsors">
          <img src={team1} alt="logo team" className="team__sponsors" />
          <img src={team2} alt="logo team" className="team__sponsors" />
          <img src={team3} alt="logo team" className="team__sponsors" />
          <img src={team4} alt="logo team" className="team__sponsors" />
          <img src={team5} alt="logo team" className="team__sponsors" />
        </div>
      </section>

      {/* <!-- Commercial Section --> */}

      <section className="commercial">
        <video
          src={video}
          className="video__commercial"
          autoPlay
          muted
          loop
        ></video>
      </section>

      {/* <!-- Collection Section --> */}

      <section className="coleccion">
        <div className="container__coleccion small__space">
          <ul className="list__coleccion">
            <li className="items__coleccion item--disable">Coleccion 20XX</li>
            <li className="items__coleccion item--disable">Coleccion 20XX</li>
            <li className="items__coleccion">Coleccion 20XX</li>
            <li className="items__coleccion item--disable">Coleccion 20XX</li>
            <li className="items__coleccion item--disable">Coleccion 20XX</li>
          </ul>
        </div>
        <div className="container__coleccion mid__space">
          <img src={item1} alt="Modelo" />
          <img src={item2} alt="Modelo" />
          <img src={item3} alt="Modelo" />
          <img src={item4} alt="Modelo" />
          <img src={item5} alt="Modelo" />
        </div>
        <div className="container__coleccion small__space close__space">
          <span className="selection__coleccion selection--disable"></span>
          <span className="selection__coleccion selection--disable"></span>
          <span className="selection__coleccion"></span>
          <span className="selection__coleccion selection--disable"></span>
          <span className="selection__coleccion selection--disable"></span>
        </div>
      </section>

      <section className="news">
        <div className="container__news small__space">
          <p className="text__news">1 of 60</p>
          <p className="text__news">Noticias de coleccion 2024</p>
          <div className="btn-grp__news">
            <button className="btn__news">←</button>
            <button className="btn__news btn__news--enable">→</button>
          </div>
        </div>
        <div className="container__news big__space">
          <div className="card__news">
            <img src={news1} alt="img noticia" className="img__news" />
            <h1>Noticia año 20XX</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              accusantium hic reprehenderit
            </p>
          </div>
          <div className="card__news">
            <img src={news1} alt="img noticia" className="img__news" />
            <h1>Noticia año 20XX</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              accusantium hic reprehenderit
            </p>
          </div>
          <div className="card__news">
            <img src={news1} alt="img noticia" className="img__news" />
            <h1>Noticia año 20XX</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              accusantium hic reprehenderit
            </p>
          </div>
          <div className="card__news">
            <img src={news1} alt="img noticia" className="img__news" />
            <h1>Noticia año 20XX</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              accusantium hic reprehenderit
            </p>
          </div>
          <div className="card__news">
            <img src={news1} alt="img noticia" className="img__news" />
            <h1>Noticia año 20XX</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              accusantium hic reprehenderit
            </p>
          </div>
        </div>
      </section>

      {/* <!-- D10+ Academy Section --> */}

      <section className="academy">
        <div className="fondo__academy">
          <div className="container-text__academy">
            <h1 className="title__academy">D10+</h1>
            <h1 className="title__academy space__right">ACADEMY</h1>
            <p className="text__academy space__center">Ingresa Ahora</p>
          </div>
        </div>
      </section>

      {/* <!-- Footer Section --> */}

      <footer className="footer__info">
        <div className="contact__footer">
          <h1>D10</h1>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="input__footer"
          />
        </div>
        <div className="services__footer">
          <ul className="list__footer">
            <p className="text-list__footer">Home</p>
            <li className="item-list__footer">Hero Section</li>
            <li className="item-list__footer">Features</li>
            <li className="item-list__footer">Properties</li>
            <li className="item-list__footer">Testimonials</li>
            <li className="item-list__footer">FAQ's</li>
          </ul>
          <ul className="list__footer">
            <p className="text-list__footer">About</p>
            <li className="item-list__footer">Our Story</li>
            <li className="item-list__footer">Our Works</li>
            <li className="item-list__footer">How it Works</li>
            <li className="item-list__footer">Our Team</li>
            <li className="item-list__footer">Our Client</li>
          </ul>
          <ul className="list__footer">
            <p className="text-list__footer">Services</p>
            <li className="item-list__footer">Valuation Mastery</li>
            <li className="item-list__footer">Strategic Marketing</li>
            <li className="item-list__footer">Negotiation Wizardry</li>
            <li className="item-list__footer">Closing Success</li>
            <li className="item-list__footer">Property Management</li>
          </ul>
          <ul className="list__footer">
            <p className="text-list__footer">Contact</p>
            <li className="item-list__footer">Contact Form</li>
            <li className="item-list__footer">Our Offices</li>
          </ul>
        </div>
      </footer>

      <footer className="footer__copyright">
        <div className="copy__footer">
          <p>©2024 D10. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="redes__footer">
          <img src={icon1} alt="icon" className="img__footer" />
          <img src={icon2} alt="icon" className="img__footer" />
          <img src={icon3} alt="icon" className="img__footer" />
          <img src={icon4} alt="icon" className="img__footer" />
        </div>
      </footer>
    </>
  )
}
