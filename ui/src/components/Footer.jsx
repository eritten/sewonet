import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="footer-wrapper">
            <div className="info-box">
                <h1 className="logo">sewonet blog</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptates, sed hic commodi reprehenderit optio pariatur id deserunt, voluptatibus sint delectus nesciunt suscipit. Reprehenderit aspernatur vel illo minima voluptas laboriosam!</p>
            </div>
            <div className="quick-links">
                <h4>quick links</h4>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="legal-links">
                <h4>legal links</h4>
                <ul>
                    <li>
                        <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="#">Privacy policy</a>
                    </li>
                </ul>
            </div>
        </div>
        <p className="outro">&copy; Copyright 2023 Sewonet Co ltd</p>
    </footer>
  )
}

export default Footer