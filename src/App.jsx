import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Qualifications from './pages/Qualifications';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Home id="home" />
          <About id="about" />
          <Skills id="skills" />
          <Qualifications id="qualifications" />
          <Projects id="projects" />
          <Contact id="contact" />
        </main>
      </div>
    </Router>
  );
}

export default App;