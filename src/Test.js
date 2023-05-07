import {React,useState} from 'react'
import './Test.css'

function Test() {
    var [data,setData]=useState('hai hello aswathyyyy')
  return (
    <>
        <h1>Test components</h1>
        <h1>Test components</h1>
        <h2>{data}</h2>
    </>
  )
}

export default Test