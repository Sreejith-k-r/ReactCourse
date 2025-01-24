import React, { useRef } from 'react'

const App = () => {
  const inputRef = useRef();

  function handleclick() {
    inputRef.current.focus();
    console.log(inputRef);
    console.log(inputRef.current);
    
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleclick}>Click me</button>
    </div>
  )
}

export default App