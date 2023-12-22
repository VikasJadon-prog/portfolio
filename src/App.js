import React from "react";
// import Header from "./Components/Header";
import {  BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterUser from "./Components/RegisterUser";
import Main from "./pages/Main";
import Login from "./Components/Login";
import Protected from "./Components/Protected";
function App() {
  
  return (
    
    <div className="App" >
      <BrowserRouter>
      <Routes>
      <Route path="*" element={<Protected Component={Main} />}/>
      <Route path="/login"  element={<Login/>} />
      <Route path="/register" element={<RegisterUser/>} />
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
