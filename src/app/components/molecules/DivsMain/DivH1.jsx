import React from 'react'

import CardDisplayer from '../Card/CardDisplayer'
import { ThemeContext } from "../NavBar/DarkMode";
import { useContext } from "react";

const DivH1 = () => {
    const { theme } = useContext(ThemeContext)
  return (
    <div className={`${theme}`}>
    <h1 className="text-center text-xl font-semibold text-[#fcfcfc]">
      Nuestros Productos
    </h1>
    <div className="flex flex-row justify-center space-x-10">
      <CardDisplayer />
    </div>
  </div>
  )
}

export default DivH1