import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProblemSolution from "./components/ProblemSolution";
import InteractiveDemo from "./components/InteractiveDemo";
import HowItWorks from "./components/HowItWorks";
import Architecture from "./components/Architecture";
import TechStack from "./components/TechStack";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#080B14]">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <InteractiveDemo />
      <HowItWorks />
      <Architecture />
      <TechStack />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
