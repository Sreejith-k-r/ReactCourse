import React, { useState } from 'react';

const App = () => {

    const [data, setdata] = useState(['Shree','kavi','rino']);

  return (
    <div>
      <h1>{data.length}Today's Bday</h1>
      {data.map((item, idex) => {
        return <div key={item}>{item}</div>;
      })}
      <button onClick={()=>setdata([])}>clear</button>
    </div>

    );
};

export default App


// App.jsx
//-------------------
// import React from 'react'
// import UseState  from './State/UseState'
// const App = () => {
//   return (
//     <div>
//       <UseState/>
//     </div>
//   )
// }

// export default App