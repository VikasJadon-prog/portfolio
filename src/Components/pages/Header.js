import React from "react";
import { Link,Outlet} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="heder-div" style={{}}>
      <ui className="header" style={{display:"flex"}}>
       
          <li>
            <Link to="/" className="header-li">Home</Link>
          </li>
          <li>
            <Link to="/about" className="header-li">About</Link>
          </li>
          <li>
            <Link to="/service" className="header-li">Service</Link>
          </li>
          <li>
            <Link to="/portifolio" className="header-li">Portfolio</Link>
          </li>
          <li>
            <Link to="/blog" className="header-li">Blog</Link>
          </li>
          <li>
            <Link to="/contact" className="header-li">Contact</Link>
          </li>
        
      </ui>
    </nav>
    {/* <Outlet/> */}
    </div>
  );
};

export default Header;
