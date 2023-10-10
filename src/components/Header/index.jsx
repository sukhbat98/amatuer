import throttle from 'lodash/throttle';

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [IsScrolled, setIsScrolled] = useState(false)
  const [isToggle, setIsToggle] = useState(false)

  useEffect(() => {
    // TODO: scroll ажиллах үед header хэсгийн background color өөрчлөгддөн болгож сайжруулах
    // window.addEventListener("scroll", throttle(() => runOnScroll(),  200))
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
          <img alt="" src="/ondo.svg" />
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
              <Link to="/">
                Home
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
