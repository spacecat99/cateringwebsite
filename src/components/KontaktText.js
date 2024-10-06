import React from "react";
import "../App.css";
import kontaktpic from './../assets/neon_x_manzara.jpg';
import "./KontaktText.css";

function KontaktText() {
    return (

    <div class="container-kontakt-info">

                       
                <div className="container-kontakt-row">

                    <div className="container-kontakt-links">
                        <h1>Liebe Besucher</h1>

                        <p>Für alle weiteren Informationen füllen 
                            Sie bitte das Kontaktformular aus oder 
                            rufen Sie uns direkt an!
                        </p>

                        <p>
                            Wir freuen uns auf Ihre Kontaktaufnahme.
                        </p>
                    </div>
                    

                    <div className="container-kontakt-rechts">

                        <h1>Kontakt</h1>
                        <p>LUXE DRINKS AG
                        <br />Catering Services 
                        <br />Valerio und Mario
                        <br />info@luxe-catering.ch
                        <br />076 841 54 02 <br /> 076 468 44 14</p>
                    </div>

                 </div>

                 <img src={kontaktpic}  />

        
    </div>

    );
};



export default KontaktText;