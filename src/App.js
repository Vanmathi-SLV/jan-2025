//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Child from './components/child'
import './App.css';
import { AgeCounter } from './components/ageCounter';
// import projectOneDisplay from './components/projectOneDisplay';
function App() {
  const[loaded,setLoaded]=useState(true)
  useEffect(()=>{
       setTimeout(()=>{
         setLoaded(false)
       },10000)
  },[])
  return (
    <>
    {
      loaded ?
      <Child/> :"Unmounted"
    }
    {/* <Child  msg='i am from parent' data='Diwakar'/> */}
    {/* <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <div>
    </div> */}
    <AgeCounter />
    {/* <projectOneDisplay/> */}

    



    </>
  );
}

export default App;
