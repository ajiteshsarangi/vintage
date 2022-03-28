import logo from "./1.jpg";

import "./App.css";
import LightTestimonialA from "./components/LightTestimonialA";
import LightContactC from "./components/LightContactC";
import LightFooterD from "./components/LightFooterD";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Cards from "./components/Cards";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Welcome />
      <Cards />
      <Menu />
      <LightTestimonialA />
      <LightContactC />
      <LightFooterD />
    </div>
  );
}

export default App;
