import React from 'react'
import './HeroSection.css'
function HeroSection() {
  return (
    <div className="hero-container">
        <video src="/Videos/video-2.mp4" autoPlay loop muted></video>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <button type="button" class="btn btn-outline-secondary text-white ">Get Started</button>
            <button type="button" class="btn btn-default text-dark bg-white ">Watch Trailer <i className="far fa-play-circle"></i> </button>
     
        </div>
    </div>
  )
}

export default HeroSection;