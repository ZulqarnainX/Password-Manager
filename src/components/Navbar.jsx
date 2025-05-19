import React from 'react';

const Navbar = ({ DarkMode, SetDarkMode }) => {
  return (
    <nav 
      className={`px-4 transition-all duration-100 ease-in-out text-white
        ${DarkMode ? 'bg-black outline outline-white shadow-[0_0_8px_2px_rgba(156,163,175,0.5)]' : 'bg-[#63a9f6] border-blue-500 outline outline-blue-200 shadow-[0_4px_12px_rgba(0,0,0,0.11)]'}`}
    >
      <div className="flex flex-wrap justify-between items-center h-14 max-w-screen-xl mx-auto w-full">

        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className={` ${DarkMode ? 'text-green-700' : 'text-black'} `}>&lt;</span>
          Pass
          <span className={` ${DarkMode ? 'text-green-700' : 'text-black'} `}>OP/&gt;</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 mt-2 sm:mt-0">

          {/* GitHub Button */}
          <button className="flex items-center bg-[#35333354] text-white px-3 py-1 rounded-full hover:bg-[#4a4a4a80] transition duration-200 text-sm">
            <img className="invert w-5 h-5" src="icons/github.svg" alt="GitHub" />
            <span className="ml-2 font-medium hidden sm:inline">GitHub</span>
          </button>

          {/* Theme Switcher Button */}
          <button
            onClick={() => SetDarkMode(!DarkMode)}
            className="flex items-center bg-[#35333354] text-white px-4 py-1 rounded-full hover:bg-[#4a4a4a80] transition duration-200 text-sm"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 3v1m0 16v1m8.66-12.34l-.7.7m-13.9 0l-.7-.7M21 12h-1M4 12H3m15.66 6.34l-.7-.7m-13.9 0l-.7.7" />
              <circle cx="12" cy="12" r="5" />
            </svg>
            <span className="font-medium hidden sm:inline">Switch Theme</span>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
