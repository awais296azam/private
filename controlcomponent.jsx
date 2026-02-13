import React, { useState } from 'react'

function ControlComponent() {
    const [name,setName]=useState("");
     const [password,setPassword]=useState("");
      const [email,setEmail]=useState("");
      function cleardata(){
        setName("");
        setPassword("");
        setEmail("");
      }
  return (
    <>
      <div>control component</div>
      <form action=''>
        <input type="text" onChange={(event)=>setName(event.target.value)} placeholder='Enter Your Name' />
        <br></br> <br></br>

        <input type="password" onChange={(event)=>setPassword(event.target.value)} placeholder='Enter Your Password' />
        <br></br> <br></br>

        <input type="email"onChange={(event)=>setEmail(event.target.value)}  placeholder='Enter Your Email' />
        <br></br> <br></br>
        <h1>{name}  </h1>
        <h2>{password}</h2>
        <h2>{email}</h2>
        <button type='submit'>Submit</button>
        <button  type='reset' onClick={cleardata}>Reset</button>
      </form>
    </>
  )
}

export default ControlComponent