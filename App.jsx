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
import Bootstrap from './Bootstrap'
import Dropddown from './Dropddown'
import Product from './Product'
import { Navbar } from 'react-bootstrap'
import NaveBar from './Navebar'
import UseRef from './UseRef'
import Uncantroledcomp from './Uncantroledcomp'
import Functionasprop from './Functionasprop '
import Parent from './Parent'
import Formststus from './Formststus'
import Deridestste from './Deridestste'
import Child1 from './Child1'
import Child2 from './Child2'
import React, { UseState } from 'react'
import ObjectState from './ObjectState'
import Actionststes from './Actionststes'
import Useidhook from './Useidhook'
import UseIdhook from './Useidhook'




let guest=0
function App() {
  const[User,Setuser]=useState('');
  const Gueste=()=>{
   guest=guest+1;
  return (
    <h1> we have {guest} guest we need {guest} cup of tea.</h1>
     );
    }

  function ShowName() {
   
    alert("This is user Name")
  }
  const [Display, SetDisplay] = useState(true);
  const [Count, SetCount] = useState(0)
  let Univeristy = ['UET', 'UMT', 'MUL', 'PU', 'Agri'];
  const [EmpName, SetEmpName] = useState("awais azam");
 
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
      <Arraywithprop />
      <Usestateprpos emp={EmpName} setEmpName={SetEmpName} />
      <button onClick={() => SetEmpName("Azam")}>Change Name</button>
      <Propdefaultvalue />
      <Propdefaultvalue />
      <Inputboxdata></Inputboxdata>
      <ControlComponent />
      <Spreadinreact />
      <Cheakbox />
      <Radioanddrop />
      <Tableandarray />
      <Nestedloop />
      <Currentdate />
      <Dropdown />
      <Black />
      <Lifecycle />
      <InlineStyle />
      <Produduts />
      <Studentcard />
      <Stylecomp />
      <NaveBar />
      <Bootstrap />
      <Dropddown />
      <Product />
      <UseRef />
      <Uncantroledcomp />
      <Functionasprop showName={ShowName} />
      <Parent />
      <Formststus />
      <Gueste />
      <Deridestste/>
      <Child1 Setuser={Setuser}/>
      <Child2 User={User}/>
      <ObjectState/>
      <Actionststes />
      <Useidhook/>
      <hr />
      <UseIdhook/>
       <hr />
       <UseIdhook/>
      <div 
      className="card"
      >
        <button onClick={() => SetCount((count) => count + 1)}>
          count is {Count}
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
