import Loader from "./Components/Loader"
import NavBar from "./Components/NavBar"
import MainRoutes from "./Routes/MainRoutes"
import Footer from "./Components/Footer"
import CartPanel from "./Components/CartPanel"
import Menu from "./Components/Menu"
import React, { useState, useEffect } from "react"; // ✅ Import useState, useEffect

const App = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {loading ? (
        <Loader />
      ) : 
        
        <>
          <NavBar/>
          <Menu/>
          <CartPanel />
<MainRoutes/>
<Footer/>
        </>
      }
  
    </>
  )
}

export default App