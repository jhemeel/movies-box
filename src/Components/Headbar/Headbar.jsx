import React from 'react'
import Navbar from '../Navbar/Navbar'
import './headbar.css'
import DescriptionBox from '../DescriptionBox/DescriptionBox'

export default function Headbar() {
  return (
    <div className='headbar'>
      <Navbar/>
      <DescriptionBox/>
    </div>
  )
}
