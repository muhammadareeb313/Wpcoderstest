import React from 'react'
import './header.css';
const Header = () => {
  return (
    <div className='mainHeader'>
     <div className="logo">
        <img src="./images/logo.jpg" alt="logo" className='logo' />
     </div>
     <div className="nav">
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Sales</li>
                <li>Contact</li>
            </ul>
        </nav>
        </div>   
    </div>
  )
}

export default Header