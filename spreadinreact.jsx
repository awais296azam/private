import React from 'react'

function spreadinreact() {
    const malestudent=['awais','azam','ali'];
    const femalestudent=['sara','maria','sadia'];
    const allstudent=[...malestudent,...femalestudent];
  return (
    <div>
        <h1>Spread Operator in React</h1>
        <p>All Students: {allstudent.join(', ')}</p>
        <h3>List of all studentss</h3>
        <ul>
            {allstudent.map((student,index)=>(
                <li key={index}>{student}</li>
            ))}
        </ul>
    </div>
  )
}

export default spreadinreact