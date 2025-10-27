
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

import { useEffect } from "react";
import "./App.css";
import WhatsAppChat from './components/WhatsAppChat';
import Sponsors from './components/Sponsors';

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://mainstack.me/mainstack-cdn/popup_checkout.min.js?hideBtn=true";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // cleanup
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      <About />
      <Speakers />
      <Theme />
      <WhatsNew />
      <Gallery />
      <Features />
      <Audience />
      <FAQ />
      <EventDetails />
      <Footer />
      <WhatsAppChat />

      {/* 1) Hidden "official" Mainstack button (script expects this id) */}
      <button
        id="mainstack_checkout_btn"
        style={{ display: "none" }}
        // no onClick here — the Mainstack script binds to this button
        aria-hidden="true"
      />

      {/* 2) Global hidden iframe (Mainstack may use/replace it) */}
      <iframe
        id="mainstack_checkout_iframe"
        src="https://checkout.mainstack.me/?productId=JxLGXAELVQZM&type=popup&width=410px"
        style={{
          border: 0,
          display: "none",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100000,
          height: "100%",
          width: "100%",
        }}
        allow="payment"
      ></iframe>
    </div>
  );
}

export default App;
