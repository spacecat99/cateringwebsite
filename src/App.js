import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./components/pages/Home";
import Uberuns from "./components/pages/Uberuns";

import Footer from "./components/Footer";
import Angebot from "./components/pages/Angebot";
import Inspiration from "./components/pages/Inspiration";
import Kontakt from "./components/pages/Kontakt";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Policy from "./components/privacy-policy";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/uber-uns" exact element={<Uberuns />} />
          <Route path="/kontakt" exact element={<Kontakt />} />
          <Route path="/angebot" exact element={<Angebot />} />
          <Route path="/inspiration" exact element={<Inspiration />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/privacy-policy" exact element={<Policy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
