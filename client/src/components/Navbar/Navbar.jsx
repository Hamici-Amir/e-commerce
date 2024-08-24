import { Link } from "react-router-dom"
import { NavFeatures } from "../../constants"
import { useState } from "react";

import { IoIosNotifications } from "react-icons/io";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [toogle, setToogle] = useState(true)
  


    return (
    <nav className="  h-20 w-full sm:px-[100px]  border-b border-black px-[30px] flex justify-between items-center ">
 
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
                <Link   key={index} to={"/"}>
                        <div className={`    transition-transform ${ menu == item ? "underline":""}  text-xl text-[#49557e] `} 
                            onClick={() => setMenu(item)}
                        >
                            {item}
                        </div>
                </Link>

            ) )}
                                
            {
                toogle && 
                
                <Link class="bg-transparent hover:bg-orange-600   text-[#49557e] font-bold hover:text-white py-2 px-2.5 w-28 border border-orange-600  hover:border-transparent rounded-full "
                        to={"/sign-in"}                 
                 > 
                                <span className=" mx-auto px-4" >
                                sign-in

                                </span>
                
                </Link>
            }
            </div>
        

    </nav>
  )
}
