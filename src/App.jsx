import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IntroComponent from "./components/IntroComponent";
import Brands from "./components/Brands";
import Display from "./components/Display";
import Bestseller from "./components/BestSeller";
import Trends from "./components/Trends";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Brands />
      <IntroComponent />
      <Bestseller />
      <Display />
      <Trends />
      <Footer />
      {/* <FooterBottom /> */}
    </div>
  );
}

export default App;
