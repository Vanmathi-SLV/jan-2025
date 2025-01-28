//import logo from './logo.svg';
import React from 'react';
import Child from './components/child'
import './App.css';
import { AgeCounter } from './components/ageCounter';

function App() {
  return (
    <>
    <Child  msg='i am from parent' data='Diwakar'/>
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
    </>
  );
}

export default App;
