import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tmdb from "../../Components/Api/tmdb";
import Runtime from "../../Components/Runtime/Runtime";
import "./details.css";
import img from "../../Components/Navbar/assets/images/tv.svg";
import home from "../../Assets/Home.svg";
import Bookmarks from "../../Assets/Bookmark.svg";
import Calender from "../../Assets/Calendar.svg";
import Ellipse from "../../Assets/Ellipse.svg";
import icon from "../../Assets/Icon.svg";
import List_1 from "../../Assets/Lists.svg";
import List from "../../Assets/List.svg";
import logout from "../../Assets/Logout.svg";
import Projector from "../../Assets/Projector.svg";
import image from "../../Assets/1.svg";
import Play from "../../Assets/Play.svg";
import PngItem from "../../Assets/PngItem.svg";
import star from "../../Assets/Star.svg";
import TV_Show from "../../Assets/TV_Show.svg";
import Two_Tickets from "../../Assets/Two_Tickets.svg";


export default function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const getMovie = async () => {
    try {
      const { data } = await tmdb.get(`movie/${id}`);
      console.log(data)
      setMovie(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  const { title, release_date, poster_path, overview, vote_count, vote_average, runtime } = movie;
  

  // date to utc
  const local_time = new Date(release_date)
  const utc_time = local_time.toUTCString();



  return (
    <div className="movieDetail-container">
      <div className="movieDetail-wrapper">
        <div className="sidebar">
          <div className="brandname">   
            <img src={img} alt="" />
            <span>Movie Box</span>
          </div>
          <ul className="menu">
            <li className="menu-list">
              <a href="/">
                <img src={home} alt="" />
                Home
              </a>
            </li>
            <li className="menu-list">
              <a href="">
                <img src={Projector} alt="" />
                Movies
              </a>
            </li>
            <li className="menu-list">
              <a href="">
                <img src={TV_Show} alt="" />
                TV Series
              </a>
            </li>
            <li className="menu-list">
              <a href="">
                <img src={Calender} alt="" />
                Upcoming
              </a>
            </li>
          </ul>
          <div className="ticket">
            <p>
              Play movie quizes <br /> and earn <br /> free tickets
            </p>
            <p>50k people are playing now</p>
            <p>
              <button>start playing</button>
            </p>
          </div>

          <div className="logout">
            <button>
              {" "}
              <img src={logout} alt="" /> Logout
            </button>
          </div>
          <span className="hamburger">
              <div className="bar-wrapper">
              <div className="bar"></div>
              <div className="bar"></div>
              </div>
          </span>
        </div>
        <div className="movie-details">
          <div className="trailer">
            <div className="movie-play">
              <span>Watch Trailer
                <div className="image-box">
                <img src={Play} alt="" />
                </div>
              </span>
              <img className="poster" data-testid= "movie-poster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
            </div>
          </div>
          <div className="movie-meta">
            <div>
            <span className="movie-meta-items" data-testid = "movie-title">{title}</span>
            <span className="movie-meta-items" data-testid =  "movie-release-date">{utc_time}</span>
            <span className="movie-meta-items hide-mobile">PG - 13</span>
            <span className="movie-meta-items runtime" data-testid= "movie-runtime">{runtime} mins</span>
            <div className="movie-meta-items">
              <button>Action</button>
              <button>Drama</button>
            </div>
            </div>
           
            <div className="movie-meta-items">
              <span className="star-container"><img className="star" src={star} alt="" /> {vote_average}</span>
              <span className="hide-mobile">| {vote_count}</span>
            </div>
          </div>
          <div className="movie-description">
           <div className="left-box">
           <div className="overview">
              <p data-testid = "movie-overview">{overview}</p>
            </div>
            <div className="extra-description">
              <p>Directors : <span>Josep Josinski</span></p>
              <p>Writers : <span>Jim cash, Jemeel, Adekunle</span></p>
              <p>Stars: <span>Tom Cruise, Jennifer</span></p>
              <div className="rating">
                <button>Top rated movie #65</button>
                <strong>Award 9 Nominations</strong>
                
              </div>
            </div>
           </div>
           <div className="right-box">
              <button><img src={Two_Tickets} alt="" /> See Showtimes</button>
              <button><img src={List} alt="" /> More watch options</button>
              <div className="best-of-the-month">
                <div className="poster-box">
                  <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
                  <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
                  <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
                </div>
              </div>
           </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
