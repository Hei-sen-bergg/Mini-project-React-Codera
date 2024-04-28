import React from 'react'
import errorpic from '../assets/errorpic.jpg'
import { Link } from 'react-router-dom';


const Errorpage = () => {
  return (
    <div>
      <img src={errorpic} alt='' style={{width: '100vw', height: '80vh'}}/>
      <p style={{ color: '#fff', fontSize: '1.2rem', marginTop: '1rem', textAlign:'center'}}>
      <Link to="/">  An error occurred. Please click here return to the homepage</Link>.</p>
    </div>
  )
}

export default Errorpage
