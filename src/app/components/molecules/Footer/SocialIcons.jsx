import React from "react";

const SocialIcons = () => {
    return (
      <div className="text-teal-500 border-none">
        <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300">
          <ion-icon name="logo-facebook"></ion-icon>
        </span>
        <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300">
          <ion-icon name="logo-twitter"></ion-icon>
        </span>
        <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300">
          <ion-icon name="logo-twitch"></ion-icon>
        </span>
      </div>
    );
  };
  
  export default SocialIcons;
  