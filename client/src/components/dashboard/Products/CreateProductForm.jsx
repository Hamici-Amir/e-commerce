import { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Upload, Loader, X } from "lucide-react";
import axios from "axios";

const categories = ["Salad","Rolls","Deserts","Sandwich","Cake","Pure Veg","Pasta","Noodles"];
const API_URL =  "http://localhost:5000/api/posts";


export const CreateProductForm = ({data,setData}) => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		description: "",
		price: "",
		category: "",
		image: "",
	});
	
	const [loading,setLoading] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		
		try {
			const res = await axios.post(`${API_URL}/create`, newProduct);
			//		await createProduct(newProduct,setData,data);
			setData([...data,res.data.post]);
			setNewProduct({ name: "", description: "", price: "", category: "", image: "" });
		} catch(err) {
			console.log("error creating a product",err.message);
		} finally{
			setLoading(false);
		}
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setNewProduct({ ...newProduct, image: reader.result });
			};
				
			reader.readAsDataURL(file); // base64
		}
	};

	return (
		<motion.div
			className='bg-white  rounded-lg p-8 mb-8 max-w-xl mx-auto'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
				 <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-outline rouded-xl  top-0 z-10 absolute right-[2px]      ">  <X  />  </button>
            </form> 
			<h2 className='text-2xl font-semibold mb-6 text-orange-600'>Create New Product</h2>

				<form  onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor='name' className='block text-sm font-medium text-black'>
						Product Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						value={newProduct.name}
						onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						className='mt-1 block w-full bg-gray-100 border border-orange-600 rounded-md shadow-sm py-2
						 px-3 text-black focus:outline-none focus:ring-2
						focus:ring-orange-500 focus:border-orange-500'
						required
					/>
				</div>

				<div>
					<label htmlFor='description' className='block text-sm font-bold text-black '>
						Description
					</label>
					<textarea
						id='description'
						name='description'
						value={newProduct.description}
						onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
						rows='3'
						className='mt-1 block w-full bg-gray-100 border border-orange-600 rounded-md shadow-sm
						 py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 
						 focus:border-orange-500'
						required
					/>
				</div>

				<div>
					<label htmlFor='price' className='block text-sm font-medium text-black'>
						Price
					</label>
					<input
						type='number'
						id='price'
						name='price'
						value={newProduct.price}
						onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						step='0.01'
						className='mt-1 block w-full bg-gray-100 border border-orange-600 rounded-md shadow-sm
						 py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 
						 focus:border-orange-500'
						required
					/>
				</div>

				<div>
					<label htmlFor='category' className='block text-sm font-medium text-black'>
						Category
					</label>
					<select
						id='category'
						name='category'
						value={newProduct.category}
						onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
						className='mt-1 block w-full bg-gray-100 border border-orange-600 rounded-md shadow-sm
						 py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 
						 focus:border-orange-500'
						required
					>
						<option value=''>Select a category</option>
						{categories.map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
				</div>

				<div className='mt-1 flex items-center'>
					<input type='file' id='image' className='sr-only' accept='image/*' onChange={handleImageChange} />
					<label
						htmlFor='image'
						className='cursor-pointer bg-orange-600 py-2 px-3 border border-orange-600 rounded-md shadow-sm text-lg  leading-4 font-medium   text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
					>
						<Upload className='h-5 w-5 inline-block mr-2' />
						Upload Image
					</label>
					{newProduct.image && <span className='ml-3 text-sm text-gray-400'>Image uploaded </span>}
				</div>
				<form action="dialog">
				<button
					type='submit'
					className='w-full flex justify-center py-2 px-4 border rounded-md 
					 hover:bg-blue-600 font-medium text-white bg-blue-600 text-2xl
                        btn 
                    '
					disabled={loading}
				>
					{loading ? (
						<>
							<Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
							Loading...
						</>
					) : (
						<>
							<PlusCircle className='mr-2 h-5 w-5' />
							Create Product
						</>
					)}
				</button>
				</form>
				</form>
			
		</motion.div>
	);
};
