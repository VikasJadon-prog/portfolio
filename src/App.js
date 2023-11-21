import React from "react";
import Header from "./Components/pages/Header";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Service from "./Components/pages/Service";
import Portifolio from "./Components/pages/Portifolio";
import Blog from "./Components/pages/Blog";
import Contact from "./Components/pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          className="Right-header"
          style={{ marginLeft: 50, display: "flex", justifyContent: "center" }}
        >
          <img
            src="https://trydo.rainbowit.net/assets/images/logo/logo-symbol-dark.png"
            alt="Digital Agency"
            style={{ height: "50px" }}
          />
          <div className="navbar-Header">
            <Router>
              <Routes>
              <Header />
                {/* <Route path="/" exact element={<Header />}></Route> */}
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="service" element={<Service />} />
                <Route path="portifolio" element={<Portifolio />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </Router>
          </div>
        </div>
        <div className="Left-Header"></div>
      </header>
      {/* <div>
        <Home/>
      </div> */}
    </div>
  );
}

export default App;
