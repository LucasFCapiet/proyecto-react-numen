import "./NavBar.css";

// Arrays of information
const listNavBar = [
  { text: "Occasions▼", href: "#occassions" },
  { text: "All Categories▼", href: "#categories" },
  { text: "Gifts & Bundles▼", href: "#giftsandbundles" },
  { text: "Our brands", href: "#brands" },
  { text: "About Us", href: "#about" },
];

const buttonArray = [{ alt: "🔎" }, { alt: "👤" }, { alt: "💲 con contador" }];

function NavBar() {
  return (
    <nav className="flex flex-row" id="NavBar">
      {/* logo */}
      <div className="flex items-center">
        <img src="/imgs/duck-logo.avif" alt="logo🖥️" width="50px" />
        <h1>EmpresaPepito</h1>
      </div>
      {/*List */}
      <div className="flex items-center">
        {listNavBar.map((item) => {
          return (
            <li>
              <a href={item.href}>{item.text}</a>
            </li>
          );
        })}
      </div>
      {/* Market */}
      <div className="flex items-center">
        {buttonArray.map((item) => {
          return (
            <button>
              <img src="" alt={item.alt} />
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default NavBar;
