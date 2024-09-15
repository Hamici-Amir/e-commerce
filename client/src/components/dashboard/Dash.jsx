
import { Calendar ,RefreshCw,Download, Users2, MoveUp, Package, UsersRound, MoveDown, ShoppingBasketIcon  } from "lucide-react";
import { useEffect, useState } from "react" ;
import { useAuthStore } from "../../zustand/store";
import AreaChart from "./AreaCharts/AreaChart"




export const Dash = () => {
  const {user} = useAuthStore() ;


		
  return (
    <div className="overflow-auto h-screen">

  

   
    <div className="flex justify-between m-5">
      <a className="btn  sm:text-lg text-black "> 
      <Calendar  /> 
        <span className="md:flex hidden gap-2">Last Updated : April 18,2024 </span>
        <RefreshCw />
         </a>
        
    </div>

      <div className="w-[99%] gap-2 mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  ">
            <div className=" border-2   rounded-lg  ">
                        <main className="flex gap-4 items-center mt-2 px-8 py-4"> 
                          <Package  size={60} className="bg-gray-50 rounded-xl   " color="blue" />
                          <h1>
                              <h2 className="text-2xl text-black font-semibold "> 
                              Total Products  </h2>
                              <span className="font-bold text-xl" > 32 </span>
                              </h1>
                       </main>
                       
                  <br /> <hr />
                      <div className="bg-gray-100 h-12 px-4 py-3 flex justify-between">
                      <p className="flex text-[#00ff00] text-xl font-bold ">
                      <MoveUp  color="#00ff00" size={25} />
                        10.5%
                      </p>

                      <span className="text-xl text-black font-semibold">From last Period </span>
                      </div>
            </div>
            <div className=" border-2   rounded-lg  ">
                        <main className="flex gap-4 items-center mt-2 px-8 py-4"> 
                          <ShoppingBasketIcon  size={60} className="bg-gray-50 rounded-xl   " color="gold" />
                          <h1>
                              <h2 className="text-2xl text-black font-semibold "> 
                              Total Orders </h2>
                              <span className="font-bold text-xl" > 17 </span>
                              </h1>
                       </main>
                       
                  <br /> <hr />
                      <div className="bg-gray-100 h-12 px-4 py-3 flex justify-between">
                      <p className="flex text-[#00ff00] text-xl font-bold ">
                      <MoveUp  color="#00ff00" size={25} />
                        3.4%
                      </p>

                      <span className="text-xl text-black font-semibold">From last Period </span>
                      </div>
            </div>
            <div className=" border-2   rounded-lg  ">
                        <main className="flex gap-4 items-center mt-2 px-8 py-4"> 
                          <UsersRound   size={60} className="bg-gray-50 rounded-xl   " color="#ff0000" />
                          <h1>
                              <h2 className="text-2xl text-black font-semibold "> 
                              Users </h2>
                              <span className="font-bold text-xl" > 20 </span>
                              </h1>
                       </main>
                       
                  <br /> <hr />
                      <div className="bg-gray-100 h-12 px-4 py-3 flex justify-between">
                      <p className="flex text-[#ff0000] text-xl font-bold ">
                      <MoveDown  color="#ff0000" size={25} />
                        10.5%
                      </p>

                      <span className="text-xl text-black font-semibold">From last Period </span>
                      </div>
            </div>
      </div>


     

    <div className="xl:flex xl:gap-1 mt-5 mx-auto w-[99%]">
      <div className="border-2    rounded-xl bg-gray-100 w-full mx-auto   xl:w-[73%] ">
      <AreaChart />
      </div>
      <div className="xl:w-[25%] mt-1 sm:mt-0 bg-gray-100  rounded-lg border-2 mx-auto">
          <h1 className="text-black text-2xl   px-4 pt-4 ">  Products Summary </h1>
           <h2 className="flex items-baseline p-4 pt-0">   <span className="text-7xl text-black font-bold  "> 67 </span> <p className="text-gray-600 text-xl">Products</p>  </h2>
          <div className="w-[90%] mx-auto bg-red-600 flex mt-5 h-10">
                <div className={` ${true ? "w-[50%]":""} bg-[#475be8] `}></div>
                <div className={` ${true ? "w-[50%]":""} bg-cyan-400`}></div>
          </div>
            <div className=" w-8 h-8 bg-[#475be8]  mt-4 ml-[5%] ">
            </div>
            <h1 className="text-xl px-4"> Products on Stock : {"45"}  </h1>
            <div className=" w-8 h-8 bg-cyan-400  mt-4 ml-[5%] ">
            </div>
            <h1 className="text-xl px-4"> Products in order : {"22"}  </h1>
            <div>

            </div>

      </div>

    </div>

  
</div>

    
    
  )
}