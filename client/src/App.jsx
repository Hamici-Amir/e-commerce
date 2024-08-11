import { SignIn } from "./components/auth/SignIn"
import { SignUp } from "./components/auth/SignUp"
import { Navbar } from "./components/Navbar/Navbar"
import Home from "./pages/Home"

function App() {


  return (
    <>
     <Navbar />
     <Home/>
     <SignIn />
     <SignUp />
    </>
  )
}

export default App
