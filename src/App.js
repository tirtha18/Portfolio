import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio1 from "./components/Portfolio";
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio1/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
