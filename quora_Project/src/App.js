import './App.css';
import React from 'react';
 
import Navbar from './component/Navbar';
import Sidebardetails from './pages/Sidebardetails';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Following from './pages/Following';
import Answer from './pages/Answer';
import Spaces from './pages/Spaces';
import Error from './component/Error'
import Notification from './pages/Notification';
import {useState} from "react";

function App() {
  const [theme,setTheme] = useState(true);
  let color = theme ? "white": "black"
  console.log(color)
 
 
  return (
    <div className="App" style={{backgroundColor: color}}>
      <Navbar setTheme={setTheme}/>
       
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Following" element={<Following/>}/>
        <Route path="/Answer" element={<Answer/>}/>
        <Route path="/Spaces" element={<Spaces/>}/>
        <Route path="/Notification" element={<Notification/>}/>
       
        <Route path="/Sidebardetails/:names" element={<Sidebardetails/>} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    
 
      </div>
  );
}

export default App;
