import React from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import Footer from '../footer/Footer';
function Login() {
  let navigate=useNavigate();
  let goto=()=>{
    navigate("/About")

  }

  return (
    <div className="main p-5">
     <div className='login pb-5'>
      <h1 className=' text-center mb-3'>Sign In </h1>
      <div className="row"> 
        <div className="col-11 col-sm-8 col-md-6 mx-auto">
      <form >
        <label  htmlFor="username"> <b>UserName</b> </label>
      <input type="text"  id="username" placeholder='Enter User Name' className='form-control display-3 mb-2'/>
      <label htmlFor="password"> <b>Password</b> </label>
      <input type="text"  id="password" placeholder='Enter Password' className='form-control mb-4 display-3'/>
      <button className="btn1  mb-5" onClick={()=>goto()}>Sign In</button>
      </form>
    </div>
    </div>
    </div> 
    
    </div>
  )
}

export default Login