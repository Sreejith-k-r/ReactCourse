import React, { useState } from 'react'

const Counter = (props) => {
    
  return (
    <div>
        <h1>props.count</h1>
        <button onClick={props.handleIncreament}>increament</button>
        <button onClick={props.handleDecreament}>decreament</button>
    </div>
  )
}

export default Counter