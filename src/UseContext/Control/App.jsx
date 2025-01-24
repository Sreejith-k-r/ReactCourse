import React, { useRef } from 'react'

const App = () => {

  const inputRef = useRef();

  function HandleClick(){
    console.log(inputRef.current.value);
    
  }

  return (
    <div>
    <input ref={inputRef} />
    <button onClick={HandleClick} >Click</button>
    </div>
  )
}

export default App