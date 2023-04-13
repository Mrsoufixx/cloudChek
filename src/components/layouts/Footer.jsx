import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, velit eu finibus semper, lorem neque tristique massa, in venenatis velit nisl non enim.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400"><FaFacebook size={24} /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaInstagram size={24} /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaTwitter size={24} /></a>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-4">123 Main St</p>
            <p className="mb-4">Anytown, USA</p>
            <p className="mb-4">Email: info@classiccars.com</p>
            <p className="mb-4">Phone: (555) 555-1212</p>
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