import React from 'react'

const Child = ({a, b, c}) => {
  return (
    <div>
      <h1>My Name Is {a}</h1>
      <h1>I an {b}</h1>
      <button onClick={c}>click</button>
    </div>
  )
}

export default Child
