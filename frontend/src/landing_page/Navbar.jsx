import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <nav className="navbar navbar-expand-lg sticky-top border-bottom" style={{backgroundColor: "#FFF"}}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/" style={{fontSize: "1.6rem", color: "#387ED1", fontWeight: "600"}}>
          TradeSync
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <form className="d-flex ms-auto" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" onClick={()=>handleMenuClick(0)} to="/about">
                <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>About</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" onClick={()=>handleMenuClick(1)} to="/product">
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Products</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" onClick={()=>handleMenuClick(2)} to="/pricing">
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Pricing</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" onClick={()=>handleMenuClick(3)} to="/support">
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Support</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" onClick={()=>handleMenuClick(4)} to="/login">
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Login</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" onClick={()=>handleMenuClick(5)} aria-current="page" to="/signup">
                <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Signup</p>
              </Link>
            </li>
      
            {/* <li>
              <p className="pt-2 ps-3"><i className="fa-solid fa-bars"></i></p>
            </li> */}
          </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
