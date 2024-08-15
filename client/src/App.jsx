
import { Route ,Routes  } from "react-router-dom"
import { ErrorRoute, Home, Login, Signup } from "./pages"
import { Footer, Navbar } from "./components/Navbar"


function App() {


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
          <Route path="/*" element={<ErrorRoute /> } />     
    
        </Routes>
  
       
    
   
     
    </>
  )
}

export default App
