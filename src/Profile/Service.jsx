import React from 'react'
import './Profile.scss'

const Service = () => {
  function dark(){
    let body=document.body;
        body.style.background="black";
  }
  function light(){
    let body=document.body;
        body.style.background="whitesmoke";
  }
  return (
    <div className='Service'>
      <nav className='navbar'>
            <ul className='list'>
                <li id='home'><a href="">Home</a></li>
                <li id='about'><a href="">About</a></li>
                <li id='service'><a href="">Service</a></li>
                <li><button onClick={light} >🌞</button></li>
                <li><button onClick={dark}>🌚</button></li>
                <li><a href=""><i class="fa-solid fa-bars"></i></a></li>
                <li></li>
            </ul>
        </nav>

      <div className='ser'>
        <h1 className='title'>Our Service</h1>
        <ul className='list'>
          <li className='item'>
            <h3 className='name'>
            <>
  <span
    className="service-item-letter"
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
    }}
  >
    W
  </span>
  <span
    className="service-item-letter"
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
    }}
  >
    e
  </span>
  <span
    className="service-item-letter"
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
    }}
  >
    b
  </span>
  <span
    className="service-item-letter"
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
    }}
  ></span>
  <span
    className="service-item-letter"
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
    }}
  >
    D
  </span>
  <span
    className="service-item-letter"
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
    }}
  >
    e
  </span>
  <span
    className="service-item-letter"
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
    }}
  >
    v
  </span>
  <span
    className="service-item-letter"
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
    }}
  >
    e
  </span>
  <span
    className="service-item-letter"
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
    }}
  >
    l
  </span>
  <span
    className="service-item-letter"
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
    }}
  >
    o
  </span>
  <span
    className="service-item-letter"
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
    }}
  >
    p
  </span>
  <span
    className="service-item-letter"
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
    }}
  >
    m
  </span>
  <span
    className="service-item-letter"
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
    }}
  >
    e
  </span>
  <span
    className="service-item-letter"
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
    }}
  >
    n
  </span>
  <span
    className="service-item-letter"
    style={{
      translate: "none",
      rotate: "none",
      scale: "none",
      transform: "translate(0px, 0px)",
    }}
  >
    t
  </span>
</>

            </h3>
          </li>
        </ul>
      </div>

      <footer>
            <div className='foot'>
            <div className='box1'>
              <tr>
              <td width="33%" valign="top">
                <br />
                <h2 id="contact">Contact</h2>
                <br />
                <a href="tel:+919778383907">Call</a><br />
                <a href="mailto:sreejithcena720@gmail.com">Email</a><br />
                <a href="https://wa.me/+919778383907">Whatsapp</a>
                </td>
              </tr>

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

export default Service
