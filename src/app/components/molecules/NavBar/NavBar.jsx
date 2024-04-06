import { useRouter } from "next/navigation";
import "./NavBar.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { IoContrastSharp } from "react-icons/io5";
import { menuItems, primeryItems } from "@/app/constants";

import { ThemeContext } from "./DarkMode";

import { useContext } from "react";




function NavBar() {


  const { theme, handleTheme } = useContext(ThemeContext)


  const router = useRouter();
  const tohome = () => {
    router.push("./"); }
  const clic= () => {
    router.push("/ordercart");
    }	;

  
  

  return (



    <header className={`bg-custom-blue px-4 py-3 border-b ${theme}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <button onClick={tohome}>
            <img className="h-12 w-40" src="/logo.png" alt="Logo" />
          </button>
        </div>
        {/* nav */}
        <nav className="hidden md:flex space-x-16 h-12 items-center">
          {/* Dropdown menu */}
          <div className="group inline-block">
            <button className="font-medium text-custom-white hover:text-custom-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 flex">
              Todas las categorías
              {/* Icon for dropdown, adjust as needed */}
              <svg
                className="ml-2 mt-1 w-4 h-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {/* Dropdown menu */}
            <div className="absolute hidden text-custom-white pt-1 group-hover:block">
              <div className={`bg-custom-blue shadow-lg ring-1 ring-black ring-opacity-5 ${theme}`}>
                {menuItems.map((item) => {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-t-lg text-base  font-medium text-custom-white hover:text-custom-gray py-2 px-6 block whitespace-nowrap"
                    >
                      {item.text}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          {/* primary */}
          {primeryItems.map((item) => {
            return (
              <a
                key={item.href}
                href={item.href}
                className="text-base  font-medium text-custom-white hover:text-custom-gray"
              >
                {item.text}
              </a>
            );
          })}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button>
            <IoSearchOutline className="h-6 w-6 text-custom-white hover:text-custom-gray cursor-pointer" />
          </button>
          <button>
            <IoPersonOutline className="h-6 w-6 text-custom-white hover:text-custom-gray cursor-pointer" />
          </button>
          <IoContrastSharp className="h-6 w-6 text-custom-white hover:text-custom-gray cursor-pointer" onClick={handleTheme}/>
          <button onClick={clic}>
            <div className="relative">
              <IoBagOutline className="h-6 w-6 text-custom-white hover:text-custom-gray cursor-pointer" />
              <span className="absolute -top-2 -right-3 flex items-center justify-center h-5 w-5 text-xs text-custom-white font-semibold text-white  rounded-full">
                3
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
