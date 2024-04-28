import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
const [click,setClick]=useState(false)
const handleClick=()=> setClick(!click)


  return (
    <div className='header'>
        <Link to='/'><h1>Codera</h1></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/courses'>Courses</Link>
            </li>
            <li>
                <Link to='/blog'>Blog</Link>
            </li>
            <li>
                <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
                <Link to='/about'>About Us</Link>
            </li>
        </ul>

        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:'#fff'}}/>): <FaBars size={20} style={{color:'#fff'}}/>}
            
        </div>
    </div>
  )
}

export default Navbar;
