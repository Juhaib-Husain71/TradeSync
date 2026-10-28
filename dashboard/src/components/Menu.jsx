import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Menu = ({user}) => {

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }
  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-right",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const logout = async() => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/users/logout",
        {},
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.replace("http://localhost:5173");
        }, 1000);

      } else {
        handleError(message);
      }} catch (error) {
        console.log(error);
      }
  }

  return (
    <>
    <div className="menu-container">
      <img src="/images/logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" onClick={()=>handleMenuClick(0)} style={{textDecoration: "none"}}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" onClick={()=>handleMenuClick(1)} style={{textDecoration: "none"}}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>

          <li>
            <Link to="/positions" onClick={()=>handleMenuClick(2)} style={{textDecoration: "none"}}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>

          <li>
            <Link to="/orders" onClick={()=>handleMenuClick(3)} style={{textDecoration: "none"}}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          
          <li>
            <Link to="/funds" onClick={()=>handleMenuClick(4)} style={{textDecoration: "none"}}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>

          <li>
            <Link to="/apps" onClick={()=>handleMenuClick(5)} style={{textDecoration: "none"}}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>

        <hr />
        <div className="profile" onClick={handleProfileClick}> 
          <div className="avatar"><p style={{paddingBottom: "4px"}}>{user?.username.trim()[0]}</p></div>
          {/* <p className="username">{user?.username}</p> */}
        </div>
      </div>

      {isProfileDropdownOpen && <div className="profile-drop-wrapper">
        <div className="wrapper-item">
          <i className="fa-solid fa-user"></i>
          <p className="username">{user?.username}</p>
        </div>
        <div className="wrapper-item">
          <i className="fa-solid fa-right-from-bracket"></i>
          <button onClick={logout} className="logout-btn">Logout</button>
        </div>
      </div>}
    </div>

      <ToastContainer/>
    </>
  );
};

export default Menu;
