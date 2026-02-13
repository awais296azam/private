import React, { useEffect } from 'react'

function Displaydata({black}) {
  const forBlack=()=>{
    console.log("Black Function is Running");
  }

   useEffect(()=>{
    forBlack();
   },[]);
  return (
    <div>
        <h1>Value of Black :{black}</h1>
       
    </div>
  )
}

export default Displaydata