import React from "react";
// import Header from "./Components/Header";
import {  BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterUser from "./Components/RegisterUser";
import Main from "./pages/Main";
import Login from "./Components/Login";
function App() {
  
  return (
    
    <div className="App" >

      <BrowserRouter>
   <Main/>
   <Login/> 
      </BrowserRouter>
      </div>
  );
}

export default App;
