import React from 'react'
import Navbar from '../components/Navbar'
import MainImage from '../components/MainImage'
import Footer from '../components/Footer'
import Form from '../components/form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <MainImage heading= "Any questions ?" text='We would love to hear from you... '/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
