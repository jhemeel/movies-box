import React from 'react'
import Headbar from '../../Components/Headbar/Headbar'
import FeaturedMovie from '../../Components/FeaturedMovie/FeaturedMovie'
import NewArrival from '../../Components/NewArrival/NewArrival'
import Footer from '../../Components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Headbar/>
      <FeaturedMovie/>
      <NewArrival/>
      <Footer/>
    </div>
  )
}
