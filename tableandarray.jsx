import React from 'react'
import Empcards from './empcards'

function Tableandarray() {
    const empInfo=[
        {
            id: '1',
            name: 'Awais Azam',
            age: 22,  
            email: 'awais273@GamepadHapticActuatorl.com',
            salary: 50000
        },
        {
            id: '2',
            name: 'Azam',
            age: 23,  
            email: 'azam273@GamepadHapticActuatorl.com',
            salary: 60000
        },
        {
            id: '3',
            name: 'Ali',
            age: 24,  
            email: 'ali273@GamepadHapticActuatorl.com',
            salary: 70000
        },
        {
            id: '4',
            name: 'zohaib',
            age: 22,  
            email: 'zohaib273@GamepadHapticActuatorl.com',
            salary: 50000
        },
         {
            id: '5',
            name: 'azeem',
            age: 22,  
            email: 'azeem273@GamepadHapticActuatorl.com',
            salary: 50000
        },
         {
            id: '6',
            name: 'faiz',
            age: 22,  
            email: 'faiz273@GamepadHapticActuatorl.com',
            salary: 50000
        }
    ]
  return (
    <div>
        <h1>Array data with props</h1>
       { 
        empInfo.map((user)=>(
            <Empcards data={user}/>
            ))
            }
       
    </div>
  )
}

export default Tableandarray