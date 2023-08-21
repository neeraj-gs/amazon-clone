import React from 'react'
import './Home.css'
import Banner from './assets/Banner.jpg'

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img src={Banner} alt="Banner in Home Page" />
        </div>
    </div>
  )
}

export default Home