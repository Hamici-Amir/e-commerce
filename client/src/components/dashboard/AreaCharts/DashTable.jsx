import { FaFacebook } from "react-icons/fa6";
import React from 'react'
import { Mail, MessageCircle, Phone, Trash } from "lucide-react";

export const DashTable = () => {
  return (
    <div className='bg-gray-100 w-[99%] border-2 mx-auto rounded-xl mt-5'>
                <h1 className='text-3xl p-4 bg-white  flex justify-between items-center font-bold text-black '> Contacts 
                        <button className='btn text-3xl font-bold text-black'> Edit </button>
                     </h1>
            <table className="table border-2">
    {/* head */}
    <thead className=''>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Cleint Name</th>
        <th>User Where Applied</th>
        <th> Applied Date  </th>
        <th > Contacts information </th>
        <th></th>
      </tr>
    </thead>
    <tbody className='bg-white'>
      {/* row 1 */}
      {[1,2,3,4,5,6,7,8,9,10].map(() => <tr className='bg-white cursor-pointer'>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-black ">Hart Hagerty</div>
            </div>
          </div>
        </td>
        <td>
                    <div className='flex items-center gap-3  text-xl font-semibold '>
                       <FaFacebook color="blue" size={24} />
                        FaceBook
                    </div>
                 </td>
        <td>
            16-09-2024
        </td>
        <th>
                <div className="flex gap-1 ">
                
                <button className="btn btn-outline" ><Phone   /></button>
                
                <button className="btn btn-outline " ><Mail color="blue"   /></button>
                </div>
        </th>
        <td>
                <button className=" bg-gray-100 shadow-lg  ">
                        <Trash  color="red" />
                </button>
        </td>
      </tr> )}
     
      {/* row 2 */}
      
    </tbody>
    
  </table>










    </div>
  )
}
