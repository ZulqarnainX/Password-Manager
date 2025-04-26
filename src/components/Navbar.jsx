import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-200'>
        <div className="logo font-bold">Passop</div>
      <ul>
        <li>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
