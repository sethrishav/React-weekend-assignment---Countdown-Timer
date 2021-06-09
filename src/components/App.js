import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [value,setvalue]=useState(0);
  let timer;
  useEffect(()=>{
  if(value>0){
  timer=setInterval(countdown,1000)
  }
    else{
    setvalue(0);
    }
    return ()=>{
    clearInterval(timer)
    }
  }[value])
  
  const changedvalue=(event)=>{
  let nvalue=Math.floor(event.target.value);
  if(nvalue>=0 && event.key==="Enter"){
  setvalue(nvalue);
  }
    else{
    setvalue(0);
    }
  }
  
  const countdown=()=>{
  setvalue(value-1);
  }
  
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={changedvalue} /> sec.
        </h1>
      </div>
      <div id="current-time">{value}</div>
    </div>
  )
}


export default App;
