import { Link } from "react-router-dom";

export const SignIn = ({setIsOpen}) => {
  
  const Showpassword = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  
  return (
    <div className=" w-[430px] ">
    {/*
        <h3 className="font-bold text-3xl">  Sign In </h3>
    */}
     <label className="input  border-[#49557e]  mt-10  flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<label className="input  mt-10  border-[#49557e] flex items-center gap-2">
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow" id="password" placeholder="password" />
  <input type="checkbox" className="grow w-5 h-5"  onClick={Showpassword } />
</label>
<button className="btn  bg-orange-600 mx-auto hover:bg-orange-600 text-white font-bold text-2xl h-[48px]  w-full mt-10  ">  sign in </button>
  <input type="checkbox" className="mt-3 w-4                                                                                                                                                                                                                                                                                                                                                                                                                                               h-4  "  /> 
  <span className="" >  By continuing . i agree to the terms of use 
      & privacy policy
     </span>

     <div className="flex mt-5 gap-4">
  <h1  className="" >  D'ont  have an account ? </h1> 
      <Link to={"/sign-up"} 
       className="text-orange-700 cursor-pointer"> create account  </Link>
  </div>
    
    </div>    
  )
}
