import React,{useContext} from 'react';
import Nav from './navbar'
import {context} from '../App'

import Cookies from 'js-cookie';

const Home = ()=>{
    // const res=await fetch('/getname',{method:"GET",headers:{"Content-Type":"application/json"}});
    // let data=await res.json();
    // console.log(data);

   
    return (
        <>
        <Nav />
        <div class="container">
       
            <div class="welcomeflex mt-1"><h3 class="text-center">Welcome  </h3>
            <h3  class="text-center">{Cookies.get('name')} to our website </h3></div>
            

       
        </div>
        
        </>
    )
} 
export default Home;