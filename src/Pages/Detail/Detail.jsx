import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { Card } from "@mui/material";
import tmdb from "../../Components/Api/tmdb";

export default function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const getMovie = async () => {
    try {
      const { data } = await tmdb.get(`movie/${id}`);
      console.log(data);
      setMovie(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovie();
  },[]);

  const {title, release_date,  poster_path, overview} = movie

  return (
   
          <Card className="movieDetail-container">
            <div className="movieDetail-wrapper">
              <div className="moviecard">
                <div className="image-box">
                  <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} style={{width: "250px", height: '300px'}} alt="" />
                </div>
                <div className="movie-detail-box">
                  <h1>{title}</h1>
                  <p>{release_date}</p>
                  <p>{overview}</p>
                </div>
              </div>
            </div>
          </Card>
        
  );
}
