import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { Card } from "@mui/material";
import axios from "axios";

export default function Detail() {
  const [movie, setMovie] = useState("");
  const { id } = useParams();

  const getMovie = async () => {
    try {
      const {data} =  await axios.get(`https://api.themoviedb.org/3/discover/movie/${id}}?api_key=7dd454aad5387b45073594083e0f432b`)
      console.log(data)
      setMovie(data.results)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovie();
  });

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-wrapper">
        <div className="movie-detail">
        <Card className='movieDetail-container'>
        <div className="movieDetail-wrapper">
            <div className='moviecard'>
                <div className="image-box">
                    <img src={movie.image} alt="" />
                </div>
                <div className="movie-detail-box">
                    <h1>{movie.title}</h1>
                    <p>{movie.body}</p>
                </div>
            </div>
        </div>
    </Card>
        </div>
      </div>
    </div>
  );
}
