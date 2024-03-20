import axios from 'axios';
import React from 'react'
import {useForm} from 'react-hook-form'
import './AddUser.css'

function AddUser() {
  let {register,handleSubmit,formState:{errors}}=useForm();
let submitForm=(data)=>{
   axios.post("/post",data)
   .then(res=>console.log(res))
   .catch(err=>console.log(err))

}
let reload=()=>
{
   window.location.reload();
}
  return (
    <div className='container m-5'>
        <h2 className='h mb-4 text-center'>Employee Form</h2>
        <div className="row">
            <div className="col-11 col-sm-8 col-md-6 mx-auto">
            <form onSubmit={handleSubmit(submitForm)}>
               <input type="text"
             
              id="id"
               className="form-control mb-3"
                placeholder='Enter ID'
               {...register("id")}
                  />
            <input type="text"
             
              id="name"
               className="form-control mb-3"
                placeholder='Enter Name'
               {...register("name")}
                  />
                   <input type="text"
             
             id="designation"
              className="form-control mb-3"
               placeholder='Enter Designation'
              {...register("designation")}
                 />
                 <input type="number"  id="age" 
                 className='form-control mb-3'
                 placeholder='Enter Age'
             {...register("age")}
                 />
                 <input type="number"  id="leaves" 
                 className='form-control mb-3'
                 placeholder='Enter number of leaves'
             {...register("leaves")}
                 />
                 
       <button type="submit" className='btn1 text-white' onClick={reload}>Submit</button>
        </form>
            </div>
        </div>
    </div>
  )
  
}

export default AddUser
