import React, { useState } from "react";
import { motion } from "framer-motion";

const DesktopToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" relative inline-block text-left">
      <div>
        <button
          onClick={toggleMenu}
          className=" inline-flex justify-center w-full roundedmd border border-gray-300 shadow-sm px-4 py-2 bg-pink-600 text-sm font-medium text-gray-700 hover:bg-pink-400 focus:outline-none"
        >
          <div className=" flex-col">
            <span className="w-[40px] h-[2px] bg-white"></span>
            <span className="w-[40px] h-[2px] bg-white"></span>
            <span className="w-[40px] h-[2px] bg-white"></span>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 3
            </a>
            <div className="px-4 py-2">
              <label
                htmlFor="select-option"
                className="block text-sm font-medium text-gray-700"
              >
                Choose an option
              </label>
              <select
                id="select-option"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option>Option A</option>
                <option>Option B</option>
                <option>Option C</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopToggleMenu;
