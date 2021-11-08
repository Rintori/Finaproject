import Drawer from './components/Drawer'
import Login from './components/Login'
import SignUp from './components/Signup';
import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Drawer />
      <Routes>
        <Route path="/" />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
