import { parcel_icon } from "../../assets/admin_assets/assets"

export const List = () => {
  return (
    <div>
      <h1 className="text-xl font-bold ml-[50px] mt-7 ">Order Page</h1>
      <div className="flex  space-x-[20px]  h-[300px] border border-orange-600  ml-[50px] mr-[50px] mt-[50px] ">
      <div className="flex-1">
        <img src={parcel_icon} alt="" /> 
      </div>
       

      <div className="flex-1 mt-5 mb-2">
        <h1 className="text-xl font-bold">Greek salad * 2,Peri Peri Rolls *3</h1>
        <h2 className="text-xl font-bold mt-6 ">Avinash Kumar</h2>
        <p className="text-xl">GreatStack, Whitefield,<br/> Bangalore, Karnataka, 560066, 560066</p>
        <p className="text-xl mt-5 mb-2">9876543210</p>
      </div>
      <div className="flex-1  mt-5 mb-2 text-xl ">Items:2</div>
      <div className="flex-1  mt-5 mb-2 text-xl" >65$</div>
      <div className="flex-1  mt-5 mb-2 text-xl">
      <button type="button" class="bg-orange-500 text-white px-4 py-2 rounded-md focus:outline-none">
    Delivered
    <svg class="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
      </div>
      </div>

    </div>
  )
}
