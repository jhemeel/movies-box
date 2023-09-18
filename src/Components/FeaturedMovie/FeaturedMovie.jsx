import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./FeaturedMovie.css";

export default function FeaturedMovie({movies}) {
  return (
    <div className="FeaturedMovie-Container">
      <h2 className="heading-1">Featured Movies</h2>
      <div className="FeaturedMovie">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
