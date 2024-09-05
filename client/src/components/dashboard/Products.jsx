import {ListFilter , Settings , Plus , List , LayoutGrid} from "lucide-react"
import { useState } from "react";
import { Cards } from "./Products/Cards";
import { Table } from "./Products/Table";
 
export const Products = () => {
  
  const [menu,setMenu] = useState("All")
  const [cards,setCards] = useState(1)

  const handleImageChange = (e) => {
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

  return (
    <main className='w-full mx-auto  overflow-auto h-screen  '>
			<div className=" flex px-1  gap-32 items-center w-full h-[68px]  border-b-2 ">
					<h1 className="text-xl  font-bold  pl-2 "> Total Products : {"40"}  products </h1>
					<label className="input input-bordered p-2 w-[530px] flex items-center gap-2">
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
								<div className=" flex gap-4">
						<button className="btn btn-primary btn-outline text-xl  "> <ListFilter size={25} strokeWidth={2.5} /> Filter  </button>		
            <button className="btn  btn-outline text-xl   "> <Settings  size={23} strokeWidth={2.5} /> Modify  </button>		

					</div>

			</div>

      <section className="px-[100px] mt-10  flex flex-col gap-10  ">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold btn bg-white"> Products </h1>
            <button className="btn bg-blue-600 text-xl font-bold text-white hover:bg-blue-600 "
              onClick={()=>document.getElementById('my_modal_1').showModal()}
            >  <Plus size={23} /> New products  </button>
            <dialog id="my_modal_1" className=" w-[60%] h-[400px] rounded-xl ">
       <div className=" ">



         <div className="">
             <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-neutral   bottom-1 z-10 absolute right-1     ">Close</button>
            </form>
    </div>
  </div>
          </dialog>
        </div>
        <div className="flex justify-between items-center h-20 bg-gray-50">
          <div className="flex gap-4  ">
           
            {
              ["All","Published","Draft"].map((item) => 
                <button className={`btn ${item == menu && "btn-neutral"} `}
                  onClick={() => setMenu(item) }
                >  {item}  </button>
            )

            }
          </div>
          <div className="flex gap-4">
          <button className={`btn ${cards === 1 && "btn-neutral"}  `}
           onClick={() => setCards(1) } ><List   /></button> 
          <button className={`btn ${cards === 2 && "btn-neutral"}  `}
          onClick={() => setCards(2) }
          ><LayoutGrid /></button> 

          
          </div>
              
        </div>

               

              {cards === 2 ? <Cards /> : <Table />}            

              
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