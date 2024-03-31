import React from 'react';
import OwlCarousel from '../pages/carousel'; // Corregir la importación del componente

const Slider = () => {
  return (
    <section className='relative py-20 md:py-32 overflow-hidden'>
      <div className='relative container px-4 mx-auto'>
        <div className='text-center mb-8'>
          <span className='inline-block py-1 px-3 mb-2 text-s font-semibold text-black-900 bg-orange-50 rounded-full'>
            <p>SOCIAL MEDIA</p>
          </span>
          <h1 className='font-heading text-4xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-2 white'>
            <span> Follow us on </span>
            <span className='font-serif italic'> instagram </span>
          </h1>
          <p className='text-sm text-black-500 mb-6'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        </div>

        {/* BOTONES */}
        <div className='relative max-w-screen-xl mx-auto'>

          {/* Carrusel importado desde Carousel.jsx */}
          <OwlCarousel />
          
        </div>
      </div>
    </section>
  );
}

export default Slider;
