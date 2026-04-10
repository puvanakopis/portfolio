import { BrowserRouter as Router } from 'react-router-dom';
import { motion as Motion, useScroll, useSpring } from 'framer-motion';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Qualifications from './pages/Qualifications';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import FloatingHomeButton from './components/FloatingHomeButton';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <Router>
      <Motion.div
        className="fixed left-0 top-0 z-[200] h-[4px] w-full origin-left bg-[#4F4D4D]"
        style={{ scaleX }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <Motion.div
          className="absolute -left-24 top-[8%] h-[340px] w-[340px] rounded-full bg-[#4F4D4D]/10 blur-3xl"
          animate={{ x: [0, 32, -12, 0], y: [0, 24, -18, 0], scale: [1, 1.06, 0.98, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Motion.div
          className="absolute -right-32 top-[42%] h-[420px] w-[420px] rounded-full bg-[#4F4D4D]/8 blur-3xl"
          animate={{ x: [0, -26, 14, 0], y: [0, -20, 10, 0], scale: [1, 0.96, 1.04, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <Navbar />
      <Motion.div
        className="min-h-screen bg-[#F8F9FA] px-4 pt-[10vh] text-[18px] text-[#4F4D4D] [font-family:'Lora',serif] sm:px-6 md:px-10 lg:px-[8%] xl:px-[10%] md:text-[19px] lg:text-[20px]"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <main>
          <Home id="home" />
          <About id="about" />
          <Skills id="skills" />
          <Qualifications id="qualifications" />
          <Projects id="projects" />
          <Contact id="contact" />
          <FloatingHomeButton />
        </main>
        <Footer />
      </Motion.div>
    </Router>
  );
}

export default App;