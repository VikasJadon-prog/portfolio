import React from 'react';
import About from '../pages/About';
import Service from '../pages/Service';
import Portifolio from '../pages/Portifolio';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Footer from '../Components/Footer';
import { useEffect, useState } from 'react';

const designation = [
  'JS Developer.', 'UI/UX Designer.', 'Content Writter.'
]
const Home = () => {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (index === designation.length - 1) return
    setTimeout(() => {
      setIndex(index + 1)
    }, 1000);
  }, [index])
  return (
    <>
      <div className='home'>
        <div className="home-Container">
          <div className='home-Container-Inner'>
            <span>WELCOME TO MY WORLD</span>
            <h1 className="home-Container-Title">Hi,Im jone Doe
              <br />
            </h1>
            <h1 className='home-Container-Designation'>{designation[index]}</h1>
            <h2 className='home-Container-Country'>based in USA.</h2>
          </div>
        </div>
      </div>
      <div>
        <About />
        <Service />
        <Portifolio />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Home;
