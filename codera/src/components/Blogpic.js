import React from 'react'
import './Blogpic.css'
import { Link } from 'react-router-dom'
import blog1 from '../assets/mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg'
import blog2 from '../assets/joshua-reddekopp-GkFQEOubrCo-unsplash.jpg'

const Blogpic = () => {
  return (

        <div className='blog'>
            <div className='left'>
                <h1>Tech Today !</h1>
                <p>Today's technology landscape is characterized by rapid advancements and innovations across various domains. From artificial intelligence and machine learning to blockchain and quantum computing, cutting-edge technologies are reshaping industries and transforming how we live, work, and communicate. The rise of cloud computing has revolutionized data storage and processing, enabling businesses to scale efficiently and leverage big data analytics for strategic decision-making. </p>
                <Link to='/contact'><button className='btn'>Explore</button></Link>
            </div>
        
        <div className='right'>
            <div className='image-container'>
                <div className='image-one'>
                    <img src={blog1} className='img' alt=''/>
             </div>
                <div className='image-two'>
                    <img src={blog2} className='img' alt=''/>
             </div>

            </div>
        </div>
        </div>
      
  )
}

export default Blogpic
