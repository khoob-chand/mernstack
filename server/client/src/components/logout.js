
import React ,{useEffect,useState,useContext} from "react";
import Nav from './navbar';
import {context} from '../App'

import { useNavigate } from 'react-router-dom';


const Componen =  () => {
    const [Listing, setListing] = useState( {});
    

    const {state,dispatch}=useContext(context);
  

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('/logout',{method:"GET",headers:{"Content-Type":"application/json"}});
          const json = await response.json();
          if(json.c==true){
          dispatch({type:"user",payload:false});

          }
       return  setListing(json);
       
          
        };
        
       
        
    
        fetchData();
      }, );
      
    return Listing  ;
        
      
        
            
            
        
    
}
const Logout = () => {

    const user = Componen();
    
    return (
<>
<Nav />
    <div>{ user?.msg}</div>
 

    </>
    )
  };
export default Logout ;