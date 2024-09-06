import {Package ,TrendingUp ,TriangleAlert ,DollarSign } from "lucide-react" ;

const StatusProd = [
        {Title : "Totale products " ,
         icon : <Package />,
         totale : 0 ,  
        },
        {Title : "Top selling " ,
          icon : <TrendingUp />,
          totale : 0 ,  
         },
         {Title : "Low stock" ,
          icon : <TriangleAlert /> ,
          totale : 0 ,  
         },
         {Title : "Totale revenu " ,
          icon : <DollarSign color="#f00000" />,
          totale : 0 ,  
         }
]



export const Products = () => {

/*  const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
  //				setNewProduct({ ...newProduct, image: reader.result });
          console.log(reader.result);
};

			reader.readAsDataURL(file); // base64
		}

	};
 */ 
  
  
  return (
    <div>
    
    <div className=" w-full grid grid-cols-4   place-items-center  py-[100px]  px-[100px]  ">
        {StatusProd.map((item,index)=>(
            <div className="w-[150px] gap-4 border-4 border-black-500 rounded-lg ">
              <h1 className="">{item.icon} {item.Title}</h1>
              <p>{item.totale}</p>
              
           
      </div>
        ))}
    </div>

    

  </div>
  
  )
}



















/*
<input type="file" 
      onChange={handleImageChange}
    />    
    */
