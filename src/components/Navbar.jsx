import { React, useEffect, useState } from 'react'
import { useNavigate, Link, } from 'react-router-dom'
import logo from '../assets/react.svg'
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [dropdownOpen, setDropdownOpen] = useState(true);//variable for check Dropdown
 
  //Function for toggle dropdown
  let toggleDropDown=()=>{
    console.log("toggleDrown called");
    dropdownOpen?setDropdownOpen(false):setDropdownOpen(true)
   
  }

 //User authentication checking via localStorage
  const auth = localStorage.getItem('user')

  let navigate = useNavigate();//Very important hook for Navigate Links

  //Log out functionality implementing on Log out Button click
  const logOut = () => {

    console.log("Hello world")
    localStorage.clear()//clearing localStorage for logOut
    //after logout redirection to Registration page
    navigate('/register')

  }
  return (
    <div>
      <div className='Nav'>
        <span className='ham-container'><GiHamburgerMenu className='ham-icon' onClick={toggleDropDown} /> <span>SALE YOUR PRODUCTS 24*7</span></span>
        <hr></hr>
       { //Condition for toggle Dropdown
        dropdownOpen && <ul className={`dropdown ${dropdownOpen ? 'open' : ''}`}>
          {/* <img className='logo' src={logo}></img> */}

          {// User authentication checking for access other links
            auth ? <>
              <Link to='/'><li className='ne '>Products</li></Link>
              <Link to='/add-product'> <li className='ne'>Add Product</li></Link>
              <Link to='/contact'><li className='ne '>CONTACT</li></Link>
              <Link onClick={logOut} to='/register'><li className='ne  '>Log Out({JSON.parse(auth).name})</li></Link>
            </>
              //User redirect to Registration form component if user not logged in
              : <Link to='/register'><li id='register-right' className='ne'>REGISTRATION</li></Link>
          }
        </ul>}
      </div>
    </div>
  )
}
