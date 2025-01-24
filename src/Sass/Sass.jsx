import React from 'react';
import './Sass.scss'; // Link SCSS styles

const Sass = () => {

  function dark(){
    let body=document.body;
        body.style.background="black";
  }
  function light(){
    let body=document.body;
        body.style.background="whitesmoke";
  }
  return (
    <div className="Sass">
      <div className="Cards">
        <div className="Header">
          <div className="Image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Prabhas_at_Saaho_Pre_release_event_%28cropped%29.jpg/640px-Prabhas_at_Saaho_Pre_release_event_%28cropped%29.jpg"
              alt="Prabhas"
            />
          </div>
          <div className="Title">
            <h1>Prabhas</h1>
            <p>Actor</p>
            </div>
          <div className="Logos">
            <i id='face' className="fa-brands fa-facebook"></i>
            <i id='x' className="fa-brands fa-twitter"></i>
            <i id='insta' className="fa-brands fa-instagram"></i>
            <i id='link' className="fa-brands fa-linkedin"></i>
          </div>
          <div className='but'>

            <button onClick={dark} className='msg'>Message</button>
            <button onClick={light} className='sub'>Subcribe</button>
            </div>
          
          <div className='like'>
          <i class="fa-regular fa-heart">22k</i>
          <i class="fa-regular fa-comment"></i>
          <i class="fa-solid fa-share"></i>
          </div>

    
        </div>
      </div>
    </div>
  );
};

export default Sass;
