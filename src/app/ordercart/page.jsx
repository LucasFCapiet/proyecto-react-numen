"use client"
import ThemeContextProvider from "../components/molecules/NavBar/DarkMode"
import NavBar from "../components/molecules/NavBar/NavBar"
import Promotional from "../components/molecules/Promotional/Promotional"
import OrderCart from "../components/molecules/ShoppingCart/OrderCart"
import Footer from "../components/molecules/Footer/Footer"





const page = () => {



  return (
   
    <ThemeContextProvider>
    <Promotional/>
    <NavBar/>
    <OrderCart/>
    <Footer />
    </ThemeContextProvider>
  
  )    
}

export default page