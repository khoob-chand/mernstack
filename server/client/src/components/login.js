import image from '../images/signup.webp';
import React, {useState ,useContext,createContext} from "react";
import pass from '../images/lock-solid.svg';
import email from '../images/envelope-solid.svg';
import Nav from './navbar';
import { Link } from "react-router-dom";
import {context} from '../App'



const Login = () => {
  
  
    const   {state,dispatch}= useContext(context);
     
  
   
    const [login,setlogin]=useState({email:"",password:""})
    const handlelogin=(e)=>{
       let name=e.target.name;
        let  value=e.target.value;
        setlogin({...login,[name]:value});

    }
  
    const  submitloginvalue=async (e)=>{
      
  
        e.preventDefault();
        // console.log(username);
    
        const {email,password}=login;
        
       const res=await fetch('/login',{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,password})});
      
       const data=await res.json();
      
    //   if(data.check===true){
    
       

       
       
       
        dispatch({type:"user",payload:true})
    //   }
    
       
    //    console.log(data);
      
     
       if(data===200){
 
        window.alert("login  Successfully ");
       }
    }  
 
    return (
        <>
            <Nav />
            
                    <div className=" homecontainer container">
                     
                    <form method="POST" className="ml-1 p-1 mt-3">

                        <div className="form-group">

                            <h4>Sign in</h4>
                        </div>
                        <div className="form-group">
                            <img className=" round icon " src={email} alt="project" />
                            <input type="text" value={login.email} onChange={handlelogin} name ="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email " />

                        </div>

                        <div className="form-group">
                            <img className=" round icon " src={pass} alt="project" />
                            <input type="text" value={login.password} onChange={handlelogin} name="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Password" />

                        </div>



                        <button type="submit" onClick={submitloginvalue} className="btn btn-primary">Login</button>
                    </form>
                    
                    <div className="imageandaccount ">
                        <img className="signup ml-1 " src={image} alt="project" />
                        <h6 className="ml-5" ><Link className="ml-1 text-dark " to="/register">Create an Account</Link></h6>

                    </div>
                    </div>
            
        </>
    )
}
export default Login;
