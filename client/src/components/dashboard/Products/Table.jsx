import React from 'react'
import { FoodStore } from '../../../zustand/store'

export const Table = () => {
  const {FoodList} = FoodStore();

  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Descrption  </th>
        <th>price</th>
        <th > </th>
      </tr>
    </thead>
    <tbody>
        {FoodList.map((item,index) => <tr className={` cursor-pointer  ${index % 2 === 1 && " bg-gray-100 "}  `}>
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
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold"> {item.name}  </div>
              <div className="text-sm opacity-50"> {item.category} </div>
            </div>
          </div>
        </td>
        <td>
            {item.description.substr(item.description.length/2)}
          <br />
          <span className="badge badge-ghost badge-sm">  {item.description.substr(item.description.length/2,item.description.length)}  </span>
        </td>
        <td> {item.price}  </td>
        <th>
          <button className="btn font-bold btn-ghost btn-xs">details</button>
            

        </th>
      </tr>
      )}
     
   
    </tbody>
   
   
  </table>
</div>







    </div>
  )
}
