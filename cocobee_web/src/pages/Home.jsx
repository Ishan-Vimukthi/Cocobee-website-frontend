import React from 'react'
import NavBar from '../components/NavBar'
import WelcomeText from '../components/WelcomeText'
import Slider from '../components/Slider'
import MiddleText from '../components/MiddleText'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <WelcomeText/>
      <Slider/>
      <MiddleText/>
    </div>
  )
}

export default Home
