import { useState } from "react"
import { useAuthStore } from "../../zustand/store";
import { Link } from "react-router-dom";

const ProfileFeatures =  [{
  title:"Account Setting",
  Bio:" Default about your Pesonnal information "
},{
  title:"Notification",
  Bio:" Default  information  about your Notiofiaction   "
},{
  title:"Membership Plan",
  Bio:" Default about your Pesonnal information "
},{
  title:"Password & Security",
  Bio:" you can change your  password   "
}]

const url = "https://res.cloudinary.com/dbctizaae/image/upload/v1725395214/products/ah8iwhpfzwf2krpfldeo.png"

export const Profile = () => {
  const [menu,setMenu] = useState("Account Setting");
  const {user} = useAuthStore();
  return (
    <div className="h-screen bg-gray-50 ">
      <div className="w-full bg-white  ">
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"> Profile  </a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      
      
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={!user.profilePic ? user.profilePic : url}  />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li> <Link to={"/"}>Home page </Link>    </li>
        <li> <Link to={"/dashboard?tab=dash"}> dashboard </Link>  </li>
      </ul>
    </div>
  </div>
</div>
      </div>


      <div className=" flex mt-16 shadow-md ">
        <div className=" w-1/3 flex flex-col gap-4 ">
          {ProfileFeatures.map((item,index) => (
            <div  
                key={index}
                className={` ${menu == item.title && " border-4 border-orange-600 "} gap-2 w-[90%] mx-auto flex flex-col justify-center cursor-pointer hover:border-4    bg-white h-[110px]   rounded-lg shadow-lg items-center  `}

              onClick={() => setMenu(item.title)}
> 
              <h1 className="text-3xl font-bold px-[3px] mx-auto">  {item.title}  </h1>
                <p> {item.Bio} </p>


            </div>
          ))}

        </div>
        
        <div className=" w-2/3  flex flex-col gap-4 ">
            <div className=" mx-auto flex justify-between items-center px-10 bg-white h-[130px] rounded-lg border-gray-100  border-[1px] shadow-xl w-[95%]  ">
              <div className="flex gap-4 items-center">
              <img src={url} className=" cursor-pointer  " alt="" width={80} />
              <span className="text-2xl font-bold"> Upload a New Photo
                  <h1 className="text-sm font-normal"> Profile-pic.jpg </h1>

              </span>
              </div>
            
            <button className="btn btn-outline text-orange-600 hover:bg-orange-600 text-2xl"> Update  </button>
            </div>
            
            <div className=" mx-auto w-[95%] h-[500px] bg-white ">
              <h1  className="text-4xl px-5 py-10 font-bold text-black"> Change your Information here </h1>
              <section className=" flex justify-between flex-col w-[95%] mx-auto gap-8 ">
                <div className="flex gap-4 w-full justify-between ">
                <div className=" ">
                <span className="text-orange-600 max-w-lg mx-auto w-full font-extrabold"> your name * </span> 
              <input type="text" placeholder="your name" className="input  mx-auto  input-bordered w-full max-w-lg  "
                value={user.name}
                />
                </div>
              <div>
              <span className="text-orange-600 max-w-lg mx-auto w-full font-extrabold"> your email  </span> 

               <input type="text" disabled placeholder="your name" className=" font-bold mx-auto  input input-bordered w-full max-w-lg  "
                value={user.email}
              />
              </div>

          



          
                </div>
              
      
                <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Add your Adress" />
  <span className="badge badge-info">Optional</span>
</label>
<div className="flex gap-4 w-full justify-between ">
                <div className=" ">
                <span className="text-orange-600 max-w-lg mx-auto w-full font-extrabold"> your City  </span> 
              <input type="text" placeholder="your name" className="input  mx-auto  input-bordered w-full max-w-lg  "
                value={user.name}
                />
                </div>
              <div>
              <span className="text-orange-600 max-w-lg mx-auto w-full font-extrabold">  Code security  </span> 

               <input type="text" placeholder="your name" className="  mx-auto  input input-bordered w-full max-w-lg  "
                value={"800055"}
              />
              </div>

          



          
                </div>


              <button className="btn w-full  mx-auto  btn-outline hover:bg-orange-600 border-orange-600"> Update </button>
              </section>
             

            </div>
            
        </div>
  
      </div>  







    </div>
  )
}
