const express=require('express');
const bcrypt=require('bcrypt');
const data=require('./db_connect');
const jwt=require('jsonwebtoken');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send("Welcome to the router page ");
})
router.post('/register',async(req,res)=>{
  
const { name,email,password,cpassword,phone }=req.body;


if(!name  || !email || !password || !cpassword || !phone){
   
    return res.json({message:"Please filled the information correctly "});
}
// using promises

// data.findOne({email:email}).then(function(call){
//     if(call){
//        return  res.json({message:"user already exist"});
//     }
//     const database=new data ({
//         name:name,
//         age:age,
//         email:email,
//         password:password,
//         cpassword:cpassword,
//         phone:phone,
    
        
//     })
//     database.save().then(()=>{
//         res.json({message:"data insered succcessfully"});
//     })

// })
    
// using Async approach
try{
    if(password!=cpassword){
        return res.json({message:"password and confirm password not matched"});
    }
const userexist=await data.findOne({email:email});
if(userexist){
    return res.json("User Email is Already exist ");
}



const database=new data ({
            name:name,         
            email:email,
            password:await bcrypt.hash(password,10),
            cpassword:await bcrypt.hash(cpassword,10),
            phone:phone,
          
        
            
        })
        
     
        const stored=await database.save();
        if(stored){
            console.log(stored);
        }
      
        return res.json({messag:"user successfully inserted"});
       
     

}catch(err){
    res.json(console.log(err))
}




})
router.post('/login',async (req,res)=>{
    const {email,password}=req.body;
// jsonwebtoken implemntation 
const userdetail=req.body;
const secret ="secret";
const token = jwt.sign(
    { userdetail },
     secret,
     {
       expiresIn: "2h",
     },(err,authtoken)=>{
        // res.json(authtoken)
        res.cookie("jsontokenstored",authtoken,"name",userdetail.name,new Date(Date.now),{httpOnly:true})
     
     }
   );
   




    if(!email || !password){
        return res.json({mas:"please filled the email and password"});
    }
   const loginemail=await  data.findOne({email:email});

  const cpass=loginemail.password;
  const correctemail=loginemail.email;
  
  res.cookie("name",loginemail.name,new Date(Date.now),{httpOnly:true});
 

   const ismatched=await bcrypt.compare(password,cpass);
   if((!ismatched) || (correctemail!=email)){
    return res.json({mes:"Invalid credentiald "})
   }

   else{
    let status=200;
    let check=true;

    // return res.json()
    res.status(200).json({loginemail,check});

   }
   
});
router.post("/about",verifytoken,(req,res)=>{
    const secret="secret";  
jwt.verify(req.token,secret,(err,data)=>{
    
    if(err){
        res.json(err);
        res.json({msg:"invalid crendentials"});
    }
    else{
        res.json({msg:data})

    }
})

})
function verifytoken(req,res,next){
    const header=req.headers['authorization'];
    if(typeof header!=='undefined'){
        const bearer=header.split(" ");
        const headergenerate=bearer[1];
        req.token=headergenerate;
        next();
    }
}
router.get('/logout',(req,res)=>{
    res.clearCookie('jsontokenstored');
    res.clearCookie('name');
  

  return res.json({msg:"Successfully plamhjash Logout ",c:true})
})
// router.get('/getname',verifytoken,(req,res)=>{
    
//     const secret="secret";  
//     jwt.verify(req.token,secret,(err,data)=>{
//         if(err){
//             res.json({msg:"invalid crendentials"});
//         }
//         else{
//            res.json({msg:"hello"})

    
//         }
//     })
  
// })

module.exports=router;