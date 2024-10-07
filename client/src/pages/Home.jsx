import { useState } from 'react';
import { ExploreMenu, FoodDisplay } from '../components/ExploreMenu';
import landingImage from "../assets/hero.png";
import appDownloadImage from "../assets/landing.png";
import { useNavigate } from "react-router-dom";
import {SearchBar} from "../components/SearchBar";


const Home = () => {

      const [category,setCategory] = useState("All") ;

      const navigate = useNavigate();

      const handleSearchSubmit = (searchFormValues) => {
        navigate({
          pathname: `/search/${searchFormValues.searchQuery}`,
        });
      };




  return (
      <>
     <div className="flex flex-col gap-12 ">
  
      <div className="grid md:grid-cols-1 gap-5  relative ">
        <img src={landingImage}   />
       
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
   
    <ExploreMenu category={category} setCategory={setCategory }/>
      <hr className='py-2 w-[80%]   mx-auto ' />
    <FoodDisplay category={category} />
    
    </>
  )
}

export default Home



/*



*/