import React from 'react'
import { Link } from 'react-router-dom'
import './movieCard.css'
import { Card } from '@mui/material'

const MovieCard = ({movie}) => {
  return (
    <Link to={`movie/${movie.id}/`}>
            <Card className='moviecard'>
                <div className="movie-image-box">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                </div>
                <div className="movie-detail-box">
                    <h1>{movie.title } title</h1>
                    <h1>{movie.release_date}</h1>
                </div>
            </Card>
    </Link>
   
  )
}

export default MovieCard