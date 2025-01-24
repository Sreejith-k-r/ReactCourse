import React, { useState } from 'react'
import './App.css'
const App = () => {
  const image =[
    "https://cdn.pixabay.com/photo/2021/12/14/15/37/christmas-tree-6870754_640.jpg",
    "https://cdn.pixabay.com/photo/2024/03/02/07/09/car-8607713_640.jpg",
    "https://cdn.pixabay.com/photo/2024/12/05/21/57/santa-claus-9247511_640.jpg",
    "https://cdn.pixabay.com/photo/2024/08/10/04/40/beetle-8958489_640.jpg",
  ];
  const [activeindex, setActiveIndex] = useState(0);
  const handleNext = () => {
    setActiveIndex(activeindex + 1)% image.length;
  }
  const handlePrev = () => {
    setActiveIndex(activeindex - 1)% image.length;
    }
  return (
    <div className='app'>
      <div className='img'>
        <img src={image[activeindex]} alt="image"/>
      </div>
      <div className='button'>
      <button onClick={handlePrev }>Prev</button>
      <button onClick={handleNext }>Next</button>
        
      </div>
    </div>
  )
}

export default App