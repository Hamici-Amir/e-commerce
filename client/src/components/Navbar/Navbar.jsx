import { Link } from "react-router-dom"
import { NavFeatures } from "../../constants"
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { asserts } from "../../constants";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [toogle, setToogle] = useState(true)
    return (
    <nav className="  h-20 w-full sm:px-[100px]  px-[30px] flex justify-between items-center ">
 
            <div className=" text-orange-600   lg:text-5xl text-2xl  font-extrabold   ">
                    Tomato. 
            </div>
            <div className=" hidden  items-center  gap-3 xl:flex">
            {NavFeatures.map((item,index) => (
                <Link   key={index} to={"/"}>
                        <div className={` px-3  transition-transform ${ menu == item ? "underline":""}  text-2xl text-[#49557e] `} 
                            onClick={() => setMenu(item)}
                        >
                            {item}
                        </div>
                </Link>

            ) )}
            </div>

            <div className=" w-[132px]  flex gap-4 items-center text-[#49557e] ">
            <CiSearch  size={ toogle ? 80:40}   className=" cursor-pointer " />
            {
                       ! toogle && (<>
                                <IoIosNotifications size={40} className="  cursor-pointer " />
                                <button class=" cursor-pointer  text-white  font-bold  rounded-full">
                                        <img src="https://lh3.googleusercontent.com/a/ACg8ocIB0yJT_ZshZKJZtvUQpPTRoZy2VjVyZ8w0cnYo6nvhTyHy-w=s288-c-no" alt="" width={40} className=" rounded-full"  />
                                </button>
                        </>)
            }
            {
                toogle && 
                <button class="bg-transparent hover:bg-orange-600  text-[#49557e] font-bold hover:text-white py-2 px-2.5 w-40 border border-orange-600  hover:border-transparent rounded-full "
                        onClick={() => setToogle(!toogle)}
                >
                sign-in
</button>
            }
            </div>
        

    </nav>
  )
}
