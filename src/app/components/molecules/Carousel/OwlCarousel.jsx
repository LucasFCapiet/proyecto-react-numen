"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 641},
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };


const images = [
    {
      id: 1,
      imageUrl: 'imgs/foto1.jpg',
      altText: 'foto1',
      username: '@smart.tech'
    },
    {
      id: 2,
      imageUrl: 'imgs/foto2.jpg',
      altText: 'foto2',
      username: '@smart.tech'
    },
    {
      id: 3,
      imageUrl: 'imgs/foto3.jpg',
      altText: 'foto3',
      username: '@smart.tech'
    },
    {
      id: 4,
      imageUrl: 'imgs/foto4.jpg',
      altText: 'foto4',
      username: '@smart.tech'
    },
    {
      id: 5,
      imageUrl: 'imgs/foto5.jpg',
      altText: 'foto5',
      username: '@smart.tech'
    },
    {
      id: 6,
      imageUrl: 'imgs/foto6.jpg',
      altText: 'foto6',
      username: '@smart.tech'
    },
    {
      id: 7,
      imageUrl: 'imgs/foto7.jpg',
      altText: 'foto7',
      username: '@smart.tech',
    },
    {
      id: 8,
      imageUrl: 'imgs/foto8.jpg',
      altText: 'foto8',
      username: '@smart.tech'
    },
    {
      id: 9,
      imageUrl: 'imgs/foto9.jpg',
      altText: 'foto9',
      username: '@smart.tech'
    },
    {
      id: 10,
      imageUrl: 'imgs/foto10.jpg',
      altText: 'foto10',
      username: '@smart.tech'
    },

  ] ;

  const OwlCarousel = () => {
    return (
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows={true}
        centerMode={false}
        className='flex -mx-4'
        containerClass='carousel-container'
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite={true}
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        showDots={false}
        sliderClass=''
        slidesToSlide={4}
      >
        {/* cada imagen */}
        {images.map(image => (
          <div key={image.id} className='w-full md:w-full sm:w-full lg:w-full px-2 mb-10'>
            <a href='#' className='group block max-w-sm mx-auto sm:max md:max-w-none h-full'>
              <div className='relative w-full h-48 sm:h-72 mb-3'>
                <img className='block w-full h-full object-cover max-width: 100%; height: auto' src={image.imageUrl} alt={image.altText} />
              </div>
              <span className='text-sm text-black absolute bottom-0 left-0 px-2 py-1 bg-white bg-opacity-75'>{image.username}</span>
            </a>
          </div>
        ))}
      </Carousel>
    );
  };
  
  export default OwlCarousel;