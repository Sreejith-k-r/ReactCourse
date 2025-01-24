import React from 'react'
import './Profile.scss'
const About = () => {

  function dark(){
    let body=document.body;
        body.style.background="black";
  }
  function light(){
    let body=document.body;
        body.style.background="whitesmoke";
  }

  return (
    <div className='About'>
      <nav className='navbar'>
            <ul className='list'>
                <li id='home'><a href="./Profile.jsx">Home</a></li>
                <li id='about'><a href="./About.jsx">About</a></li>
                <li id='service'><a href="./Service.jsx">Service</a></li>
                <li><button onClick={light} >🌞</button></li>
                <li><button onClick={dark}>🌚</button></li>
                <li><a href=""><i class="fa-solid fa-bars"></i></a></li>
                <li></li>
            </ul>
        </nav>


        <div className='skill-container'>
        <h2 className='title'>Skills</h2>
          <div className='skill-list'>
            <div className='skill-item'>
              <div class="skill-name">Html</div>
              <br />
              <div className='bar'>
              <div className="process" style={{ width: "90%" }}>90%</div>
              </div>
            </div>

            <div className='skill-item'>
            <div class="skill-name">CSS</div>
              <br />
              <div className='bar'>
              <div className="process" style={{ width: "90%" }}>90%</div>
              </div>
            </div>

            <div className='skill-item'>
            <div class="skill-name">JavaScript</div>
              <br />
              <div className='bar'>
              <div className="process" style={{ width: "80%" }}>80%</div>
              </div>
            </div>

            <div className='skill-item'>
            <div class="skill-name">Sass</div>
              <br />
              <div className='bar'>
              <div className="process" style={{ width: "60%" }}>60%</div>
              </div>
            </div>

            <div className='skill-item'>
            <div class="skill-name">React</div>
              <br />
              <div className='bar'>
              <div className="process" style={{ width: "60%" }}>60%</div>
              </div>
            </div>

            <div className='skill-item'>
            <div class="skill-name">Java</div>
              <br />
              <div className='bar'>
              <div className="process" style={{ width: "80%" }}>80%</div>
              </div>
            </div>

          </div>


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

export default About
