import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='foot text-white '>
      <div className="d-flex flex-column p-5 lead opacity-75">
     <a >Connect with Us</a> 
     <a >Facebook</a> 
     <a >Twitter</a> 
     <a >Instagram</a> 
      </div>
      <div className="d-flex flex-column p-5 lead opacity-75">
        <a >Let Us Help You</a>
      <a >COVID-19 and</a>
      <a >Your Account</a>
      <a >Returns Centre</a>
      <a >Assistant Download</a>
      <a >Help</a>
      </div>
    </div>
  )
}

export default Footer