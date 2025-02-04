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




import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';
import {Home} from './components/home';
import {About} from './components/about';
// import Contact from './components/Contact';


const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar />

        <div style={{ flex: 1 }}>
          {/* Header */}
          <Header />

          {/* Main Content Area */}
          <div style={{ padding: '20px' }}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
              {/* <Redirect   path="*"
                    element={<Navigate to="/home" replace />}/>  */}

              <Route path="*" element={<Navigate to="/home" replace />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default App