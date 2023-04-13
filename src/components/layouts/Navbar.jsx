import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <header className="bg-gray-800">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">Classic Cars</a>
        <ul className="flex space-x-6">
          <li><a href="/featured-cars" className="text-white hover:text-gray-400">Featured Cars</a></li>
          <li><a href="/gallery" className="text-white hover:text-gray-400">Gallery</a></li>
          <li><a href="/contact" className="text-white hover:text-gray-400">Contact</a></li>
        </ul>
        <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-200">Login</button>
      </nav>
    </header>

    );
  };
  
  export default Navbar
  // <nav className="bg-white/25 backdrop-blur-[2px] shadow-md sticky top-0 w-[100%]">
  //   <div className="container mx-auto px-6 py-3">
  //     <div className="flex items-center justify-between ">
  //       <div className='font-bold'>Classic Car</div>
  //       <div className="hidden md:block sticky">
  //         <a className="text-gray-800 font-bold hover:text-gray-100 hover:bg-gray-800 px-3 py-4 rounded transition-colors duration-200" href="/">
  //           Home
  //         </a>
  //         <a className="text-gray-800 font-bold hover:text-gray-100 hover:bg-gray-800 px-3 py-4 rounded transition-colors duration-200" href="/features">
  //           Features
  //         </a>
  //         <a className="text-gray-800 font-bold hover:text-gray-100 hover:bg-gray-800 px-3 py-4 rounded transition-colors duration-200" href="/pricing">
  //           Pricing
  //         </a>
  //       </div>
  //       <div className="md:hidden">
  //         <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
  //           <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
  //             <path fillRule="evenodd" clipRule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  //           </svg>
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </nav>