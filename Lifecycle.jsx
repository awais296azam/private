import React, { useEffect, useState } from 'react'

function Lifecycle() {
    const [Counter, SetCounter] = useState(1);
    function WhenMount(){
        console.log("Component is Mounted Succesfully")
    }
    function WhenUpdate(){
        console.log("Component is Updated Succesfully")
    }
    function WhenUnMount(){
        console.log("Component is UnMounted Succesfully")
    }
    useEffect(()=>{WhenMount();},[])
    useEffect(()=>{WhenUpdate();},[Counter])
    useEffect(()=>{return()=>WhenUnMount();},[])
  return (
    <div>
        <h1 style={{color:'green'}}>Component of life cycle</h1>
        <h2>value {Counter}</h2>
        <button onClick={()=>SetCounter(Counter+1)}>Increase Value</button>
    </div>
  )
}

export default Lifecycle