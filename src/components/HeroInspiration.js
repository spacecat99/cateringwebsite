import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import inspo from "../assets/bartending_basics_tips_tricks.jpg";

function HeroInspiration() {
  return (
    <div className="hero-container-inspo">

      <div className="video1">
        <video src='/videos/luxe-video-small.mp4' autoPlay loop muted />
      </div>
      <div className="video2">
      <video src='/videos/luxe-video-phone.mp4' autoPlay loop muted playsInline/>
      </div>

      <div className="hero-overall">

        <div className="hero-title">
          <h2>COCKTAILS</h2>
          <p> Auswahl unseren lieblings Drinks</p>
        </div>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="/kontakt"
          >
            KONTAKT
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="/angebot"
          >
            ANGEBOT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroInspiration;
