import React ,{useState} from 'react'; 
import image from '../images/signup.webp';
import user from '../images/user-solid.svg';
import mobile from '../images/mobile-solid.svg';
import email from '../images/envelope-solid.svg';

import pass from '../images/lock-solid.svg';
import Nav from './navbar';

const Signup =()=>{


  const [username,setuser]=useState({name:"",email:"",password:"",cpassword:"",phone:""});
 
  let name,value;
  const handle=(e)=>{
  
    name=e.target.name;
    
    value=e.target.value;
    setuser({...username,[name]:value});
  
   
  }
  const  submitvalue=async (e)=>{
  
    e.preventDefault();
    console.log(username);

    const {name,email,password,cpassword,phone}=username;
    
   const res=await fetch('/register',{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,email,password,cpassword,phone})});
  
   const data=await res.json();
  
 console.log(data);
   if(data.status===200){
    console.log("aa");
    window.alert("Data Inserted Successfully in the mongo f");
   }
  }

    return (
        <>
        <Nav/>
        
    <div className="formsize  container mt-5">
    
        <form method="POST" className="formelement  mt-3  mb-2 p-2 ">

        <div className="form-group">
   
   <h4>Signup</h4>
 </div>
        <div className="form-group ">
        <img className="round icon" src={user} alt="project"  />
   <input type="text" name="name" value={username.name} onChange={handle}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>
   
 </div>
 <div className="form-group">
 <img className=" round icon" src={mobile} alt="project"  />
   <input type="text" name="phone" value={username.mobile} onChange={handle}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Mobile Number"/>
   
 </div>
  <div className="form-group">
  <img className=" round icon " src={email} alt="project"  />
    <input type="text" value={username.email} name="email" onChange={handle}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"/>
    
  </div>
  <div className="form-group">
  <img className="round icon" src={pass} alt="project"  />
    <input type="text" name="password" value={username.pass} onChange={handle}  className="form-control" id="exampleInputPassword1" placeholder="Your Password"/>
  </div>
  <div className="form-group">
  <img className="round icon" src={pass} alt="project"  />
  
  <input type="text" name="cpassword"  value={username.cpass} onChange={handle}  className="form-control" id="exampleInputPassword1" placeholder="Confirm  Password"/>
</div>
  
  <button type="submit" onClick={submitvalue} className="btn btn-primary">Submit</button>
</form>
<div className="imageandaccount">
                        <img className="register ml-1 mr-5" src={image} alt="project" />
                        <small className="ml-1" >IT Simple To Register And Enjoy Unlimited Content</small>

                    </div>
{/* <div>
<img className="signup ml-5 mr-5" src={image} alt="project"  />

</div> */}
</div>
       
        </>
    )
}
export default Signup;