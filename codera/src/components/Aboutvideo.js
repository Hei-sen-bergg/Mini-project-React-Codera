import React from 'react'
import './Aboutvideo.css'
import aboutvideo from '../assets/7534244-hd_1920_1080_25fps.mp4'

const Aboutvideo = () => {
  return (
    <div className='about'>
    <video autoPlay loop muted id='video'>
   <source src={aboutvideo} type='video/mp4'/>
    </video>
    <div className='content'>
      <h1>Who are we ?</h1>

      <p>We are a collective of passionate tech enthusiasts dedicated to educating people worldwide on the art of coding. 
        With over 5 years of expertise, we excel in online teaching, offering flexible learning opportunities that transcend 
        geographical boundaries. Whether you're a beginner or an experienced coder, our platform welcomes all, fostering a 
        collaborative environment where individuals can learn, grow, and thrive together on their coding journey.</p>
  </div>
  </div>
  )
}

export default Aboutvideo
