// App.tsx
// import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Theme from "./components/Theme";
import FAQ from "./components/FAQ";
import WhatsNew from "./components/WhatsNew";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Audience from "./components/Audience";
import Speakers from "./components/Speakers";
import EventDetails from "./components/EventDetails";
// import About from "./components/About";
// import AnimatedRoutes from "./layouts/AnimatedRoutes";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Theme />
      <WhatsNew />
      <Gallery />
      <Speakers />
      <Features />
      <Audience />
      <FAQ />
      <EventDetails />
      <Footer />
      {/* <WhatsNew />
      <EventFeatures />
      <WhoShouldAttend />
      <WhyAttend />
      <Sponsors />
      <EventDetails />
      <Footer /> */}
    </div>
  );
}

export default App;
