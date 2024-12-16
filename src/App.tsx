import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Experience = React.lazy(() => import("./components/Experience"));
const Hero = React.lazy(() => import("./components/Hero"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Works = React.lazy(() => import("./components/Works"));
const StarsCanvas = React.lazy(() => import("./components/canvas/Stars"));
const Tech = React.lazy(() => import("./components/Tech"));
const Footer = React.lazy(() => import("./components/Footer"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
