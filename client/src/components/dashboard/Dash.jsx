import { motion } from "framer-motion";
import {Package} from "lucide-react" ;
import { ShoppingBag, Users ,Bell,Calendar ,RefreshCw,Download  } from "lucide-react";
import { useEffect, useState } from "react" ;
import { useAuthStore } from "../../zustand/store";
import { RiSendPlaneFill,RiArrowRightSLine } from "react-icons/ri";


export const Dash = () => {
  const [search,setSearch] = useState("");
  const {user} = useAuthStore() ;
  const [toogle,setToogle] = useState(false)
  const [filter,setFilter] = useState(1);

		
  return (
    <>

    <div className="flex justify-between mt-12 sm:px-20 items-center  px-[2px] ">
       <h1 className="text-2xl font-bold">DashBoard</h1>
	    <div className="flex items-center justify-between">    
       <form onSubmit={(e) => {e.preventDefault()}} >
        	<label className="input input-bordered  p-2 sm:w-[350px] w-[200px] flex items-center gap-2">
          <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-8 w-8 opacity-70 cursor-pointer gap-1">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
  <input type="text" className="grow gap-7" placeholder="Search..."
      onChange={(e) => setSearch(e.target.value)}
  />
 
</label>
</form>
 
<Bell className="ml-2"/>
<div className="dropdown dropdown-top items-center"> 

            <div tabIndex={0} role="button"
                onClick={() => setToogle(!toogle)}
            className={`flex gap-[15px] w-[95%] mx-auto cursor-pointer items-center    rounded-lg    hover:text-white  font-poppins  `}>
            <div className={`flex gap-[25px]  h-[80px] items-center  font-extrabold    bg-white text-black  `}>
        <div className=" rounded-full xl:ml-3 mask mask-circle w-20    "> { user.profilePic &&  
          <img src={user.profilePic} className=" rounded-full h-[60px]  " alt=""   />
           } </div>
        <div className="xl:flex items-center gap-[5px]  hidden  flex-grow">

          <div>

          {user.name}
          <p className=" text-[10px]">
            </p>
            <p className="text-[10px]">{user.email}</p>
          </div>
          <RiArrowRightSLine className={`text-2xl     text-end ` } />
        </div>
        <div className={`h-[80px] w-[3px]    `}></div>
      </div>
                     </div> 
                   {toogle &&  <motion.div
				initial={{ opacity: 0, y: 0 }}
				animate={{ opacity:5 , y: 0 }}
				transition={{ duration: 0.5 }}
                    
                >    
                     <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] gap-1 w-[95%] mx-auto p-2 shadow">
                    <li>    
                    <Link to={"/dashboard?tab=profile"} className={`w-full  hover:bg-orange-600 hover:text-white font-bold
                        ${tab == "profile" ? " bg-orange-600 text-white":"bg-white text-black"} 
                      `}>  {icons[icons.length-3]}
                    <p className="font-semibold  hidden lg:inline-block "> profile </p>      </Link>
                     </li>
                     <li>   <Link to={"/"} className="w-full hover:bg-orange-600 hover:text-white font-bold">  {icons[icons.length-2]}
                     <p className="font-semibold  hidden lg:inline-block"> Home page </p>      </Link></li> 
                     <li>   <Link to={"/dashboard"} className="w-full hover:bg-orange-600 hover:text-white font-bold">   {icons[icons.length-1]}
                     <p className="font-semibold  hidden lg:inline-block"> Log out </p>     </Link></li> 
             </ul>
             </motion.div> }
            </div>
          
            </div>  
 
    </div>

   
    <div className="flex justify-between m-10">
      <a className="btn  sm:text-lg text-black "> 
      <Calendar  /> 
        <span className="md:flex hidden gap-2">Last Updated : April 18,2024 </span>
        <RefreshCw />
         </a>
         <button className="btn   bg-blue-600 sm:text-xl  font-bold text-white hover:bg-blue-600 "
              onClick={()=>document.getElementById('my_modal_1').showModal()}
            >  <Download size={23} /> Import / Export  </button>
  
   
    </div>
    </>  
    
    
  )
}
