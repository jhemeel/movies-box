import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./FeaturedMovie.css";
import axios from "axios";

export default function FeaturedMovie() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const {data} = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=7dd454aad5387b45073594083e0f432b"
      );
      setMovies(data.results.slice(0, 10))
      console.log(data.results)
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="FeaturedMovie-container">
      <h2 className="heading-1">Featured Movies</h2>
      <div className="FeaturedMovie">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
