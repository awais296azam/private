import React from 'react'

function Currentdate() {
  const CurrentDate=new Date();
  const day=CurrentDate.getDay();
   const month=CurrentDate.getMonth() + 1;
    const year=CurrentDate.getFullYear();
  return (
    <div>
      <h1> Date & Time</h1>
      <h2>{CurrentDate.toString()}</h2>
      <h2>Date: <span style={{color:'blue'}}>{CurrentDate.toDateString()}</span></h2>
      <h2>Time{CurrentDate.toTimeString()}</h2>
      <h2>Date:{day}</h2>
      <h2>Month:{month}</h2>
      <h2>Year :{year}</h2>
      <h2>Date : {day}/{month}/{year}</h2>
    </div>
  )
}

export default Currentdate