import React from "react";


import ItemsContainer from "./ItemsConteiner";
import SocialIcons from "./SocialIcons";

import { ThemeContext } from "../NavBar/DarkMode";
import { useContext } from "react";


const Footer = () => {
    
    const { theme } = useContext(ThemeContext)
    return(
            <footer className={`bg-custom-blue text-custom-white ${theme}`}>

                <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[ffffff19] py-7 border-none">
                </div>
                <ItemsContainer />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 ">
                <span>© 2024 Derechos proyecto Numen</span>
                <SocialIcons />
                </div>
            </footer>
    )
};

export default Footer;