import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Slider = () => {
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

  
  const image = [
    {
      id: 1,
      imageUrl: '/imgs/foto1.jpg',
      altText: 'foto1',
      username: '@smart.tech'
    },
    {
      id: 2,
      imageUrl: '/imgs/foto2.jpg',
      altText: 'foto2',
      username: '@smart.tech'
    },
    {
      id: 3,
      imageUrl: '/imgs/foto3.jpg',
      altText: 'foto3',
      username: '@smart.tech'
    },
    {
      id: 4,
      imageUrl: '/imgs/foto4.jpg',
      altText: 'foto4',
      username: '@smart.tech'
    },
    {
      id: 5,
      imageUrl: '/imgs/foto5.jpg',
      altText: 'foto5',
      username: '@smart.tech'
    },
    {
      id: 6,
      imageUrl: '/imgs/foto6.jpg',
      altText: 'foto6',
      username: '@smart.tech'
    },
    {
      id: 7,
      imageUrl: '/imgs/foto7.jpg',
      altText: 'foto7',
      username: '@smart.tech'
    },
    {
      id: 8,
      imageUrl: '/imgs/foto8.jpg',
      altText: 'foto8',
      username: '@smart.tech'
    },
    {
      id: 9,
      imageUrl: '/imgs/foto9.jpg',
      altText: 'foto9',
      username: '@smart.tech'
    },
    {
      id: 10,
      imageUrl: '/imgs/foto10.jpg',
      altText: 'foto10',
      username: '@smart.tech'
    },

  ] ;



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
      
        {/* Carousel */}
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

          {image.map(image => (
            <div key={image.id} className='w-full md:w-full sm:w-full lg:w-full px-2 mb-10'>
              <a className='group block max-w-sm mx-auto sm:max md:max-w-none h-full'>
                <div className='relative w-full h-48 sm:h-72 mb-3'> 
                  <div className='items-center justify-center absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-40'>
                    <img className='block w-full h-full object-cover max-width: 100%; height: aut' src={image.imageUrl} alt={`Foto ${image.id}`} />
                  </div>
                  <span className='text-sm text-black'>{image.username}</span> 
                </div>
              </a>
            </div>
          ))}

        </Carousel>
     </div> 
    </div>
  </section>
);
};

export default Slider;
