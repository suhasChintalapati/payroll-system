var express=require('express')
var app=express()
let cors = require("cors");
require("dotenv").config()
var mysql=require('mysql')
var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.USER,     // your root username
    database : process.env.DATABASE,   // the name of your db
    password : process.env.PASSWORD  
  });
app.use(express.json())

app.get("/api",(req,res)=>
{
    console.log("Get request");
    let q='select * from emp';
    connection.query(q,(error, results)=> {
     if (error) 
     console.log( error);
     res.json(results)
  });
})

app.post("/post",(req,res)=>
{
    let id=JSON.stringify(req.body.id);
    let name=JSON.stringify(req.body.name);
    let designation=JSON.stringify(req.body.designation);
    let age=JSON.stringify(req.body.age);
    let leaves=JSON.stringify(req.body.leaves);
    let q=`insert into emp(id,name,designation,age,leaves) values(${id},${name},${designation},${age},${leaves})`;
    connection.query(q,(error, results)=> {
        if (error) 
        console.log(error);
        console.log("success")
     });

}
)
const port=process.env.PORT||8080

app.listen(port,()=>
{
    console.log("Server is running on 8080");
})
