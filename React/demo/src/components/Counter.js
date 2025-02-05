import React, { useState, useEffect } from 'react';

function Counter(){
  const [counter, setCounter] = useState(0)

  useEffect(()=>{
    console.log("Counter Value:" , counter)
  },[counter])
  
  let addCount = ()=>{
      setCounter(counter + 1)
  }

  let decreaseCount = () =>{
    setCounter(counter - 1)
  }

  let resetCount = () =>{
    setCounter(0)
  }

  return (
    <div>
      <h1>Counter: {counter} </h1>

      <button onClick={addCount}> Increment</button>
      <button onClick={decreaseCount}> Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>      
  );
}

export default Counter