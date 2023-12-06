import React from 'react';
import About from '../pages/About';
import Service from '../pages/Service';
import Portifolio from '../pages/Portifolio';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
    <div className='main-page' >
        <div className='home'>
     
        <div className="home-Container">
          <div className='home-Container-Inner'>
            <span>WELCOME TO MY WORLD</span>
            <h1 className="home-Container-Title">Hi,Im jone Doe
              <br />
            </h1>
            <h1 className='home-Container-Designation'>JS Developer.</h1>
            <h2 className='home-Container-Country'>based in USA.</h2>
          </div>
        </div>
        </div>
        <div className='other-pages'>
        <About />
        <Service />
        <Portifolio />
        <Blog />
        <Contact />
        <Footer />
      </div>
      </div>
      
    
      

    </>
  )
}

export default Home
