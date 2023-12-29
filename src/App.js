import React from "react";
// import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterUser from "./Components/RegisterUser";
import Main from "./pages/Main";
import Login from '../src/Components/Login';
import Protected from "./Components/Protected";
import Header from "./Components/Header";

function App() {

  return (

    <div className="App" >
      <Header />
      <Routes>
        <Route path="*" element={<Protected />}>
          <Route path="*" element={<Main />} />
        </Route>
        <Route path='/register' element={<RegisterUser/>} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
