

import React from 'react'


import { ThemeContext } from "../NavBar/DarkMode";
import { useContext } from "react";

const DivImg = () => {

    const { theme } = useContext(ThemeContext)

  return (
    <div className={`${theme}`} >
        <div className="h-96 w-3/4  flex flex-col items-left justify-center mx-auto bg-cover 
    bg-[url('https://geektime.es/wp-content/uploads/2020/12/mavic-air_flame-red_-1-e1542646586211.jpg')]">
    </div>
    </div>
    
  )
}

export default DivImg


