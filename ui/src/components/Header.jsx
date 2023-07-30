import React from 'react'
import headerImg from '../img/header.jpg'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="header-wrapper">
            <div className="content-box">
                <h1>welcome to sewonet blog</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis tempore a nesciunt. Quasi culpa ullam rem cumque!</p>
                <Link className="all-btns" to="/about">About us</Link>
            </div>
            <figure className="img-box">
                <img src={headerImg} alt="Sewonet blog image" />
            </figure>
        </div>
    </header>
  )
}

export default Header