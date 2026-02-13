import React, { useEffect, useState } from 'react'

function Clock({tcolor}) {
const[time,SetTime]=useState(new Date());
    useEffect(()=>{
        const IntervalID=setInterval(() =>{SetTime(new Date())},1000);
        return()=>clearInterval(IntervalID);
    },[]);

    

  return ( 
    <div>
       
        <h1 style={{color:'green'}}>Digital Clock</h1>
        <h1 style={{
            color:tcolor,
            backgroundColor:'yellow',
            width:'270px',
            padding:'10px',
            borderRadius:'5px',
    
        }}>
        {time.toLocaleTimeString()}</h1>
    </div>
  )
}

export default Clock