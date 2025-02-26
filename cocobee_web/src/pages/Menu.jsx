import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TextinMenu from '../components/TextinMenu'
import SubNavbarMenu from '../components/SubNavbarMenu'
import ProductMenu from '../components/ProductMenu'

const Menu = () => {
  return (
    <div>
      <NavBar />
      <SubNavbarMenu />
      <TextinMenu />
      <div className="mb-100"> {/* Added margin-bottom to create space */}
        <ProductMenu />
      </div>
      <Footer className="mt-12" /> {/* Added margin-top to create space */}
    </div>
  )
}

export default Menu
