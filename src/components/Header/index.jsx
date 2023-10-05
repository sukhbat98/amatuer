import throttle from 'lodash/throttle';

import React, { useEffect, useState } from "react";

function Header() {
  const [IsScrolled, setIsScrolled] = useState(false)
  const [isToggle, setIsToggle] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", throttle(() => runOnScroll(),  200))
  }, [])

  function runOnScroll() {
    if (window.scrollY > 60) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  const handleToggleBtn = () => {
    setIsToggle(!isToggle)
  }

  // classes
  let headerClassName = IsScrolled ? "navbar navbar__header-dark" : "navbar"

  return (
    <nav className={headerClassName}>
      <div className="navbar__container-fluid">
        <a href="/" className="navbar__brand">
          <img alt="" src="https://stamina4space.upd.edu.ph/wp-content/themes/stamina4space/assets/images/landing-logos/1.png" />
          <img alt="" src=" https://stamina4space.upd.edu.ph/wp-content/themes/stamina4space/assets/images/landing-logos/2.png" />
          <img alt="" src="https://stamina4space.upd.edu.ph/wp-content/themes/stamina4space/assets/images/landing-logos/3.png" />
        </a>
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
              <a href="https://stamina4space.upd.edu.ph/">Home</a>
            </li>
            <li id="menu-item-96" className="navbar__nav-link">
              <a href="https://stamina4space.upd.edu.ph/contact-us-page/">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
