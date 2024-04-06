import React from "react";


import ItemsContainer from "./ItemsConteiner";
import SocialIcons from "./SocialIcons";


const Footer = () => {
    
    return(
            <footer className='bg-custom-blue text-custom-white'>

                
                <ItemsContainer />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 ">
                <span>© 2024 Derechos proyecto Numen</span>
                <SocialIcons />
                </div>
            </footer>
    )
};

export default Footer;