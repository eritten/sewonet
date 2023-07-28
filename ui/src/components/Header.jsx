import React from 'react'
import headerImg from '../img/header.jpg'

const Header = () => {
  return (
    <header>
        <div className="header-wrapper">
            <div className="content-box">
                <h1>welcome to sewonet blog</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis tempore a nesciunt. Quasi culpa ullam rem cumque!</p>
                <a href="#n" className="all-btns">About us</a>
            </div>
            <figure className="img-box">
                <img src={headerImg} alt="Sewonet blog image" />
            </figure>
        </div>
    </header>
  )
}

export default Header