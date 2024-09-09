import {ListFilter , Settings , Plus , List , LayoutGrid} from "lucide-react"
import { useEffect, useState } from "react";
import { Cards } from "./Products/Cards";
import { Table } from "./Products/Table";
import {CreateProductForm} from "./Products/CreateProductForm";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL =  "http://localhost:5000/api/posts";
const categories = ["Salad","Rolls","Deserts","Sandwich","Cake","Pure Veg","Pasta","Noodles"];




export const Products = () => {
  
  const [value,setValue] = useState("")
  const [menu,setMenu] = useState("All")
  const [cards,setCards] = useState(2)
  const [loading,setLoading] = useState(false)

  const query = menu === "All" ? "" : menu == "Reserved"?`reserved=true`:"reserved=false" 
  const query_1 = value === "" ? "" :`category=${value}` 

  const [data,setData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {

      try {
        const  response =   await axios.get(`${API_URL}?${query_1}&${query}`); 
        setData(response.data.products);
      } catch (error) {
       // toast.error(`${error.message}`)
      } finally {

      }
    

   }
fetchData();

  },[data,menu]);



  
  return (
    <main className='w-full mx-auto  overflow-auto h-screen  '>
			
      <div className=" flex px-1  sm:gap-32 gap-3 items-center w-full h-[68px] xl:justify-between  border-b-2 ">
					<h1 className="sm:text-xl  text-xs sm:inline-block hidden  font-bold  pl-2 ">  Products:{data.length}  </h1>
					<label className="input input-bordered p-2 sm:w-[530px] w-[200px] flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-8 w-8 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
								<div className=" w-60  rounded  ">
                <select className="select select-primary sm:w-full w-[150px] sm:text-xl text-black sm:max-w-xs max-w-28"
                  onChange={(v) => setValue(v.target.value)}
                >
  <option  selected value={""} >  categories </option>
  {categories.map((category) => (
							<option key={category} value={category}>
								{category}
							</option>))}
</select>

					</div>

			</div>

      <section className="xl:px-[100px] sm:px-[70px] mt-10  flex flex-col gap-10  ">
        <div className="flex  justify-between items-center">
            <h1 className="sm:text-2xl text-xl font-bold btn bg-white"> Products  </h1>
            <button className="btn   bg-blue-600 sm:text-xl  font-bold text-white hover:bg-blue-600 "
              onClick={()=>document.getElementById('my_modal_1').showModal()}
            >  <Plus size={23} /> New products  </button>
            <dialog id="my_modal_1" className=" sm:w-[33%] w-full  h-[635px]  rounded-xl ">
       <div className=" ">
          <CreateProductForm data={data} setData={setData}  />


            
    
  </div>
          </dialog>
        </div>

        <div className="flex justify-between items-center h-20 bg-gray-50">
          <div className="flex sm:gap-4 gap-1 ">
           
            {
              ["All","Reserved","Draft"].map((item) => 
                <button className={`btn ${item == menu && " btn-neutral"} `}
                  onClick={() => {
                    setMenu(item)
                  } }
                >  {item}  </button>
            )

            }
          </div>
          <div className="flex sm:gap-4">
          <button className={`btn ${cards === 1 && "btn-neutral"} sm:inline hidden `}
           onClick={() => setCards(1) } > <List /> </button> 
          <button className={`btn ${cards === 2 && "btn-neutral"}  `}
          onClick={() => setCards(2) }
          ><LayoutGrid /></button> 

          
          </div>
              
        </div>

               {loading && <span className="loading loading-spinner loading-lg"></span>
               }
               {cards === 2 ? <Cards data={data} category={value}  /> : <Table data={data}  category={value} />}              
              <button className="btn btn-info btn-wide mx-auto"> see more </button> 
     
      </section>


    </main>	
  )
}

/*
  <input type="file" 
      className=" w-20 h-20  "

        onChange={handleImageChange}
      />
*/



/*
 */
