import React from 'react'
import Child from './Props/Child'

const App = () => {
  const data1 = 'sreejith';
  const data2 = 'Software Engineer';

  function hand() { 
    let body = document.body;
    body.style.backgroundColor = 'red';
    body.style.color = 'white';
  }
  return (
    <div>
      <Child a={data1} b={data2} c={hand}/>
    </div>
  )
}

export default App