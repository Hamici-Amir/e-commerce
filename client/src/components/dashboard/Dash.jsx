import { motion } from "framer-motion";
import {Package} from "lucide-react"

export const Dash = () => {
  return (
    <div>
       <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">

      
<motion.div
			className=' bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700'
			whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
		>
			<div className='px-4 py-5 sm:p-6'>
				<span className='flex items-center text-sm font-medium text-gray-400'>
					<Package   size={20} className='mr-2' color="#3700ff"  />
					{"ffff"}
				</span>
				<p className='mt-1 text-3xl font-semibold text-gray-100'>12</p>
			</div>
		</motion.div>
    <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700'
			whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
		>
			<div className='px-4 py-5 sm:p-6'>
				<span className='flex items-center text-sm font-medium text-gray-400'>
					<Package   size={20} className='mr-2' color="#3700ff"  />
					{"ffff"}
				</span>
				<p className='mt-1 text-3xl font-semibold text-gray-100'>12</p>
			</div>
		</motion.div>
    <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700'
			whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
		>
			<div className='px-4 py-5 sm:p-6'>
				<span className='flex items-center text-sm font-medium text-gray-400'>
					<Package   size={20} className='mr-2' color="#3700ff"  />
					{"ffff"}
				</span>
				<p className='mt-1 text-3xl font-semibold text-gray-100'>12</p>
			</div>
		</motion.div><motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700'
			whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
		>
			<div className='px-4 py-5 sm:p-6'>
				<span className='flex items-center text-sm font-medium text-gray-400'>
					<Package   size={20} className='mr-2' color="#3700ff"  />
					{"ffff"}
				</span>
				<p className='mt-1 text-3xl font-semibold text-gray-100'>12</p>
			</div>
		</motion.div>

    </div>
    </div>
  )
}
