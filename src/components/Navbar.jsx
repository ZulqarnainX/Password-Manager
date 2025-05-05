import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white flex justify-between items-center px-4 h-14 outline-gray-900 outline shadow-md shadow-gray-900/30'>
      <div className="mycontainer  text-white flex justify-between items-center px-4 h-14">
        <div className="logo font-bold text-2xl">
          <span className='text-green-700'>&lt;</span>
          Pass
          <span className='text-green-700'>OP/&gt;</span>
          </div>
      <button className='text-white bg-[#35333354] my-5 rounded-full flex justify-center items-center'>
        <img className='invert w-8 py-1' src="icons/github.svg" alt="github logo" />
        <span className='font-bold px-3'>GitHub</span>
        
      </button>
      </div>
    </nav>
  )
}

export default Navbar
