import React from 'react'
import ContactImage from '../img/contact.png'

const Contact = () => {
  return (
    <main>
      <section className='contact'>
        <div className="section-wrapper">
          <h1 className="title">contact us</h1>
          <div className="contact-wrapper">
            <figure className="img-box">
              <img src={ContactImage} alt="Contact us image of a telephone and envelope" />
            </figure>
            <form action="#" className="contact-box">
              <div className="form-box">
                <h4>get in touch</h4>
                <input type="text" placeholder='full name'/>
                <input type="email" placeholder='your email'/>
                <textarea placeholder='your message (not more than 400 characters)' maxLength="400"></textarea>
                <button type="submit" className='all-btns'>Send message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact