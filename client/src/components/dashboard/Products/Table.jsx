import { Dot } from 'lucide-react';
import { FoodStore } from '../../../zustand/store'
import { useProductStore } from '../../../zustand/ProductStore';

export const Table = ({data,category}) => {
  const {FoodList} = FoodStore();
  const {loading} = useProductStore();
  
 

  return (
    <div>
        <div className=" border-x-4 border-y ">
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
        <th> status  </th>
        <th>price</th>
        <th > </th>
      </tr>
    </thead>
    <tbody>
        {data && [...data,...FoodList].filter((item) => (item.category === category || category === "")  ).map((item,index) => <tr className={` cursor-pointer  ${index % 2 === 1 && " bg-gray-100 "}  `}>
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
        <td className='text-sm'>
        {item.Available ?  <div className="badge bg-green-300"><Dot /> Available </div> : <div className="badge bg-red-300"> <Dot />Not available </div>}
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
