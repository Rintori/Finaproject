import React from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from './components/Home';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import { useState, useEffect } from 'react';
import firebase from './components/services/firebase';

import Drawer from "./components/Drawer";
import Login from "./components/Login";
import SignUp from "./components/Signup";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#FFAA00",
    },
  },
});

const innerTheme = createTheme({
  palette: {
    primary: {
      main: "#00AAFF",
    },
  },
});

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }, []);

  console.log(user);
  
  return (
    <ThemeProvider theme={outerTheme}>
      <Drawer />
      <br /><br /><br />
      <ThemeProvider theme={innerTheme}>
        <Routes>
          <Route exact path="/Home" element={<Home />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
