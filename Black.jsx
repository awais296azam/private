import React, { Use } from 'react'
import { useState } from 'react'
import Displaydata from './Displaydata';

function Black() {
    const[black,SetBlack]=useState(1);
  return (
    <div>
        
        <Displaydata black={black}/>
        <button onClick={()=>SetBlack(black+1)}>Increse Black</button>
    </div>
  )
}

export default Black 