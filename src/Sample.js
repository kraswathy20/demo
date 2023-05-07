import React, { useState } from 'react'
import './Sample.css'

function Sample() {
    var [number,setNumber]=useState(100)
    function changeValue(){
        setNumber(number+1)
    }
  return (
    <>
        <h2>Hi my react project !!  tun tun tun!!!</h2>
        <h1>{number}</h1>
        <button onClick={changeValue}>click</button>

    </>
  )
}


export default Sample 