import React from 'react'
import Headbar from '../../Components/Headbar/Headbar'
import FeaturedMovie from '../../Components/FeaturedMovie/FeaturedMovie'
import Footer from '../../Components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Headbar/>
      <FeaturedMovie/>
      <Footer/>
    </div>
  )
}
