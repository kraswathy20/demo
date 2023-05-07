import {React,useState} from 'react'
    
function Counter({sdata}) {
    var [counter,setCounter]=useState(0)
    // to share data inside a collection
    const users=[
        {username:"anu",age:23},
        {username:"amal",age:24}
    ]

    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        setCounter(counter-1)
    }
    function reset(){
        setCounter(0)
    }
  return (
    <>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>Increment</button> 
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}> Reset</button>
        <h1>{sdata}</h1>
        
        {
            users.map(i=>(
                <div>
                    <h4>Name: {i.username}</h4>
                    <h4>Age: {i.age}</h4>
                </div>
            ))
        }
    </>
    
  )
}

export default Counter