import React from 'react'

function Empcards({data}) {
  return (
    <div style={{border:'2px solid green',
    width: '500px',
    margin: '10px',
    padding: '10px',
    borderRadius: '10px',
    }}>
        <h1 style={{color: 'blue'}}>Empolye Cards</h1>
      <h2>Emp.Id <span style={{color:'green'}}>{data.id}</span></h2>
       <h2>Emp.Name <span style={{color:'green'}}>{data.name}</span></h2>
        <h2>Emp.Age <span style={{color:'green'}}>{data.age}</span></h2>
         <h2>Emp.Email <span style={{color:'green'}}>{data.email}</span></h2>
          <h2>Emp.Salary <span style={{color:'green'}}>{data.salary}</span></h2>
    </div>
  )
}

export default Empcards