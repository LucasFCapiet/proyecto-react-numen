import React from "react";
import Fblogo from "./Fblogo";
import Instalogo from "./Instalogo";
import Twitlogo from "./Twitlogo";

const SocialIcons = () => {
    return (
      <div className="text-teal-500 border-none">
        <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300">
        <Fblogo />
        </span>
        <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300">
        <Instalogo />
        </span>
        <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300">
        <Twitlogo />
        </span>
      </div>
    );
  };
  
  export default SocialIcons;
  