import React, { useDebugValue, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false)

  useEffect(() => {
    window.addEventListener("click", handleToggleBtn)
  }, [])

  const handleToggleBtn = (e) => {
    if (e.target.className.includes("navbar__toggler")) {
      setIsToggle((isToggle) => {
        return !isToggle
      })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar__container-fluid">
        <div className="navbar__brand">
          <a href="https://ondospace.com">
            <img className='lazyload' alt="ONDO-SPACE" src="/ondo.svg" />
          </a>
          <a href="https://ondo.mn">
            <img className='lazyload' alt="ONDO-SPACE" src="/images/ondo-logo.svg" />
          </a>
          <a href="http://www.mrsf.mn/">
            <img className='lazyload' alt="ONDO-SPACE" src="images/mrsf-logo.png" />
          </a>
        </div>
        <button className="navbar__toggler" type="button" onClick={handleToggleBtn}>
          <div className="navbar__toggler-menu">
            <div className="navbar__toggler-menu-bar"></div>
            <div className="navbar__toggler-menu-bar"></div>
            <div className="navbar__toggler-menu-bar"></div>
          </div>
        </button>
        <div className={`navbar__collapse ${!isToggle && 'navbar__is-visible' }`} id="navbarNav">
          <ul id="menu-primary-header-menu" className="navbar__nav">
            <li id="menu-item-home" className="navbar__nav-link">
              <Link to="/">
                Home
              </Link>
            </li>
            <li id="menu-item-home" className="navbar__nav-link">
              <Link to="/event">
                Event
              </Link>
            </li>
            <li id="menu-item-home" className="navbar__nav-link">
              <Link to="/amatuer">
                Amatuer
              </Link>
            </li>
            <li id="menu-item-96" className="navbar__nav-link">
              <Link to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
