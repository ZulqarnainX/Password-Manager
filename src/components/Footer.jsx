import React from "react";

const Footer = ({ DarkMode, SetDarkMode }) => {
  return (
    <div 
    className={`text-white flex flex-col justify-center items-center fixed bottom-0 w-full md:opacity-100 opacity-0
        ${DarkMode ? 'outline bg-black shadow-[0_0_8px_2px_rgba(156,163,175,0.5)]' : 'bg-[#63a9f6]  border-blue-500 outline outline-blue-200 shadow-lg shadow-blue-100'}`}
    >
      <div className="logo font-bold text-2xl">
        <span className="text-green-700">&lt;</span>
        Pass
        <span className="text-green-700">OP/&gt;</span>
      </div>
      <div className="flex justify-center items-center">
        Created with <img className="w-7 mx-2" src="icons/heart.png" alt="" /> by ZulqarnainX
      </div>
    </div>
  );
};

export default Footer;
