const express=require('express');
const app=express();
require('./db_connect.js');
app.use(express.json())
app.use(require('./router'));

app.get('/',(req,res)=>{
    res.send("hello welcome to the home page");
})
app.get('/contact',(req,res)=>{
    res.send("hello welcome to the conact page");
})
app.get('/login',(req,res)=>{
    res.send("hello welcome to the login page");
})
app.get('/signup',(req,res)=>{
    res.send("hello welcome to the signup page");
})
app.listen(5000,()=>{
   console.log("succesfully learning on the port 3000")
}
)
