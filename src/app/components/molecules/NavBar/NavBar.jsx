import {
  IoSearchOutline,
  IoPersonOutline,
  IoBagOutline,
} from "react-icons/io5";

function NavBar() {
  return (
    <header className="bg-white px-4 py-3 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Promo */}
        <div className="flex items-center">
          <img className="h-12 w-40" src="/logo.png" alt="Logo" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Todas las categorias
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Televisores
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Telefonos
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Heladeras
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Lavarropas
          </a>
          {/* ... more nav items */}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <IoSearchOutline className="h-6 w-6 text-gray-700 hover:text-gray-900" />
          <IoPersonOutline className="h-6 w-6 text-gray-700 hover:text-gray-900" />
          <div className="relative">
            <IoBagOutline className="h-6 w-6 text-gray-700 hover:text-gray-900" />
            <span className="absolute -top-1 -right-2 flex items-center justify-center h-5 w-5 text-xs font-semibold text-white bg-red-600 rounded-full">
              3
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
