import {DollarSign, DollarSignIcon, Dot} from "lucide-react" 
import { FoodStore } from "../../../zustand/store";
import { useProductStore } from "../../../zustand/ProductStore";
import { useState } from "react";



export const Cards = ({data,category}) => {

   const {FoodList} = FoodStore() ;


   const {loading} = useProductStore();


  

  return (
    <div className="grid place-content-center mx-auto md:grid-cols-2 grid-cols-1 xl:grid-cols-3  sm:gap-4 gap-2  bg-gray-50  rounded-lg  ">
        {data && [...data,...FoodList].filter((item) => (item.category === category || category === "")  ).map((food,item) =>  <div className="rounded-lg cursor-pointer hover:w-[400px]   hover:transition-all hover:duration-500  card bg-base-100 w-96 shadow-xl">

    <img 
      src={food.image}
      alt="Shoes" />
  
  <div className="card-body">

    <h2 className="card-title flex gap-4 items-center  ">
      {food.name} <span className="text-sm opacity-50"> {food.category} </span>
    </h2>
        <h1></h1>
    <p className="mt-[10px]"> {food.description} </p>
    
    <div className="card-actions  justify-between  ">
    {food.Available ?  <div className="badge bg-green-300"><Dot /> Available </div> : <div className="badge bg-red-300"> <Dot />Not available </div>}

         <div className="flex gap-10 items-center ">

         <p className="flex text-xl items-center">
         {food.price} دج 
          
          </p>

         
         </div>

       
         
         
        
    </div>
  </div>
</div> )}
           
        
      



    </div>
  )
}
