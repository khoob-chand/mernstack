import React ,{createContext,useReducer} from 'react';
import Nav from  './components/navbar';
import Signup from  './components/signup';
import Login from  './components/login';
import About from  './components/about';
import Logout from  './components/logout';
import Home from  './components/home';
import {init ,reducer} from './components/reducer'



import './App.css'
import {
  BrowserRouter as
 Router,

  Routes,Route
  
} from "react-router-dom";
const context=createContext();
const App=()=>{
 const [state,dispatch]=useReducer(reducer,init)


 
  return (
    <>
 
   <context.Provider value={{state,dispatch}}>
    <Routes>
 
    <Route  exact path="/" element={<Nav />  }/>
   
    
    <Route path="/" element={<Nav />  }/>
    <Route path="/register" element={<Signup />  }/>
    <Route path="/login" element={<Login />  }/>
    <Route path="/about" element={<About />  }/>
    <Route path="/logout" element={<Logout />  }/>
    <Route path="/home" element={<Home />  }/>


   

    </Routes>
    </context.Provider>

    </>
    )
}
 
export default App;
export  {context};
