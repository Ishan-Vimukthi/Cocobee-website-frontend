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
      <div className="flex justify-center items-center ">
        <MiddleImage/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
