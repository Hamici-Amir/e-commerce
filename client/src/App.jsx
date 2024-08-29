import React from 'react'; 
import { Route ,Routes,Navigate  } from "react-router-dom"
import { EmailVerification, ErrorRoute, Home, Login, Signup } from "./pages"
import { Footer, Navbar } from "./components/Navbar"
import {useAuthStore} from "./zustand/store"
import LoadingSpinner from "./components/Loading/LoadingSpinner"
import { Toaster } from "react-hot-toast";
import { useEffect } from "react"
import {Contacts} from "./components/Navbar" ;

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

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
      
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/*" element={<ErrorRoute /> } />     
           <Route path="/dashboard" element={
            <ProtectedRoute>
            
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

  if (!user.isVerified) {
    return <Navigate to='/verify-email' replace />;
  }

  return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to='/' replace />;
  }

  return children;
};