import React from 'react'

function Inputboxdata() {
    const[val,setval]=React.useState("")
  return (
    <div>
        <h1>Input box data</h1>
        <input type="text" value={val} onChange={(event)=> setval(event.target.value)} placeholder='Enter your Name'/>
        <h1>{val}</h1>
        <button onClick={()=> setval("")}>Clear</button>
    </div>
  )
}

export default Inputboxdata