import React from 'react'

function Courses({Courses}) {
  return (
    <div>
        {
            Courses.map((courses,index)=>(
            
                <div key={index}>
            <h1>Courses : {courses.coursesName}</h1>,
            <ul>
                <li>
            <h3>Duration : {courses.Duration}</h3>
                </li>
                <li>
            <h3 >Fee : {courses.Fee}</h3>
                </li>
            </ul>
            </div>
            ))
        }
    </div>
  )
}

export default Courses 