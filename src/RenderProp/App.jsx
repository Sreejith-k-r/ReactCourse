import React from 'react'
import Child from './Child'

const App = () => {
  return (
    <div>
        <Child
        render={(name) => {
        return (
            <div>
                <h1>{name}</h1>
            </div>
        )
        }}
    /></div>
  )
}

export default App