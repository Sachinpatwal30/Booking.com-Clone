import React from 'react'
import Featured from '../../components/Featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import "./home.css"

export default function Home() {
  return (
    <div className='home'>
 
          <Navbar />
          <Header />

          <div className="homeContainer">

            <Featured/>
            
            <h1 className="homeTitle">Browse by Property type</h1>

            <PropertyList/>

            <h1 className="homeTitle">Homes Guests love</h1>

            <FeaturedProperties/>

            <MailList/>

            <Footer/>


          </div>


    </div>
  )
}
