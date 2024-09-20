
import React from 'react'

import { menu_list } from '../../assets/frontend_assets/assets'




export const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='h-[400px] mt-10 
          w-[80%] flex flex-col gap-4 mx-auto  '>
        <h1 className='text-3xl font-semibold  '>Explore our menu </h1>
        <p className='max-w-2xl '>Choose from diverse menu  featuring  a delectable array of dishes .
             Our mission is to satisfy your cravings and elevate your dining experience , one delicious meal at a time .   </p>

        <div className='flex justify-between items-center gap-8 ml-5 max-w-full overflow-x-auto hide-scrollbar '>
            {menu_list.map((item,index) => {
                return(
                    <div 
                    onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}
                    key={index} 
                    className='hide-scrollbar cursor-pointer'
                    >
                         <img 
                         className={  `w-80 min-w-20 rounded duration-75  ${category===item.menu_name? "border-[5px] border-tomato rounded-full p-1 ": "" }`}
                         src ={item.menu_image} 
                         alt ="" 
                        />   
                         <p className = 'mt-3 text-custom-gray text-xl cursor-pointer'>{item.menu_name}</p>

                    </div>    
                 
                )
                
            })}
        </div>
    <hr className='ml-3 h-1 bg-white border-none ' />       
    </div>
  )
}
