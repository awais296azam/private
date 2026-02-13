import React, { useState } from 'react'

function InlineStyle() {
  const[Grid,Setgrid]=useState(true);
    const [empStyle, SetempStyle]=useState(
     {
     border:'4px solid gray', 
    width:'200px',
    margin:'10px',
    borderRadius:'10px',
    boxShadow:'5px 5px 5px 0px gray'
    }
    );
    function setTheam(bgColor,textColor,bcolor){
     SetempStyle({...empStyle,backgroundColor:bgColor,color:textColor,borderColor:bcolor});
    }
  return (
    <>
   <h1 style={{color:'greenyellow'}}>Inline style Methood</h1>
   <button  onClick={()=>setTheam('Maroon','yellow','pink')}>Maroon Theem</button>
   <button  onClick={()=>setTheam('peach','orange','blue')}>default Theem</button>
   <button onClick={()=>Setgrid(!Grid)}>On/Off</button>
   <div style={{display : Grid?'flex':'block' ,flexWrap: 'wrap'}}>
   <div style={empStyle }>
   <img style={{width:'200px',borderTopRightRadius:'5px', borderTopLeftRadius :'5px'}} src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div style={{textAlign:'center'}}>
    <h2 style={{color :'pink'}}> Zohaib</h2>
    <h4>Web Devolper</h4>
   </div>
   </div>

   <div style={empStyle }>
   <img style={{width:'200px',borderTopRightRadius:'5px', borderTopLeftRadius :'5px'}} src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div style={{textAlign:'center'}}>
    <h2 style={{color :'pink'}}> Zohaib</h2>
    <h4>Web Devolper</h4>
   </div>
   </div>

   <div style={empStyle }>
   <img style={{width:'200px',borderTopRightRadius:'5px', borderTopLeftRadius :'5px'}} src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div style={{textAlign:'center'}}>
    <h2 style={{color :'pink'}}> Zohaib</h2>
    <h4>Web Devolper</h4>
   </div>
   </div>

   <div style={empStyle }>
   <img style={{width:'200px',borderTopRightRadius:'5px', borderTopLeftRadius :'5px'}} src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div style={{textAlign:'center'}}>
    <h2 style={{color :'pink'}}> Zohaib</h2>
    <h4>Web Devolper</h4>
   </div>
   </div>

   <div style={empStyle }>
   <img style={{width:'200px',borderTopRightRadius:'5px', borderTopLeftRadius :'5px'}} src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div style={{textAlign:'center'}}>
    <h2 style={{color :'pink'}}> Zohaib</h2>
    <h4>Web Devolper</h4>
   </div>
   </div>

   <div style={empStyle }>
   <img style={{width:'200px',borderTopRightRadius:'5px', borderTopLeftRadius :'5px'}} src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div style={{textAlign:'center'}}>
    <h2 style={{color :'pink'}}> Zohaib</h2>
    <h4>Web Devolper</h4>
   </div>
   </div>

   <div style={empStyle }>
   <img style={{width:'200px',borderTopRightRadius:'5px', borderTopLeftRadius :'5px'}} src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div style={{textAlign:'center'}}>
    <h2 style={{color :'pink'}}> Zohaib</h2>
    <h4>Web Devolper</h4>
   </div>
   </div>

   <div style={empStyle }>
   <img style={{width:'200px',borderTopRightRadius:'5px', borderTopLeftRadius :'5px'}} src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div style={{textAlign:'center'}}>
    <h2 style={{color :'pink'}}> Zohaib</h2>
    <h4>Web Devolper</h4>
   </div>
   </div>

   <div style={empStyle }>
   <img style={{width:'200px',borderTopRightRadius:'5px', borderTopLeftRadius :'5px'}} src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div style={{textAlign:'center'}}>
    <h2 style={{color :'pink'}}> Zohaib</h2>
    <h4>Web Devolper</h4>
   </div>
   </div>
   
   </div>
    </>
   
  )
}

export default InlineStyle