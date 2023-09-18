import React from "react";
import "./navbar.css";
import navbarLogo from "./assets/images/tv.svg";
import { Search } from "@mui/icons-material";

export default function Navbar({setSearchKey, searchMovies}) {
 

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <ul className="navbarItem">
          <li className="navbarItemLogo">
            <img src={navbarLogo} alt="" />
            <span>Movie Box</span>
          </li>
          <li className="navbarItemSearch">
            <form action="" method="get" onSubmit={searchMovies}>
              <input
                type="search"
                name="search"
                id=""
                placeholder="What do you want to watch?"
                onChange={(e) => setSearchKey(e.target.value)}
              />
                <button><Search className="search" role="submit" /></button>              
            </form>
          
          </li>
          <li className="navbarItemMenu">
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
      {/* {movies.map(movie=><div>{movie.title}</div>)} */}
    </div>
  );
}
