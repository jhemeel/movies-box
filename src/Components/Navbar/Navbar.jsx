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
              <input type="search" name="movie-search" id="" placeholder='What do you want to watch?' />
              <Search className='search'/>
            </form>
          </li>
          <li className='navbarItemMenu'>
            <li className="auth">Sign In</li>
            <li className="hamburger">
              <li className="bar"></li>
              <li className="bar"></li>
            </li>
          </li>
        </ul>
      </div>
    </div>
  )
}
