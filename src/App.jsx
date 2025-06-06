import './styles/main.css';
// import './assets/stylesheet.css';
// import './assets/stylesheet-mobile.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div>
        <ThemeToggle />
        <Navbar />
        <main>
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;