import { useState } from 'react';
import { ExploreMenu, FoodDisplay } from '../components/ExploreMenu';

const Home = () => {

      const [category,setCategory] = useState("All") ;






  return (
    <>
   
    <div className="h-[800px] mt-10 bg-cover 
          w-full flex flex-col gap-4 mx-auto rounded-[20px] Bg">
              
      <h1 className=" text-white font-semibold text-7xl mt-[160px] px-[80px] ">  Order your   </h1>
      <span className="text-white font-semibold text-7xl  px-[80px]" >  favourite food here </span>
      <p className="px-[80px] text-white text-xl mt-5">
        Choose from a diverse menu , featuring a delectable array of dishes rafted with the finest 
        ingredeints 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus error dicta animi molestias unde ipsum at. Aliquam, sed necessitatibus minima harum iste, repellat labore sapiente suscipit excepturi magnam similique doloribus?

      </p>
      <div className="px-[78px]" >
      <a  class="bg-white btn    btn-outline    text-[#49557e] w-40  mt-2  font-bold   py-4  rounded-[20px] "
            href='#p'
      >
      View Menu
    </a>
      </div>
      
    </div>
    <ExploreMenu category={category} setCategory={setCategory }/>
      <hr className='py-2 w-[80%]   mx-auto ' />
    <FoodDisplay category={category} />
    
    </>
  )
}

export default Home