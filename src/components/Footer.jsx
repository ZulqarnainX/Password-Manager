import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center fixed bottom-0 w-full outline-red-400 outline shadow-md shadow-gray-900/30 md:opacity-100 opacity-0">
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
