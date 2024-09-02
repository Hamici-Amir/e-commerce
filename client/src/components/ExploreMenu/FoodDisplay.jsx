import { FoodStore } from "../../zustand/store"

var Rating = Math.floor(3.55)

export const FoodDisplay = () => {
    const {FoodList} = FoodStore();
  
    return (
    <div className="px-[160px]  
          w-full flex flex-col gap-4 ">
        <h1 className="text-4xl font-semibold" >
        Top dishes near you 
            </h1> 
                <div className="gap-16 cursor-pointer col-span-4 mx-auto justify-between  grid grid-cols-4 grid-flow-row-dense   ">
                {
                    FoodList.map((item) => (


<div className="   card  w-[350px]  shadow-xl">
  <figure>
    <img
      src={item.image}   
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title flex justify-between">  {item.name} 
                         <div className="rating">
                        {[1,2,3,4,5].map((star) => (
  <input type="radio" name={`rating-${item._id}`}  value={star} checked={ star == Rating } defaultValue={2} className="mask mask-star-2 bg-orange-600" />
                        ))}
  
</div>
    </h2>
    <p >{item.description}</p>
      <span className="font-bold text-xl text-tomato">{item.price}$  </span>                 
  </div>
</div>



                    ))

                }
                </div>
               
            

    </div>
  )
}
