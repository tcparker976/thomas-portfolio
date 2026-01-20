import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import ErrorBoundary from './components/ErrorBoundary';

const About = lazy(() => import('./components/About'));
const TechStack = lazy(() => import('./components/TechStack'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <ErrorBoundary>
      <div>
        <Navbar />
        <main>
          <Suspense fallback={null}>
            <About />
            <TechStack />
            <Projects />
            <Contact />
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;