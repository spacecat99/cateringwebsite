import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import logo from "./Drink_Red_high-res.webp";


function HeroSection() {
  return (
    <div className="hero-container">
      <img src={logo} alt="Logo" />

      <div className="hero-overall">
      
      <div className="hero-title">
        <h1>LUXE</h1>
        <h3>DRINKS </h3>
        <p>catering service</p>
      </div>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="/uber-uns"
          >
            ÜBER UNS
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="/inspiration"
          >
            INSPIRATION
          </Button>
        </div>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="/angebot"
          >
            ANGEBOT
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            path="/kontakt"
          >
            KONTAKT
          </Button>
         </div>
         </div>
    </div>
  );
}

export default HeroSection;
