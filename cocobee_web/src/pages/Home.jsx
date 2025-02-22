import React from 'react'
import NavBar from '../components/NavBar'
import WelcomeText from '../components/WelcomeText'
import Slider from '../components/Slider'
import MiddleText from '../components/MiddleText'
import Footer from '../components/Footer'
import MiddleImage from '../components/MiddleImage'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <WelcomeText/>
      <Slider/>
      <MiddleText/>
      <MiddleImage/>
      <Footer/>
    </div>
  )
}

export default Home
