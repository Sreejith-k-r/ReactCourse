import React from 'react'
import useModel from './useModel'

const App = () => {
  const [open, handleOpen, handleClose] = useModel()
  return (
    <div>
      <button onClick={handleOpen} >Open</button>
      {open && (
        <div>
          <h1>Yeah Bro</h1>
        </div>
      )}
      <button onClick={handleClose} >Close</button>
    </div>
  )
}

export default App