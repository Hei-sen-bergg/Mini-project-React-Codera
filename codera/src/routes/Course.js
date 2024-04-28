import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainImage from '../components/MainImage'
import Coursecards from '../components/Coursecards'

const Course = () => {
  return (
    <div>
      <Navbar/>
      <MainImage heading='Courses' text='Choose from the best courses'/>
      <Coursecards/>
      <Footer/>
    </div>
  )
}

export default Course
