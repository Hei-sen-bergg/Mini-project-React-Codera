import React from 'react'
import { Link } from 'react-router-dom'
import './Video.css'
import codeVideo from '../assets/6330779-hd_1920_1080_30fps.mp4'

const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
     <source src={codeVideo} type='video/mp4'/>
      </video>
      <div className='content'>
        <h1>Codera</h1>
        <p>Where you learn to code...</p>
      
      <div>
        <Link to='/courses' className='btn'>Courses</Link>
        <Link to='/contact' className='btn btn-light'>Enquire</Link>
          </div>
    </div>
    </div>
  )       
}

export default Video
