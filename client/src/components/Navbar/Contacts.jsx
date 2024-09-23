import React, { useState } from 'react';
import{User} from "lucide-react" ;
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
    <section className="w-full   h-screen  bg-white flex   ">
        <div className='w-1/3  bg-gray-500  bg-cover'>
            <div className='mt-[650px]  mx-10'>
            <div className=" text-orange-600   lg:text-5xl text-4xl  font-extrabold   ">
                    Tomato. 
            </div>
              <p className='text-xl '>At Tomato, we believe that great food should 
                be just a click away. Explore a diverse menu featuring local
                 favorites and international delights, all delivered straight
                  to your door.</p>
            </div>
            <div className="flex space-x-5 items-center justify-center py-5 ">
      <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 border-spacing-1 hover:text-blue-700">
        <FaTelegramPlane size={28} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
        <FaFacebook size={28} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
        <FaTwitter size={28} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
        <FaLinkedin size={28} />
      </a>
    </div>    

        </div>
        <div className='w-2/3 h-full' >
        <h2 className=" font-bold mt-4 mb-4 flex items-center justify-center text-3xl">
         GET IN TOUCH
          </h2>
      <p className='text-gray-400 text-2xl  mt-4 mb-4 flex items-center justify-center '>
        24/07  We will answer your questions and problems
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 mt-10">
        <div className='flex'>
          
          <input
            placeholder='First Name'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 h-[70px] focus:border-orange-600 font-bold text-3xl ml-10  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
           <input
          placeholder='Last Name'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 h-[70px] focus:border-orange-600 font-bold text-3xl ml-4 mr-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
       
       
        
        
        <div className='flex items-center justify-center border-collapse input-container'>
          
          <input
            placeholder=' Email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          
            required
            className="input-field mt-1 ml-10 mr-10 h-[70px] focus:border-orange-600 font-bold text-3xl  block w-[1200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        
        <div>
       
          <input
            placeholder='Phone'
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 h-[70px] focus:border-orange-600 font-bold text-3xl  ml-10 mr-10 block w-[1200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        
        <div>
          
          <input
            placeholder='Describe your issue'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 mb-5 mx-10 focus:border-orange-600 font-bold text-3xl h-[120px] block w-[1200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-[1200px] ml-10 mt-4 py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-orange-600  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
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