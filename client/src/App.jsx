
import { Route ,Routes  } from "react-router-dom"
import { EmailVerification, ErrorRoute, Home, Login, Signup } from "./pages"
import { Footer, Navbar } from "./components/Navbar"
import {useAuthStore} from "./zustand/store"
import LoadingSpinner from "./components/Loading/LoadingSpinner"
import { Toaster } from "react-hot-toast";


function App() {
  
  if(!true) return <LoadingSpinner />

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

          <Route path="/sign-in" element={<Login />}  />
          <Route path="/sign-up" element={<Signup />}  /> 
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/*" element={<ErrorRoute /> } />     


        </Routes>
  
       
            <Toaster />
   
     
    </>
  )
}

export default App
