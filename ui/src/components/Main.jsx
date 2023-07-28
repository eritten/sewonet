import React from 'react'
import Header from './Header'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'

const Main = () => {

return (
  <>
  <Header/>
    <main>
      <div className="main-wrapper">
      {/* main blogs section */}
      <div className="recent-blog-sec">
        <h1 className="title">Latest Blog Post</h1>
        <div className="recent-blog-wrapper">
          {/* start */}
          <div className="recent-blog-box shadow">
            <figure className="img-box">
              <img src="" alt="image" />
            </figure>
            <div className="content-box">
              <a href="#n" className="tag-name">#tag1</a>
              <a href='#n' className="blog-title">Building microservices with Dropwizard, MongoDB & Docker Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quos architecto consectetur quam ipsa dolorem, porro ipsum odio, sint nostrum molestiae, est dicta at maiores minus corrupti minima fuga blanditiis?</a>
              <p className="blog-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum recusandae facilis delectus eligendi enim eum sit tempore esse accusantium ab, quia vel aliquid at architecto accusamus suscipit minima repellendus error.</p>
              <div className="author-box">
                <h5 className="author">lorem yes</h5>
                <p className="date">Jan 17, 2022</p>
              </div>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div className="recent-blog-box shadow">
            <figure className="img-box">
              <img src="" alt="image" />
            </figure>
            <div className="content-box">
              <a href="#n" className="tag-name">#tag1</a>
              <a href='#n' className="blog-title">Building microservices with Dropwizard, MongoDB & Docker</a>
              <p className="blog-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum recusandae facilis delectus eligendi enim eum sit tempore esse accusantium ab, quia vel aliquid at architecto accusamus suscipit minima repellendus error.</p>
              <div className="author-box">
                <h5 className="author">lorem yes</h5>
                <p className="date">Jan 17, 2022</p>
              </div>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div className="recent-blog-box shadow">
            <figure className="img-box">
              <img src="" alt="image" />
            </figure>
            <div className="content-box">
              <a href="#n" className="tag-name">#tag1</a>
              <a href='#n' className="blog-title">Building microservices with Dropwizard, MongoDB & Docker</a>
              <p className="blog-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum recusandae facilis delectus eligendi enim eum sit tempore esse accusantium ab, quia vel aliquid at architecto accusamus suscipit minima repellendus error.</p>
              <div className="author-box">
                <h5 className="author">lorem yes</h5>
                <p className="date">Jan 17, 2022</p>
              </div>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div className="recent-blog-box shadow">
            <figure className="img-box">
              <img src="" alt="image" />
            </figure>
            <div className="content-box">
              <a href="#n" className="tag-name">#tag1</a>
              <a href='#n' className="blog-title">Building microservices with Dropwizard, MongoDB & Docker</a>
              <p className="blog-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum recusandae facilis delectus eligendi enim eum sit tempore esse accusantium ab, quia vel aliquid at architecto accusamus suscipit minima repellendus error.</p>
              <div className="author-box">
                <h5 className="author">lorem yes</h5>
                <p className="date">Jan 17, 2022</p>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
      {/* end of main blogs section */}
      {/* sidebar section */}
      <div className="sidebar-sec">

        <div className="content-wrapper">
          <h2 className="title">tags</h2>
          <div className="box">
            <div className="tag">
              <a href="#n">#tag1</a>
            </div>
            <div className="tag">
              <a href="#n">#tag2</a>
            </div>
            <div className="tag">
              <a href="#n">#tag3</a>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <h2 className="title">visit us</h2>
          <div className="box">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa facilis laboriosam, nemo earum pariatur consequuntur impedit porro! Expedita, commodi.</p>
            <div className="social-box">
            <a href="#" className='all-btns' aria-label='sewonet Facebook link'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className='all-btns' aria-label='sewonet Twitter link'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className='all-btns' aria-label='sewonet Instagram link'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            </div>
          </div>
        </div>
        <div className="content-wrapper newsletter">
          <h2 className="title">Newsletter</h2>
          <div className="box">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus voluptatum voluptates ratione, corrupti.</p>
            <form action="#">
              <input type="email" placeholder='email' required/>
              <input type="submit" value="subscribe" className='all-btns' />
            </form>
          </div>
        </div>

      </div>
      {/* end of sidebar section */}
      </div>
    </main>
    </>
  )
}

export default Main