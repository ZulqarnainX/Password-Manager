import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import React, { useState } from 'react';


function App() {
  
  const [DarkMode, SetDarkMode] = useState(true);

  return (
    <>
    <Navbar DarkMode={DarkMode} SetDarkMode={SetDarkMode} />
    <div className='min-h-[85vh]'>

    <Manager DarkMode={DarkMode} SetDarkMode={SetDarkMode}  />
    </div>
    <Footer DarkMode={DarkMode} SetDarkMode={SetDarkMode} />
    </>
  )
}

export default App
