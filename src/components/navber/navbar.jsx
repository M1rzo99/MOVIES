import React from 'react'
import './navbar.scss'
import logo from "/logo.svg"
import logoText from "/logo-text.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <a href="#">
         <img src= {logo} alt="logo" />
         <img src={logoText} alt="text" />
        </a>
      </div>

      <navbar className="navbar__menu">
       <ul>
          <li>
         <a href="#">Home</a>
            </li>
      <li>
       <a href="#">TV Showes</a>
      </li>

       </ul>
      </navbar>
    </div>
  ) 
}

export default Navbar
