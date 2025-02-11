// //import logo from './logo.svg';
// import React, { useEffect, useState } from 'react';
// // import Child from './components/child'
// import './App.css';
// // import { AgeCounter } from './components/ageCounter';
// // import projectOneDisplay from './components/projectOneDisplay';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import { Home } from './components/home'; 
// import { About } from './components/about';
// import { Nested } from './components/nested';
// function App() {
//   const[loaded,setLoaded]=useState(true)
//   useEffect(()=>{
//       //  setTimeout(()=>{
//       //    setLoaded(false)
//       //  },10000)
//   },[])
//   return (
//     <>
//     //
//     {/* <Child  msg='i am from parent' data='Diwakar'/> */}
//     {/* <div className="App">

//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//     <div>
//     </div> */}
//     {/* <AgeCounter /> */}
//     {/* <projectOneDisplay/> */}

    
//   <Router>
//     <div style={{display: "flex",justifyContent:"space-between"}}>
//       <div>
//           I AM STATIC
//       </div>
//       <div>
//       <Routes>
//       <Route path="/Home" element={<Home/>}>
//             <Route path="/Home/nested" element={<Nested/>}/>

//       </Route>
//       <Route path="/About" element={<About/>}/>
//       <Route path="*" element={<>not found</>}/>
//     </Routes>
//       </div>

    

   
//     </div>
//   </Router>


//     </>
//   );
// }

// export default App;




// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
// import Header from './components/header';
// import Sidebar from './components/sidebar';
// import {Home} from './components/home';
// import {About} from './components/about';
// import { Login } from './components/login';
// import {DataProvider} from './context/newContext';
// import { Auth } from './Hoc/Auth';

// import Contact from './components/Contact';


// const App = () => {
//   const [count, setCount] = useState(0);
//   const [childVal] = useState('to child');
//   const add = () => setCount(count + 1)
//   return (
    

    // <DataProvider>
    
    
    // <Router>
    //   <div style={{ display: 'flex' }}>
    //     {/* Sidebar */}
    //     <Sidebar />

    //     <div style={{ flex: 1 }}>
    //       {/* Header */}
    //       <Header />

    //       {/* Main Content Area */}
    //       <div style={{ padding: '20px' }}>
    //         <Routes>
    //           <Route path="/home" element={<Auth element={<Home/>}/>}/>
    //           <Route path="/about" element={<About />} />
    //           {/* <Route path="/contact" element={<Contact />} /> */}
    //           {/* <Redirect   path="*"
    //                 element={<Navigate to="/home" replace />}/>  */}

    //           <Route path="*" element={<Navigate to="/login" replace />}/>
    //           <Route path='/login' element={<Login/>}/>
    //         </Routes>
    //       </div>
    //     </div>
    //   </div>
    // </Router>
    //  </DataProvider>
//     <>
//     <button onClick={add} >Add App : {count}</button>
//     <Expensive data={childVal} />
//     </>
//   );
// };
// export default App




import {useCallback, useState} from 'react';
import { Firebase } from './config/firebase-config';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Home from '../src/components/home';
import {DataProvider} from './context/newContext';
import Layout from './components/layout';
import Login from './components/login';

Firebase.init();
const App = () => {
  // const [data]=useState("data");
  // const [count, setCount] = useState(0)
  // const [childCount,setChildCount]=useState(0)
  // const handleClick = () => {
  //   console.log("click app")
  //   setCount(count + 1)
  // }

  // const childClick= useCallback(()=>{
  //    console.log("Child Click",count)
  //    setChildCount(childCount+1)
  // },[childCount])
  return (
    <>
      {/*<ExpensiveComponent data={data} childClick={childClick}></ExpensiveComponent>
      <button onClick={handleClick}>Click App</button>
      {count}--{childCount}*/}

 <DataProvider>
    
    
     <Router>
             <Routes>
                 <Route path='/login' element={<Login/>}/>
                 
                 <Route path="/" element={<Layout/>}>
                  <Route path="/home" element={<Home/>}/>
                    <Route path="*" element={<Navigate to="/home" replace />}/>
                  </Route> 
             </Routes>
        
     </Router>
      </DataProvider>

      {/* //useCallback */}
      {/* <Parent></Parent> */}
    </>
  );
};

export default App;