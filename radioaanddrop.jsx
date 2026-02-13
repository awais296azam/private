import React from 'react'

function Radioaanddrop() {
    const[Gander,setGander] = React.useState("Male");
    const[City,setCity] = React.useState("Lahore");
  return (
    <div>
        <h1>Radio Button and Drop Down</h1>
        <h3>seleck city</h3>
     <input type="Radio" checked={Gander==="Male"} onChange={(event)=>(setGander(event.target.value))} name='Gander' id='Male' value={'Male'}/>
     <label htmlFor="Male">Male</label> 
        <input type="Radio"checked={Gander==="Female"} onChange={(event)=>(setGander(event.target.value))} name='Gander' id='Female' value={'Female'} /> 
        <label htmlFor="Female">Female</label>
        <h3 style={{color:"red"}}>Gander:{Gander}</h3>
      <br></br>
      <h3>Select city</h3>
      <select value={City} onChange={(event) => setCity(event.target.value)}>
        <option value="Lahore">Lahore</option>
        <option value="Karachi">Karachi</option>
        <option value="Islamabad">Islamabad</option>
        <option value="Faisalabad">Faisalabad</option>
        <option value="KPK">KPK</option>
        <option value="Gilgit">Gilgit</option>
      </select>
      <br>
      </br>
      <h3 style={{color:"red"}}>City:{City}</h3>

    </div>

  )
}

export default Radioaanddrop