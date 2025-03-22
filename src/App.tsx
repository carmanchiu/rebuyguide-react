// App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';

function App() {
    return (
        <Router>
            <Header />
            <div>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import Profile from './components/Profile';
// import Home from './components/Home';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';


// function App() {
//     return (
//         <Router>
//             <Header>
//             </Header>
//             <div style={{display: 'flex'}}>
//                 <Sidebar/>
//                 <div style={{flexGrow: 1, padding: '20px'}}>
//                     <nav>
//                     <ul>
//                             <li>
//                                 <Link to="/">Home</Link>
//                             </li>
//                             <li>
//                                 <Link to="/profile">Profile, but I can name this anything</Link>
//                             </li>
//                         </ul>
//                     </nav>
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/profile" element={<Profile />} />
//                     </Routes>
//                 </div>
//             </div>
//         </Router>
//     );
// }

// export default App;

// STARTING BOILERPLATE
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//         <button onClick={() => setCount((count) => count - 1)}>
//           subtract count
//         </button>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
//
// export default App
