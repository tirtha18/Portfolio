import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio1 from "./components/Portfolio";
import SocialLinksSlider from "./components/SocialLinksSlider";
function App() {
  var userAgent = navigator.userAgent;
  const isMobile=userAgent.match(/iPhone|iPad|Android|Windows Phone/i);
  return (
    <div className="flex flex-col">
      <div>
      <Navbar/>
      {
        isMobile?(<div className="h-20 bg-black w-screen"></div>):(<div className="h-28 bg-black"></div>)
      }
      </div>
      <div>
      <Home/>
      {
        isMobile?(<div className="h-80 bg-gray-800 w-screen"></div>):(<div className="h-28 bg-gray-800"></div>)
      }
      </div>
      <div>
      <About/>
      {
        isMobile?(<div className="h-full bg-black w-screen"></div>):(<div className="h-28 bg-black"></div>)
      }
      </div>
      <div>
      <Portfolio1/>
      {
        isMobile?(<div className="h-80 bg-gray-800 w-screen"></div>):(<div className="h-28 bg-gray-800"></div>)
      }
      </div>
      <div>
      <Experience/>
      {
        isMobile?(<div className="h-80 bg-black w-screen"></div>):(<div className="h-28 bg-black"></div>)
      }
      </div>
      <Contact/>
      <SocialLinksSlider/>
    </div>
  );
}

export default App;
