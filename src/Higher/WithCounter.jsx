import React, { useState } from 'react'

const WithCounter = (Counter) => {
    const [count, setCount] = useState(0);

    function handleIncreament () { 
        setCount(count + 1);
        }
        function handleDecreament () {
            setCount(count - 1);
            }
        return {
            <Counter 
            count={count} 
            handleIncreament={handleIncreament} 
            handleDecreament={handleDecreament} 
            />
        }
        return newComponent;
        }
        
        

export default WithCounter