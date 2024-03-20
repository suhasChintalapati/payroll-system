import React from 'react'
import {Link} from 'react-router-dom'
import './Navi.css'

function Navi() {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary border">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Dexter-logo.png" width={"150px"} alt="" /> </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active"  to="/About">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/AddUser">Add Employee</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/UserList">Employee List</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
    
  )
}

export default Navi