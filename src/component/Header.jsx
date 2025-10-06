
import logo from "../assests/images/logo.svg";
import openIcon from "../assests/images/icon-menu.svg";
import menuCloseIcon from "../assests/images/icon-menu-close.svg";
import { useState } from "react";

const Header = () => {
  const [navDisplay, setNavDisplay] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  const openNav = () => {
    setNavDisplay(true);
  }

  const closeNav = () => {
    setNavDisplay(false);
  }

  window.onresize = () => {
    setDeviceWidth(window.innerWidth);
  }

    return(
        
      <header className="flex">
        <a href='/'>
          <img src={logo} alt="logo" id="menuIcon"/>
        </a>
        {/* style={{display: (deviceWidth < 600) ? (navDisplay ? "block" : "none") : "block" }} */}
        <nav className={(deviceWidth < 600) ? (navDisplay ? "open" : "") : ""} >
          
          <img src={menuCloseIcon} alt="close menu" id="menuCloseIcon" onClick={closeNav} />
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>New</a></li>
            <li><a href='#'>Popular</a></li>
            <li><a href='#'>Trending</a></li>
            <li><a href='#'>Category</a></li>
          </ul>
        </nav>

        <img src={openIcon} alt="menu" onClick={openNav}/>
      </header>

    )
}

export default Header;