import React from 'react';
import Navbar from './Components/navbar';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Service from './Components/pages/Service';
import Portfolio from './Components/pages/Portifolio';
import Blog from './Components/pages/Blog';
import Contact from './Components/pages/Contact';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='Right-header' style={{marginLeft:50}}>
      <img src="https://trydo.rainbowit.net/assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" style={{height:"50px"}}/>
      <div className='navbar'>
    <Router>
    <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="portifolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
      </div>
      </div>
      <div className='Left-Header'>

      </div>
      </header>
    </div>
  );
}

export default App;
