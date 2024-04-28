import React from 'react'
import './Coursecards.css'
import { Link } from 'react-router-dom'

const Coursecards = () => {
  return (
    <div className='courses'>
        <div className='card-container'>
            <div className='card'>
                <h3>-R U B Y-</h3>
                <span className='bar'></span>
                <p>6 months</p>
                <p>25hr/week</p>
                <p>$270.00</p>
                <Link to='/contact' className='btn'>Enroll</Link>
            </div>
            <div className='card'>
                <h3>-P Y T H O N-</h3>
                <span className='bar'></span>
                <p>5 months</p>
                <p>20hr/week</p>
                <p>$250.00</p>
                <Link to='/contact' className='btn'>Enroll</Link>
            </div>
            <div className='card'>
                <h3>-J A V A S C R I P T-</h3>
                <span className='bar'></span>
                <p>4 months</p>
                <p>15hr/week</p>
                <p>$220</p>
                <Link to='/contact' className='btn'>Enroll</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Coursecards
