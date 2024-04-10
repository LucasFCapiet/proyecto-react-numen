import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";




const   SocialIcons = () => {
    return (
      <div className="text-custom-hover border-none">
        <a href="https://www.facebook.com" rel="noopener noreferrer">
        <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-custom-white mx-1.5 text-xl hover:text-custom-gray hover:bg-custom-hover duration-300">
        <FaFacebookSquare />
        </span>
        </a>
        <a href="https://www.instagram.com" rel="noopener noreferrer">
        <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-custom-white mx-1.5 text-xl hover:text-custom-gray hover:bg-custom-hover duration-300">
        <FaInstagramSquare />
        </span>
        </a>
        <a href="https://www.twitter.com" rel="noopener noreferrer">
        <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-custom-white mx-1.5 text-xl hover:text-custom-gray hover:bg-custom-hover duration-300">
        <AiFillTwitterCircle />
        </span>
        </a>
        <a href="https://api.whatsapp.com/" rel="noopener noreferrer">
        <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-custom-white mx-1.5 text-xl hover:text-custom-gray hover:bg-custom-hover duration-300">
        <FaWhatsappSquare />
        </span>
        </a>
      </div>
    );
  };
  
  export default SocialIcons;
  