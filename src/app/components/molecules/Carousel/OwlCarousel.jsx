import React from 'react';
"use client";
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
      imageUrl: '/images/foto1.jpg',
      altText: 'foto1',
      username: '@soycoolyvosno'
    },
    {
      id: 2,
      imageUrl: '/images/foto2.jpg',
      altText: 'foto2',
      username: '@soycoolyvosno'
    },
    {
      id: 3,
      imageUrl: '/images/foto3.jpg',
      altText: 'foto3',
      username: '@soycoolyvosno'
    },
    {
      id: 4,
      imageUrl: '/images/foto4.jpg',
      altText: 'foto4',
      username: '@soycoolyvosno'
    },
    {
      id: 5,
      imageUrl: '/images/foto5.jpg',
      altText: 'foto5',
      username: '@soycoolyvosno'
    },
    {
      id: 6,
      imageUrl: '/images/foto6.jpg',
      altText: 'foto6',
      username: '@soycoolyvosno'
    },
    {
      id: 7,
      imageUrl: '/images/foto7.jpg',
      altText: 'foto7',
      username: '@soycoolyvosno'
    },
    {
      id: 8,
      imageUrl: '/images/foto8.jpg',
      altText: 'foto8',
      username: '@soycoolyvosno'
    },
    {
      id: 9,
      imageUrl: '/images/foto9.jpg',
      altText: 'foto9',
      username: '@soycoolyvosno'
    },
    {
      id: 10,
      imageUrl: '/images/foto10.jpg',
      altText: 'foto10',
      username: '@soycoolyvosno'
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
                <div className='items-center justify-center absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-40'>
                  <img className='block w-full h-full object-cover max-width: 100%; height: auto' src={image.imageUrl} alt={image.altText} />
                </div>
                <span className='text-sm text-black'>{image.username}</span> 
              </div>
            </a>
          </div>
        ))}
      </Carousel>
    );
  };
  
  export default OwlCarousel;