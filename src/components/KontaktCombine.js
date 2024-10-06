import React from "react";
import "../App.css";
import "./KontaktText.css";
import kontaktpic from './../assets/neon_x_manzara.jpg';
import Formular from "./KontaktUs.js";
import Text from "./KontaktText.js";

function KontaktCombine() {
    return (
                    
            <div className="flex-container-kc">
                <img src={kontaktpic}  />
            <div className="left-component-kc">
                <Text />
            </div>
            <div className="right-component-kc">
                <h1>Kontakt formular</h1>
                <Formular />
            </div>
            </div>

);
};

export default KontaktCombine;
