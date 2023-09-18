import React from 'react'
import Navbar from '../Navbar/Navbar'
import './headbar.css'
import DescriptionBox from '../DescriptionBox/DescriptionBox'

export default function Headbar({setSearchKey, searchMovies}) {
  return (
    <div className='headbar'>
      <Navbar setSearchKey={setSearchKey} searchMovies={searchMovies}/>
      <DescriptionBox/>
    </div>
  )
}
