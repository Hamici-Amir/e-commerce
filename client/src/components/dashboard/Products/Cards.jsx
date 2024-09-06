import {DollarSign, DollarSignIcon, Dot} from "lucide-react" 
import { FoodStore } from "../../../zustand/store";



export const Cards = ({data}) => {

   const {FoodList} = FoodStore() ;

  return (
    <div className="grid  grid-cols-3  gap-4  bg-gray-50  rounded-lg  ">
        {FoodList.map((food,item) =>  <div className="rounded-lg cursor-pointer hover:w-[400px]   hover:transition-all hover:duration-500  card bg-base-100 w-96 shadow-xl">
  
    <img 
      src={food.image}
      alt="Shoes" />
  
  <div className="card-body">
    <h2 className="card-title ">
      {item %3 === 2 ?  <div className="badge bg-green-300"><Dot /> Available </div> : <div className="badge bg-red-300"> <Dot />Not available </div>}
    </h2>

    <p className="mt-[10px]">If a dog chews shoes whose shoes does he choose?</p>
   
    <div className="card-actions  justify-end  ">
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
