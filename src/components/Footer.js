import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Message, Phone } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/WhatsApp_Image_2024-10-20_at_09.03.19_6578ea68-removebg-preview (1).png';
import nafrc from '../assets/img/nafrc-removebg-preview.png';

const Footer = () => {
  const logo1 = logo;
  const logo2 = nafrc;
  const [currentLogo, setCurrentLogo] = useState(logo1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prevLogo) => (prevLogo === logo2 ? logo1 : logo2));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-white text-white font-Fira">
      <div className="container mx-auto px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center">
              <img
                src={currentLogo}
                alt="logo"
                className="h-10 md:h-16 transition-all duration-500 ease-in-out transform scale-110 opacity-100"
              />
            </div>
            <p className="text-base text-gray-400 leading-6">
              Build a firm digital foundation
              <br />
              with our service offering and expert consultations.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/profile.php?id=61550690203513" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-lg text-[#ec3237] hover:text-[#c12127] cursor-pointer h-6 w-6"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-lg text-[#ec3237] hover:text-[#c12127] cursor-pointer h-6 w-6"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-lg text-[#ec3237] hover:text-[#c12127] cursor-pointer h-6 w-6"
                />
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <h2 className="font-semibold text-lg mb-4 text-black">Church</h2>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-[#ec3237]">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className="text-gray-400 hover:text-[#ec3237]">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="text-gray-400 hover:text-[#ec3237]">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-400 hover:text-[#ec3237]">Services</NavLink>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="font-semibold text-lg mb-4 text-black">Head Quaters</h2>
            <p className="text-gray-400 text-sm mb-2">
              Nigerian Armed Forces Resettlement Centre (NAFRC), Oshodi
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Message className="text-[#ec3237]" />
              <p className="text-sm">st.stephenprotestantchurch@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 mt-2">
              <Phone className="text-[#ec3237]" />
              <p className="text-sm">+234 901 628 2357</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black text-gray-500 text-center text-xs py-6">
        &copy; {new Date().getFullYear()} St. Stephen's Protestant Church. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
