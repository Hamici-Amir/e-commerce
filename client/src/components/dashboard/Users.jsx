import { useEffect, useState } from "react"
import axios from "axios";
import toast from "react-hot-toast";


const API_URL =  "http://localhost:5000/api/users";



export const Users = () => {
  
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
 
 
 
 
  return (
    <main className="h-screen overflow-auto ">
      
          <div className=" flex justify-between mt-12 sm:px-20  px-[2px] ">
                <h1 className=" text-3xl text-black  ">  List   <span className="text-lg sm:ml-4 ml-1  text-gray-700 border "> {data?.length} users </span>  </h1>
          </div> 

         <section>  
            <div className="navbar bg-gray  sm:w-11/12 w-full sm:mx-auto rounded-2xl mt-1 ">
  <div className="flex-1 ">
    <a className="btn  sm:text-lg text-black "> <span className="md:flex hidden">Filter By :</span> {filter === 1 ? "created first":"Last login" } </a>
  </div>
  <input type="text" placeholder="Search" className="input input-bordered w-full md:max-w-xs max-w-[180px]" 
      value={search}
      onChange={(e) => {
        
        setSearch(e.target.value)
        
      }}
  />
  <div className="flex-none ">
    <ul className="menu menu-horizontal px-1">
      
      <li>
        <details>
          <summary className=" sm:text-xl text-lg btn-neutral btn  ">  Filter  </summary>
          <ul className=" rounded-t-none gap-1 flex flex-col">
           {["created first","Last login"].map((item,index) => <li className="text-xl">   <button className="btn btn-outline z-10" 
              onClick={() => setFilter(index ===1 ? -1:1)}> {item} </button>  </li>)} 
          </ul>
        </details>
      </li>
    </ul>
  </div>
             </div>

             <div className="overflow-x-auto w-11/12 mx-auto border rounded-xl">
  <table className={`table sm:${data.length ===0 ? "hidden" : "inline-block"} hidden `}>
    {/* head */}
    <thead className="bg-gray-100  ">
      <tr>
        <th>
          
        </th>
        <th className="text-lg">
          Name
          </th>
        <th className="text-lg">Email adress</th>
        <th className="text-lg"> Role </th>
        <th> Last active </th>
      </tr>
    </thead>
    <tbody>
     {data?.map((user,index) => <tr className={`  ${index %2 === 1 && "bg-gray-100"}  `} >
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-circle h-12 w-12">
                <img
                  src={user.profilePic}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold"> {user.name} </div>
            </div>
          </div>
        </td>
        <td className="font-bold">
         {user.email}
        </td>
        <td>  {user.isAdmin ?   <span className="badge badge-success">Admin</span>:<span className="badge badge-info">user</span>}  </td>
        <td>
        {user.lastLogin.substring(0,10) }
        </td>
      </tr>)}
     
      
    
    </tbody>
    {/* foot */}
  
    
  </table>
  
  {data.length === 0 && <div role="alert" className="alert w-full alert-info">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
  <span>Warning: No users fouded</span>
</div>}
</div>
    <div className=" sm:hidden grid grid-cols-1 gap-2 ">
      {
        [1,2,3,4,5,6,7,8,9].map((user,index) => (
          <>
          <div className="bg-white space-y-3 p-4 rounded-lg flex justify-between mx-auto w-[90%] shadow">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-circle h-12 w-12">
                <img
                  src={user.profilePic}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold"> Hatem_th </div>
              <div className="font-semibold text-gray-500">  hatemtaleb@gmail.com </div>
            </div>
          </div>          

            <div className="flex flex-col  gap-2">
            {index %2 ==1 ?   <span className="badge badge-success">Admin</span>:<span className="badge badge-info">user</span>}             <p className="text-gray-600"> 2024-09-08 </p> 
            </div>
            
          </div>

          
        </>
        ))
      }

    </div>

         </section>






    </main>
  )
}
