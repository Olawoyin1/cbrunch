// AnimatedRoutes.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from "../pages/Login";
import PageWrapper from "../components/PageWrapper";
import Register from "../pages/Register";
import Home from "../pages/Home";




export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        
        <Route
          path="/"
          element={
              <motion.div
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              >
              <Login />
            </motion.div>
          }
          />



          <Route
          path="/register"
          element={<PageWrapper><Register /></PageWrapper>}
          />


          <Route
          path="/home"
          element={<PageWrapper><Home /></PageWrapper>}
          />

        {/* <Route
          path="/about"
          element={<PageWrapper><About /></PageWrapper>}
          />
        
        <Route
          path="/blog"
          element={<PageWrapper><Blog /></PageWrapper>}
        />
        <Route
          path="/contact"
          element={<PageWrapper><Contact /></PageWrapper>}
        />
        <Route
          path="/career"
          element={<PageWrapper><Career /></PageWrapper>}
        />
        <Route
          path="/services"
          element={<PageWrapper><Services /></PageWrapper>}
        />
        <Route
          path="*"
          element={<PageWrapper><Progress /></PageWrapper>}
        />
         */}
        

        
      </Routes>
    </AnimatePresence>
    </>
  );
}
