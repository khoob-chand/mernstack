import React ,{useState,useContext} from 'react';
import Cookies from 'js-cookie';
import logo from '../images/download.png'
import { Link } from "react-router-dom";
// import css from  '../App.css';
import {context} from '../App'
const Navbar=()=>{
  let  [states,setstate]=useState("Login");
  const {state,dispatch}=useContext(context);

  // console.log(dispatch);
if(state){
  return (
    <> 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
 
  <img className="logo ml-4 round" src={logo} alt="project"  />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto mr-5 ">
      <li className="nav-item active px-2">
        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active px-2">
        <Link className="nav-link" to="/About">About </Link>
      </li>
     
     
      <li className="nav-item active px-2">
        <Link className="nav-link" to="/logout">Logout</Link>
      </li>
     
    
    </ul>
  </div>
</nav>


     </>
   ) }
    else {
      return (
      <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
 
 <img className="logo ml-4 round" src={logo} alt="project"  />
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse" id="navbarNav">
   <ul className="navbar-nav ml-auto mr-5 ">
     <li className="nav-item active px-2">
       <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
     </li>
     <li className="nav-item active px-2">
       <Link className="nav-link" to="/About">About </Link>
     </li>
     <li className="nav-item active px-2">
       <Link className="nav-link" to="/login">{states}</Link>
     </li>
     <li className="nav-item active px-2">
       <Link className="nav-link" to="/register">Register</Link>
     </li>
 
    
   
   </ul>
 </div>
</nav></>
     
    )}

}

 
  
      export default Navbar;
   

