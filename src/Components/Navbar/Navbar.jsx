import React, {useState, useEffect} from 'react'
import './navbar.css'
import navbarLogo from './assets/images/tv.svg'
import {Search} from '@mui/icons-material'
import axios from 'axios'


export default function Navbar() {

  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([]);


  const getMovies = async (search) => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`); 
      setMovies(data.results.slice(0, 10));
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, [search]);

  const searcMovies = (e)=>{
    e.preventDefault()
    getMovies(search)
  }
   
  return (
    <div className='navbar'>
      <div className="navbar-wrapper">
        <ul className="navbarItem">
          <li className='navbarItemLogo'>
            <img src={navbarLogo} alt="" />
            <span>Movie Box</span>
          </li>
          <li className='navbarItemSearch'>
            <form action="" method="get" onSubmit={searcMovies}>
              <input type="search" name="term" id="" placeholder='What do you want to watch?' onChange={(e) => setSearch(e.target.value) } />
              <Search className='search'role="submit"/>
            </form>
          </li>
          <li className='navbarItemMenu'>
           <div className="navbarItemMenu-wrapper">

            <span className="auth">Sign In</span>
            <span className="Hamburger">
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
