import React from 'react'
import Navbar from '../components/Navbar'
import MainImage from '../components/MainImage'
import Footer from '../components/Footer'
import Blogpic from '../components/Blogpic'

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <MainImage heading='Blog' text='Latest from our blog'/>
      <Blogpic/>
      <Footer/>
    </div>
  )
}

export default Blog
