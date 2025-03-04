import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-serif">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
