import React from 'react'
import './Home.css'
import Banner from './assets/Banner.jpg'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src={Banner} alt="Banner in Home Page" />
        </div>
        <div className="home__row">
            {/* Products 4 in One COMponet  */}
            <Product />
        </div>
    </div>
  )
}

export default Home