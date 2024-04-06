import React from 'react';
import OwlCarousel from './OwlCarousel';


import { ThemeContext } from "../NavBar/DarkMode";
import { useContext } from "react";

const Slider = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <section className={`relative py-20 md:py-32 overflow-hidden ${theme}`}>
      <div className='relative container px-4 mx-auto'>
        <div className='text-center mb-8'>
          <span className='inline-block py-1 px-3 mb-2 text-s font-semibold text-black-900 bg-orange-50 rounded-full'>
            <p>SOCIAL MEDIA</p>
          </span>
          <h1 className='font-heading text-4xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-2 white'>
            <span> Siguenos en </span>
            <span className='font-serif italic'> instagram </span>
          </h1>
          <p className='text-sm text-black-500 mb-6'> No te pierdas las novedades y promociones. ¡Sorteos todas las semanas! </p>
        </div>

        {/* BOTONES */}
        <div className='relative max-w-screen-xl mx-auto'>

          {/* Carrusel */}
          <OwlCarousel />
          
        </div>
      </div>
    </section>
  );
}

export default Slider;

