import React from 'react'; 
import { SignUp } from "../components/auth"
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";


const Signup = () => {
  return (
    <div className=" flex justify-center  items-center">

        <div  className=" flex flex-col items-center gap-4 justify-center  w-1/3 ">
        <Link to={"/"} >
        <img src={assets.logo} width={300} alt="" />
        </Link> 
            <SignUp />                  
          </div>
        <div className=" bg-cover Bg w-2/3 bg-orange-600 h-screen  ">
                
                
        </div>

    </div>
  )
}

export default Signup