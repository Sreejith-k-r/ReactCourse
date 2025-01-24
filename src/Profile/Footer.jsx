import React from 'react'
import './Nav.scss'
const Footer = () => {
  return (
    <div>
        <footer>
            <div className='foot'>
            <div className='box1'>
              <ul>
              
                <br />
                <h2 id="contact">Contact</h2>
                <br />
                <li><a href="tel:+919778383907">Call</a><br /></li>
                <li><a href="mailto:sreejithcena720@gmail.com">Email</a><br /></li>
                <li><a href="https://wa.me/+919778383907">Whatsapp</a></li>
                </ul>

            </div>

            <div className='box2'>
              <br />
              <h2>Follow Us</h2>
              <br />
              <p><a href="">Instagarm</a></p>
            </div>

            <div className='box3'>
              <br />
              <h2>Business</h2>
              <br />
              <p>Mon-Fri: 9 AM - 5 PM</p>
              <p>Sat-Sun: Closed</p>
            </div>
            </div>

          </footer>
    </div>
  )
}

export default Footer