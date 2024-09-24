import React, { useState } from 'react';
import{Phone, Smartphone, User} from "lucide-react" ;
import { FaTelegramPlane, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
export const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Handle form submission (e.g., send data to an API)
    // For example:
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });

    setIsSubmitting(false);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="w-[90%] mx-auto  h-[650px]   mt-10 shadow-2xl rounded-xl border-2 justify-center  bg-white flex   ">
        <div className='  X  flex justify-between flex-col rounded-xl  bg-cover'>
            <div className='  mx-10'>
          
            
            </div>
            <div className="flex space-x-1   items-center justify-center py-1 ">
      <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="btn-outline text-white btn  border-spacing-1 ">
        <FaTelegramPlane size={28} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn-outline btn text-white ">
        <FaFacebook size={28} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn-outline btn text-white ">
        <FaTwitter size={28} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-outline  btn text-white ">
        <FaLinkedin size={28} />
      </a>
    </div>    

        </div>
        <div className=' ' >
        <h2 className=" font-bold mt-4 mb-4 flex items-center mx-10 text-3xl">
         GET IN TOUCH
          </h2>
      <p className='text-gray-400 text-xl mx-10   mt-4 mb-4 flex items-center  '>
        24/07  We will answer your questions and problems
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 mt-10">
        <div className='flex items-center justify-between mx-10   '>
          
        <label className="input input-bordered input-primary border-2  w-[49%] flex items-center focus:border-indigo-700 h-[70px] focus:border-4 gap-2"
          
          >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-8 w-8 opacity-70">
      <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
      <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
    </svg>
    <input type="text" 
                  className="w-full "
  
    placeholder="First Name" />
  </label>  
           <label className="input input-bordered input-primary border-2 w-[49%] flex items-center focus:border-indigo-700 h-[70px] focus:border-4 gap-2"
          
          >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-8 w-8 opacity-70">
      <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
      <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
    </svg>
    <input type="text" 
                  className="w-full "
  
    placeholder="Last Name" />
  </label>
        </div>
       
       
        
        
        <div className='flex items-center justify-center border-collapse input-container'>
          
        <label className="input input-bordered input-primary border-2  w-[1200px] flex items-center focus:border-indigo-700 h-[70px] focus:border-4 gap-2"
          
        >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-8 w-8 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" 
                className="w-full "

  placeholder="Email" />
</label>

        </div>
        
        <div>
      
       <label className="input input-bordered input-primary mx-10 border-2    w-[1200px] flex items-center focus:border-indigo-700 h-[70px] focus:border-4 gap-2"
          
          >
<Smartphone size={32} color="gray" strokeWidth={3} />    <input type="text" 
                  className="w-full "
  
    placeholder="phone" />
  </label>
        </div>
        
        <div className=''>
        <textarea className="textarea textarea-primary textarea-lg w-[1200px] mx-10 " placeholder="Describe you issue"></textarea>
         
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-[1200px] ml-10 mt-4 py-3 px-4 border border-transparent rounded-md shadow-sm text-white  btn  bg-indigo-700 hover:bg-indigo-700 focus:outline-none    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
        </div>
    </section >
  );
}


/* 


*/