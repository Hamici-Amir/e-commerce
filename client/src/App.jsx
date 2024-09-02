import React from 'react'; 
import { Route ,Routes,Navigate  } from "react-router-dom"
import { Dashboard, EmailVerification, ErrorRoute, Home, Login, Signup , Profile , Contacts } from "./pages"
import { Footer, Navbar } from "./components/Navbar"
import {useAuthStore} from "./zustand/store"
import LoadingSpinner from "./components/Loading/LoadingSpinner"
import { Toaster } from "react-hot-toast";
import { useEffect } from "react"
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import { useState } from 'react';


function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();
  const [category,setCategory] = useState("All") ;
	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (isCheckingAuth) return <LoadingSpinner />;
  

  return (

    <>
      <Routes>
          <Route path="/" exact element={
            <>
                <Navbar />
                <Home />
                <ExploreMenu category={category} setCategory={setCategory }/>
                <Footer />
            </>
            }/>

          <Route path="/sign-in" element=
          {
            <RedirectAuthenticatedUser>
              <Login />
            </RedirectAuthenticatedUser>
          }  />
          <Route path="/sign-up" element={
              
           <RedirectAuthenticatedUser>
             <Signup />
           </RedirectAuthenticatedUser>
            
            }  /> 
               <Route path="/Contacts" element=
          {
            <>
            <Navbar />
              <Contacts />
              <Footer />
            </>
             
          
          }  />
          <Route path='/:name' element={<Profile />} />

          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/*" element={<ErrorRoute /> } />     
           <Route path="/dashboard" element={
            <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
           }  />    

        </Routes>
        
        
        
            <Toaster />
   
     
    </>
  )
}

export default App


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to='/sign-in' replace />;
  }

  if (!user.isVerified  ) {
    return <Navigate to='/verify-email' replace />;
  }
  if( user.isAdmin)
     return children;
  return <Navigate to='/' replace />;

};


// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated &&  user.isVerified ) {
    return <Navigate to='/' replace />;
  }

  return children;
};

/*
              <ProtectedRoute>
                <Dashborad />
          </ProtectedRoute>

*/