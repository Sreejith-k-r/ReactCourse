import React from 'react'
import './Nav.scss'
const Nav = () => {
    function dark(){
        let body=document.body;
            body.style.background="black";
      }
      function light(){
        let body=document.body;
            body.style.background="whitesmoke";
      }
  return (
    <div>
        <nav className='navbar'>
            <ul className='list'>
              <li id='sree'>Sreejith K R</li>
                <li id='home'><a href="./Profile.jsx">Home</a></li>
                <li id='about'><a href="./About.jsx">About</a></li>
                <li id='service'><a href="./Service.jsx">Service</a></li>
                <li><button onClick={light} >Light Mode</button></li>
                <li><button onClick={dark}>Dark Mode</button></li>
                <li><a href=""><i id='bar' className="fa-solid fa-bars"></i></a></li>
                <li></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav