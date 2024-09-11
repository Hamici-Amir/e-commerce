import { parcel_icon } from "../../assets/admin_assets/assets"
import { useEffect, useState } from "react"
import axios from "axios";
import toast from "react-hot-toast";
import { LayoutGrid} from "lucide-react"
import{CardGrid} from "./CardGrid"
import {Clock} from "lucide-react"



 




export const List = () => {

  const [data,setData] = useState([]);
  const [filter,setFilter] = useState(1);
  const [search,setSearch] = useState("");

  

  useEffect(() => {

    const fetchUsers = async() => {
      try {
        const  response =   await axios.get(`${API_URL}?sort=${filter}&searchTerm=${search}`); 
        setData(response.data.users);
      } catch (error) {
        toast.error(`${error.message}`)
      }
    }
  
    fetchUsers();

   },[filter,search])
 
     
  const [value,setValue] = useState("")
  const [menu,setMenu] = useState("All")
  const [cards,setCards] = useState(2)

  const query = menu === "All" ? "" : menu == "Reserved"?`reserved=true`:"reserved=false" 
  const query_1 = value === "" ? "" :`category=${value}` 
  const query_2 = search === "" ? "" : `searchTerm=${search}`

 







   useEffect(() => {
    const fetchData = async () => {

      try {
        const  response =   await axios.get(`${API_URL}?${query_1}&${query}&${query_2}`); 
        setData(response.data.products);
      } catch (error) {
       // toast.error(`${error.message}`)
      } finally {

      }
    

   }
fetchData();

  },[data,menu]);




  return (
    <main className="h-screen overflow-hidden">
      <div className="flex  justify-between mt-12 sm:px-20  px-[2px] ">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Order list </h1>
          <p className="text-[15px] text-gray-500">June 10,2024</p>
        </div>
        <div>
        <input type="text" placeholder="Search" className="input input-bordered w-full md:max-w-xs max-w-[180px]" 
      value={search}
      onChange={(e) => {
        
        setSearch(e.target.value)
        
      }}
  />
        </div>


      </div>

      <div className="flex justify-between mt-12 sm:px-20  px-[2px] items-center h-20 bg-gray-50">
          <div className="flex sm:gap-4 gap-1 ">
           
            {
              ["All","Last item",].map((item) => 
                <button className={`btn ${item == menu && " btn-neutral"} `}
                  onClick={() => {
                    setMenu(item)
                  } }
                >  {item}  </button>
            )

            }
          </div>
      </div>    
         
      <CardGrid /> 

    </main>
  )
}
