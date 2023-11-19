import React, { useDebugValue, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false)

  const handleToggleBtn = () => {
    setIsToggle(!isToggle)
  }

  return (
    <header className="navbar">
      <div className="navbar__container-fluid">
        <div className="navbar__brand">
          <a href="/">
            <img className='lazyload' alt="ONDO-SPACE" src="/ondo.svg" />
          </a>
          {/* <a href="http://www.mrsf.mn/">
            <img className='lazyload' alt="ONDO-SPACE" src="images/mrsf-logo.png" />
          </a> */}
        </div>
        <button className="navbar__toggler" type="button" onClick={() => handleToggleBtn()}>
          <div className="navbar__toggler-menu">
            <div className="navbar__toggler-menu-bar"></div>
            <div className="navbar__toggler-menu-bar"></div>
            <div className="navbar__toggler-menu-bar"></div>
          </div>
        </button>
        <div className={`navbar__collapse ${!isToggle && 'navbar__is-visible' }`} id="navbarNav">
          <ul id="menu-primary-header-menu" className="navbar__nav">
            <li id="menu-item-home" className="navbar__nav-link">
              <a href="/">
                Home
              </a>
            </li>
            {/* <li id="menu-item-home" className="navbar__nav-link">
              <Link to="/event">
                Event
              </Link>
            </li> */}
            <li id="menu-item-home" className="navbar__nav-link">
              <a href="/amatuer">
                Amatuer
              </a>
            </li>
            <li id="menu-item-96" className="navbar__nav-link">
              <a href="/manuals">
                Manuals
              </a>
            </li>
            {/* <li id="menu-item-96" className="navbar__nav-link">
              <a href="/contact">
                Contact us
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;
