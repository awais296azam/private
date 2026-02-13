import React, { useState } from 'react'
import Clock from './Clock'

function Dropdown() {
    const[tcolor,SetColor]=useState('red');
  return (
    <div>
         <h1 style={{color:'green'}}> DigitalClock Component </h1>
        <label htmlFor="Time">Select time Color</label>
        <select  id="Time" onChange={(event)=>SetColor(event.target.value)}>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
        </select>
        <Clock tcolor={tcolor}/>
    </div>
  )
}

export default Dropdown