import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white flex justify-between items-center px-4 h-14 shadow-md shadow-gray-800/30'>
      <div className="mycontainer  text-white flex justify-between items-center px-4 h-14">
        <div className="logo font-bold text-2xl">
          <span className='text-green-700'>&lt;</span>
          Pass
          <span className='text-green-700'>OP/&gt;</span>
          </div>
      <ul>
        <li className='flex gap-4'>
            <a href='/'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
