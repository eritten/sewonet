import React from 'react'
import { useState, useRef } from 'react'
import {NavLink} from 'react-router-dom'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    // mobile nav button functionality
    const mobileNavRef = useRef()
    function mobileNavToggle(){
        mobileNavRef.current.classList.toggle("mobile-nav-open")
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 0) {
                mobileNavRef.current.classList.remove("mobile-nav-open")
            }
        })
       
    }
    window.addEventListener("scroll", ()=>{
        setNavSticky()
    } )

  return (
    <nav className={stickyNav ? "sticky" : ""}>
        <div className="nav-wrapper">
            <h1 className="logo">sewonet <span>blog</span></h1>
            <ul className="nav-list" ref={mobileNavRef}>
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
            <button className="mobile-nav-btn" aria-label='mobile navigation toggle button' onClick={mobileNavToggle}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    </nav>
  )
}

export default Nav