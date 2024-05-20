"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-200 p-5">
      <div className="flex items-center flex-shrink-0 text-indigo-800 mr-6">
        <span className="font-light text-2xl tracking-tight">
            AirBird
        </span>
      </div>
      
      {/* <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-indigo-100 border-indigo-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? `block` : `hidden`
        } w-full block lg:flex lg:items-center lg:w-auto lg:justify-end`}
      >
        <div className="text-base lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-indigo-800 hover:text-white mr-4"
          >
            Nav Item 1
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-indigo-800 hover:text-white mr-4"
          >
            Nav Item 2
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-indigo-800 hover:text-white"
          >
            Nav Item 3
          </a>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
