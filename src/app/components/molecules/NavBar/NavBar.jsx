import "./NavBar.css";

function NavBar() {
  return (
    <nav className="flex flex-row" id="NavBar">
      <div className="flex items-center">
        <img src="/imgs/duck-logo.avif" alt="logo🖥️" width="50px" />
        <h1>EmpresaPepito</h1>
      </div>
      <div className="flex items-center">
        <ul className="flex gap-1 ">
          <li>
            <a href="#occassions">Occasions▼</a>
          </li>
          <li>
            <a href="#categories">All Categories▼</a>
          </li>
          <li>
            <a href="#giftsandbundles">Gifts & Bundles▼</a>
          </li>
          <li>
            <a href="#brands">Our brands</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <button>
          <img src="" alt="🔎" />
        </button>
        <button>
          <img src="" alt="👤" />
        </button>
        <button>
          <img src="" alt="💲 con contador" />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
