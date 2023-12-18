import React from "react";
// import Header from "./Components/Header";
import {  BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterUser from "./Components/RegisterUser";
import Main from "./pages/Main";
function App() {
  
  return (
    
    <div className="App" >

      <BrowserRouter>
   <Main/>
      </BrowserRouter>
      </div>
  );
}

export default App;
