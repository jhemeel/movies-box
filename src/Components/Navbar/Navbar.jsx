import React from 'react'
import './navbar.css'
import navbarLogo from './assets/images/tv.svg'
import {Search} from '@mui/icons-material'


export default function Navbar() {
 
  return (
    <div className='navbar'>
      <div className="navbar-wrapper">
        <ul className="navbarItem">
          <li className='navbarItemLogo'>
            <img src={navbarLogo} alt="" />
            <span>Movie Box</span>
          </li>
          <li className='navbarItemSearch'>
            <form action="" method="get">
              <input type="search" name="term" id="" placeholder='What do you want to watch?' />
              <Search className='search'role="submit"/>
            </form>
          </li>
          <li className='navbarItemMenu'>
           <div className="navbarItemMenu-wrapper">

            <span className="auth">Sign In</span>
            <span className="hamburger">
              <div className="bar-wrapper">
              <div className="bar"></div>
              <div className="bar"></div>
              </div>
            </span>
            </div>
         
          </li>
        </ul>
      </div>
    </div>
  )
}
