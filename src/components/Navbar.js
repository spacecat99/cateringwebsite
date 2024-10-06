import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { NAVIGATION_MAP_LIST, scrollToTop } from "../util/constants";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            LUXE
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {
              NAVIGATION_MAP_LIST.map(navigationItem => {
                return <li className="nav-item">
                  <Link
                    to={navigationItem.site}
                    className={window.location.pathname.endsWith(navigationItem.site) ? "nav-links active" : "nav-links"}
                    onClick={() => {
                      closeMobileMenu();
                      scrollToTop();
                    }}
                  >
                    {navigationItem.title.toUpperCase()}
                  </Link>
                </li>

              })
            }
          </ul>
        </div>
      </nav>
    </>
  );
}

// {button && (
//   <Button buttonStyle="btn--outline" path={"/kontakt"}>
//     KONTAKT
//   </Button>
// )}

export default Navbar;
