"use client"
import ThemeContextProvider from "../components/molecules/NavBar/DarkMode"
import NavBar from "../components/molecules/NavBar/NavBar"
import Promotional from "../components/molecules/Promotional/Promotional"
import OrderCart from "../components/molecules/ShoppingCart/OrderCart"





const page = () => {



  return (
   
    <ThemeContextProvider>
    <Promotional/>
    <NavBar/>
    <OrderCart/>
    
    </ThemeContextProvider>
  
  )    
}

export default page