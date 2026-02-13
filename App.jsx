import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Compo, { City } from './Compo'
import Wilde from './Wilde'
import Jscode from './Jscode'
import Eventfunction from './Eventfunction'
import Assignment from './Assignment'
import Arraywithprop from './Arraywithprop'
import Usestateprpos from './Usestateprpos'
import Propdefaultvalue from './Propdefaultvalue'
import Inputboxdata from './inputboxdata'
import ControlComponent from './controlcomponent'
import Spreadinreact from './spreadinreact'
import Cheakbox from './cheakbox'
import Radioanddrop from './radioaanddrop'
import Tableandarray from './tableandarray'
import Nestedloop from './nestedloop'
import Useeffect from './Currentdate'
import Currentdate from './Currentdate'

import Dropdown from './Dropdown'
import Black from './Black'
import Lifecycle from './Lifecycle'
import InlineStyle from './InlineStyle'
import Produduts from './Produduts'
import Studentcard from './Studentcard'
import Stylecomp from './Stylecomp'



function App() {
  const [Display, SetDisplay] = useState(true);
  const [count, setCount] = useState(0)
  let Univeristy= ['UET','UMT','MUL','PU','Agri'];
const [empName,setEmpName] = useState("awais azam");
  return (
    <>
      <div>
        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      
      <Eventfunction></Eventfunction>
      <City></City>
      <Compo></Compo>
      <Wilde></Wilde>
      <Jscode></Jscode>
      <Assignment></Assignment>
      <Arraywithprop uni = {Univeristy[0]}/>
       <Arraywithprop uni = {Univeristy[1]}/>
       <Arraywithprop uni = {Univeristy[2]}/>
       <Arraywithprop uni = {Univeristy[3]}/>
       <Arraywithprop uni = {Univeristy[4]}/>
       <Usestateprpos emp={empName} setEmpName={setEmpName} />
       <button onClick={()=>setEmpName("Azam")}>Change Name</button>
       <Propdefaultvalue userName="Awais"/>
       <Propdefaultvalue userName="Azam"/>
       <Propdefaultvalue />
       <Inputboxdata></Inputboxdata>
       <ControlComponent />
    <Spreadinreact /> 
    <Cheakbox />
    <Radioanddrop />  
    <Tableandarray /> 
    <Nestedloop />
    <Currentdate />
   <Dropdown/>
   <Black/>
   <Lifecycle />
   <InlineStyle /> 
   <Produduts /> 
    <Studentcard />
    <Stylecomp />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Created by Awais Azam
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
