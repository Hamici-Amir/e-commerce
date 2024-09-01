
import React from 'react'; 
import { Link } from "react-router-dom"
import { NavFeatures , NavLinks } from "../../constants"
import { useState } from "react";

import { useAuthStore } from "../../zustand/store";
import { motion } from "framer-motion";






export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [toogle, setToogle] = useState(false)     
  const { isAuthenticated, user,logout } = useAuthStore();

  const handleLogout = () => {
        logout();
  }

    return (
    <nav className="  h-20 w-full sm:px-[100px]   top-0  border-b border-black px-[30px] flex justify-between items-center "
    onScroll={() => setToogle(!toogle)}

    >
 
            <div className=" text-orange-600   lg:text-5xl text-4xl  font-extrabold   ">
                    Tomato. 
            </div>
            <div className=" hidden  items-center relative gap-3 xl:flex">
                
                <input 
                type="text" 
                className="w-[500px] h-[60px] border-none  px-5 bg-[#E4E4E4] rounded-[50px] "
                placeholder="Search anything..."
                />
                <button className="bg-[#fff] cursor-pointer  left-[376px] text-black absolute top-[5px] w-[120px] h-[50px] rounded-[50px] font-bold text-2xl  "> Search </button>
               
            </div>

            <div className=" w-[370px] gap-[40px] flex items-center  text-[#49557e] ">
            
                {NavFeatures.map((item,index) => (
                <Link   key={index} to={`/${NavLinks[index]}`} >
                        <div className={`    transition-transform ${ menu == item ? "underline":""}  text-xl text-[#49557e] `} 
                            onClick={() => setMenu(item)}
                        >
                            {item}
                        </div>
                </Link>

            ) )}
                                
            {
                !isAuthenticated ?
                
                <Link class="bg-transparent hover:bg-orange-600   text-[#49557e] font-bold hover:text-white py-2 px-2.5 w-28 border border-orange-600  hover:border-transparent rounded-full "
                        to={"/sign-in"}                 
                 > 
                                <span className=" mx-auto px-4" >
                                sign-in

                                </span>
                
                </Link>
                :<>
                    <div className=" mx-auto   bg-none  "
                    >  

                  
  <img src="https://avatar.iran.liara.run/public/boy" className=" cursor-pointer " 
    onClick={() => setToogle(!toogle)}
  width={50} alt="" />
            {toogle &&  <motion.div
				initial={{ opacity: 0, y: 0 }}
				animate={{ opacity: 5, y: 0 }}
				transition={{ duration: 0.5 }}
                    
                >    
                
                <ul  class="dropdown-content menu fixed bg-base-100  rounded-box  right-0  z-50 w-60 p-2 shadow">
                  <li>  <div> {user.email} </div> </li>
                  <li>  <div> {user.name} </div> </li>

                  <br />
                  <hr />  
                <li>   <Link to={"/dashboard"} className="w-full"> Dashborad      </Link></li> 
                <li>   <Link to={"/dashboard?tab=profile"} className="w-full"> profile      </Link></li> 
                <br />
                <hr />
              <li> <div onClick={handleLogout} >Log out</div>    </li>
  </ul>                

            </motion.div> }
                
                    </div>
                </>
            }
            </div>
        

    </nav>
  )
}
