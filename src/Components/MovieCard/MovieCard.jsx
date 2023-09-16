import React from 'react'
import { Link } from 'react-router-dom'
import './movieCard.css'
import { Card } from '@mui/material'

const MovieCard = ({movie}) => {
  return (
    <Link to={`movie/${movie.id}/`}>
            <Card className='moviecard' data-testid="movie-card">
                <div className="movie-image-box">
                    <img data-testid= "movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                </div>
                <div className="movie-detail-box">
                  <div className="release-date">
                  <span data-testid = "movie-release-date">{movie.release_date}</span>
                  </div>
                  <div className="title">
                  <span data-testid ="movie-title">{movie.title } </span>
                  </div>
                </div>
            </Card>
    </Link>
   
  )
}

export default MovieCard