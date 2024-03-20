import React from 'react'
import axios from 'axios'
import { Modal,Button } from 'react-bootstrap'
import { useEffect,useState } from 'react'
import './UserList.css'

function UserList() {
  let [user,setUser]=useState([])
  let [state,setState]=useState()
  let [emp,setEmp]=useState({})

  let sal=(22-emp.leaves)*1800;
  let tax=0.04*sal;
  let DA=1.20 * sal;
  let PF = 0.12 * sal;
  let HRA = sal * 0.27;
  let MealA = 300;let MedicalA = 300;let TransportA = 300;
  let grosspay=(sal+MealA+MedicalA+TransportA+HRA+DA)-(PF+tax) ;

  useEffect(()=>{
   axios.get("/api")
   .then(res=>setUser(res.data))
   .catch(err=>console.log(err))
  },[])

  return (
    <div className="list">
       {
      state===false && <h1 className="text-center  text-success "> 
      <img src="https://th.bing.com/th/id/OIP.bg6GBJIZwCBZ8cxmO0OPXQHaHx?pid=ImgDet&rs=1"   width={"50px"} height={"50px"} className="m-3" alt="" />
       Salary credited for {emp.name}</h1>
    }
      <h2 className="text-center mb-5">EMPLOYEE LIST</h2>
      <table className='table table-striped mb-5 text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESIGNATION</th>
            <th>AGE</th>
            <th>LEAVES</th>
          </tr>
        </thead>
        <tbody>
        {
            user.map(userObj=><tr key={userObj.id}>
              <td>{userObj.id}</td>
                    <td>{userObj.name}</td>
                    <td>{userObj.designation}</td>
                    <td>{userObj.age}</td>
                    <td>{userObj.leaves}</td>
                    <td><Button className="btn btn-success" onClick={()=>{
                      setEmp(userObj);
                      setState(true)}}>
                        View Pay slip</Button></td>
                    {/* <td><Button className='btn btn-danger'>delete</Button></td> */}
            </tr>)
          }
        </tbody>
      </table>
      {/* 
      
      
                sal = d*1800;
                TAX =  0.04 * sal;DA = 1.20 * sal;PF = 0.12 * sal;HRA = sal * 0.27;MealA = 300;MedicalA = 300;TransportA = 300;
	grosspay = (sal+MealA+MedicalA+TransportA+HRA+DA)-(PF+TAX) ;
      
      */}
      
      <Modal show={state}>
     <Modal.Header className="lead text-dark mx-auto">Employee Payslip</Modal.Header>
     <Modal.Body >
      <h6>Employee name : {emp.name}</h6>
      <h6>Working Days : {22-emp.leaves}</h6>
      <h6>Earnings:</h6>
      <h6>Basic Pay : {sal}</h6>
      <h6>HRA(27% of Basic): {HRA}</h6>
      <h6> DA (120% of Basic): {DA}</h6>
      <h6>Meal Allowance : 300</h6>
      <h6>Medical Alowance : 300</h6>      
      <h6>Transport Allowance : 300</h6>       
      <h6>PF : {PF}</h6>
      <h6>TAX : {tax}</h6>
      <h6>Grosspay : {grosspay}</h6>
      
     </Modal.Body>
     <Modal.Footer>
        <Button onClick={()=>{setState(false)}}>Credit salary</Button>
     </Modal.Footer>
     </Modal>
   
    </div>
  )
}

export default UserList