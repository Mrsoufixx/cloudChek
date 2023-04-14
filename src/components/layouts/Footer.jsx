import React from 'react';
import { FaPhone, FaEnvelope,FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from "../../assets/logo"


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 flex flex-col gap-4 items-center justify-around mb-4">
            
            {logo}
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-gray-400"><FaFacebook size={24} /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaInstagram size={24} /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaTwitter size={24} /></a>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 flex flex-col items-center gap-4 mb-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            
            <p className="mb-4 flex items-center gap-4"><FaEnvelope/> info@classiccars.com</p>
            <p className="mb-4 flex items-center gap-4"><FaPhone/> (555) 555-1212</p>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Sign up for our newsletter to stay up-to-date on the latest classic car news and events.</p>
            <form>
              <input type="email" placeholder="Enter your email" className="bg-gray-900 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
              <button type="submit" className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 ml-4">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4 absolute w-full">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2021 Classic Cars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;