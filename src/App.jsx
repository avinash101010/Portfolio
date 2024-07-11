import Navbar from './components/Navbar.jsx'
import Intro from './components/Intro.jsx'
import About from './components/About.jsx'
import Technologies from './components/Technologies.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Achievements from './components/Achievements.jsx'


const App = () => {
  return (
    <div className='overflow-x-hidden overflow-y-hidden text-neutral-300 antialiased selection:bg-cyano-300 selection:text-cyano-900'>
      <div className="fixed top-0 -z-10 h-full w-full" >
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" ></div>
      </div>
      <div className="container mx-auto px-8" >
        <Navbar />
        <Intro />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />

      </div>
    </div>
  );
};

export default App;
