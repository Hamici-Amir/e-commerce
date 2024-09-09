import { SideFeatures ,SideLinks } from "../../constants"
import {Link,useLocation} from 'react-router-dom'
import { MdSpaceDashboard } from "react-icons/md";
import { FaHome ,FaShoppingCart } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { ShoppingBag, Users } from "lucide-react";
import { RiSendPlaneFill,RiArrowRightSLine } from "react-icons/ri";
import { CgProfile,CgLogOut } from "react-icons/cg";
import { useAuthStore } from "../../zustand/store";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";


const icons = [<MdSpaceDashboard size={33}  />,<LuListTodo size={33} />,<Users size={33} />,<ShoppingBag size={33} />,<CgProfile size={33} />,<FaHome size={33} />,<CgLogOut size={33} />,]



export const Sidebar = () => {
    const [toogle,setToogle] = useState(false)
    const {user} = useAuthStore()
    
    const location = useLocation()
  
  const [tab ,setTab] =useState("/") 
  useEffect(()=> {
      const urlParams =new URLSearchParams(location.search)
      const tabFromUrl = urlParams.get('tab')
      if(tabFromUrl){
        setTab(tabFromUrl) ;
      }
     

  },[location.search])



    return (
   
    <div 
        id="drawer-side"
        className="h-screen py-[20px] justify-between  bg-gray-100 sm:w-[50px] md:w-[80px] xl:w-[300px] flex border-r-black border-r-1 flex-col gap-10  "
    >  
            
            <div className=" gap-1  flex flex-col">
            <div className=" text-orange-600 mt-10 mx-auto lg:text-5xl    text-sm  font-extrabold   ">
                    Tomato. 
                    
            </div>
            <section className="mt-16 gap-1 flex flex-col">
                
            {SideFeatures.map((item,index) => (
                <>
                        <Link to={`/dashboard?tab=${SideLinks[index]}`} 
                            className="w-[95%] mx-auto"
                        key={index} >
                        <div className={`flex gap-[15px]  items-center py-[15px] px-[25px]  rounded-lg hover:bg-orange-600   hover:text-white ${tab == SideLinks[index] || index==0 && tab == '/' ? " bg-orange-600 text-white":"bg-white text-black"}  font-poppins  `}>
                            {icons[index]}
                      <p className="xl:inline-block hidden text-lg font-semibold"> {item} </p>
                     </div>  

                        </Link>
                </>

            ))}
        
        </section>  
            </div>
            
            <div className="dropdown dropdown-top"> 
            <div tabIndex={0} role="button"
                onClick={() => setToogle(!toogle)}
            className={`flex gap-[15px] w-[95%] mx-auto cursor-pointer items-center    rounded-lg    hover:text-white  font-poppins  `}>
            <div className={`flex gap-[25px]  h-[80px] items-center  font-extrabold    "bg-white text-black  `}>
        <div className="w-[50px] h-[50px] rounded-full ml-3   "> { user.profilePic &&  <img src={user.profilePic} className=" rounded-full   " alt=""   /> } </div>
        <div className="lg:flex items-center gap-[5px]  hidden  flex-grow">

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
 


)
}
