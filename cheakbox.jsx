import React, { useState } from 'react'

function Cheakbox() {
  const [hobby, setHobby] = useState([]);
  
  const handleHobbyChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setHobby([...hobby, value]);
    } else {
      setHobby(hobby.filter(item => item !== value));
    }
  }
  
  return (
    <div>
        <h2>select your hobby</h2>
        <input type="checkbox" id='cooking' value='cooking' onChange={handleHobbyChange}/>  
        <label htmlFor="cooking">cooking</label> 
        <br></br>
        <input type="checkbox" id='reading' value='reading' onChange={handleHobbyChange}/>  
        <label htmlFor="reading">reading</label> 
        <br></br>
        <input type="checkbox" id='coding' value='coding' onChange={handleHobbyChange}/>  
        <label htmlFor="coding">coding</label> 
        <br></br>
        <input type="checkbox" id='gaming' value='gaming' onChange={handleHobbyChange}/>  
        <label htmlFor="gaming">gaming</label> 
        <br></br>
        <input type="checkbox" id='traveling' value='traveling' onChange={handleHobbyChange}/>  
        <label htmlFor="traveling">traveling</label> 
        <br></br>
        <h3>Selected Hobbies: {hobby.length > 0 ? hobby.join(', ') : 'None'}</h3>
    </div>
  )
}

export default Cheakbox