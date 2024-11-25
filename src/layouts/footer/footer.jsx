/* eslint-disable react/no-unescaped-entities */
import { Icon1, Icon2, Icon3, Icon4} from '@utils/icons/icons.jsx'
import './footer.css';

export default function Footer() {
    return (
      <>
      {/* <!-- Footer Section --> */}

        <footer className="footer__copyright text-white bg-[#191919]">
            <div className="copy__footer">
                <p>©2024 D10. All Rights Reserved.</p>
                <p>Terms & Conditions</p>
            </div>
            <div className="ctnr-redes__footer">
                <div className="redes__footer">
                    <Icon1 />
                    <Icon2 />
                    <Icon3 />
                    <Icon4 />
                </div>
            </div>
        </footer>

        <footer className="footer__info text-white bg-[#141414]">
            <div className="contact__footer">
                <div className="container-contact__footer">
                    <h1 className="title__footer text-4xl">D10</h1>
                    <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="input__footer"
                    />
                </div>
            </div>
            <div className="services__footer">
                <ul className="list__footer">
                    <p className="text-list__footer text-[#999999]">Home</p>
                    <li className="item-list__footer">Hero Section</li>
                    <li className="item-list__footer">Features</li>
                    <li className="item-list__footer">Properties</li>
                    <li className="item-list__footer">Testimonials</li>
                    <li className="item-list__footer">FAQ's</li>
                </ul>
                <ul className="list__footer">
                    <p className="text-list__footer text-[#999999]">About</p>
                    <li className="item-list__footer">Our Story</li>
                    <li className="item-list__footer">Our Works</li>
                    <li className="item-list__footer">How it Works</li>
                    <li className="item-list__footer">Our Team</li>
                    <li className="item-list__footer">Our Client</li>
                </ul>
                <ul className="list__footer">
                    <p className="text-list__footer text-[#999999]">Services</p>
                    <li className="item-list__footer">Valuation Mastery</li>
                    <li className="item-list__footer">Strategic Marketing</li>
                    <li className="item-list__footer">Negotiation Wizardry</li>
                    <li className="item-list__footer">Closing Success</li>
                    <li className="item-list__footer">Property Management</li>
                </ul>
                <ul className="list__footer">
                    <p className=" text-[#999999]">Contact</p>
                    <li className="item-list__footer">Contact Form</li>
                    <li className="item-list__footer">Our Offices</li>
                </ul>
            </div>
        </footer>
      
      </>
    );
  }

