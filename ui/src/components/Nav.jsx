import React from 'react'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    // usestate to make navbar change on scroll
    const [stickyNav, setStickyNav] = useState(false)
    function setNavSticky() {
        if(window.scrollY >= 100) {
            setStickyNav(true)
        } else {
            setStickyNav(false)
        }
    }
    window.addEventListener("scroll", setNavSticky)

  return (
    <nav className={stickyNav ? "sticky" : ""}>
        <div className="nav-wrapper">
            <h1 className="logo">sewonet <span>blog</span></h1>
            <ul className="nav-list">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                   <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav