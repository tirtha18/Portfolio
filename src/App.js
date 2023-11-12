import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio1 from "./components/Portfolio";
import SocialLinksSlider from "./components/SocialLinksSlider";
import React, { useState, useEffect } from 'react';
function App() {
  console.log(window.innerHeight);
  const [isMobile, setIsMobile] = useState(window.innerHeight <= 726);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerHeight <= 726);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  
  return (
    <div className="flex flex-col bg-gray-800">
      <Navbar/>
      <Home/>
      {
        isMobile&&(<div className="h-64 w-screen bg-gray-800"></div>)
      }
      <About/>
      {
        isMobile&&(<div className="h-44 w-screen bg-black"></div>)
      }
      <Portfolio1/>
      {
        isMobile&&(<div className="h-44 w-screen bg-gray-800"></div>)
      }
      <Experience/>
      {
        isMobile&&(<div className="h-44 w-screen bg-black"></div>)
      }
      <Contact/>
      <SocialLinksSlider/>
    </div>
  );
}

export default App;
