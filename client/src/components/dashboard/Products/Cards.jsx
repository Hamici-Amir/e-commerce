import {DollarSign, DollarSignIcon, Dot} from "lucide-react" 
import { FoodStore } from "../../../zustand/store";



export const Cards = ({data}) => {

   const {FoodList} = FoodStore() ;

  return (
    <div className="grid  grid-cols-3  gap-4   ">
        {FoodList.map((img,item) =>  <div className="rounded-lg card bg-base-100 w-96 shadow-xl">
  <figure>
    <img 
      src={img.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title ">
      {item %3 === 2 ?  <div className="badge bg-green-300"><Dot /> Available </div> : <div className="badge bg-red-300"> <Dot />Not available </div>}
    </h2>

    <p className="mt-[10px]">If a dog chews shoes whose shoes does he choose?</p>
   
    <div className="card-actions  justify-end  ">
         <div className="flex gap-10 items-center ">
         
         <p className="flex text-xl items-center">
         49.00 دج 
          
          </p>

         
         </div>

       
         
         
        
    </div>
  </div>
</div> )}
           




    </div>
  )
}
