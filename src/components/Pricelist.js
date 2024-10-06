import React from "react";
import "../App.css";
import { Button } from "./Button";
import prices from '../assets/bar_lounge.jpg';
import "./Pricelist.css";
import "./Footer.css";


function Pricelist() {
  
  return(
    <div>
    <div class="container-prices">
      <img src={prices}  />
        
        <div className="container-pricelist">
          <h2>Preisliste </h2>
          
          <hr />
          <h3>1 Drinks</h3>
          <ul>
            <li>Bier (0.33l/ 0.50l)....6.50/ 8.50 </li>
            <li>Longdrinks....11.- </li>
            <li>Cocktails....13.- </li>
            <li>Schaumweine (Champagne, Prosecco)....Preis nach Vereinbarung </li>
            <li>Weiss- und Rotwein ....Preis nach Vereinbarung </li>
            
          </ul>
          <hr />

          <h3>2 Services</h3>
          <ul>
            <li>Vorbereitung und Material....400.- </li>
            <li>Stundensatz unseres Team (2 Personen)....90.-</li>
            <li>!min. 3 Stunden!</li>
            <li></li>
          </ul>
          <hr />

          <h3>3 Transport</h3>
          <ul>
            <li>bis 30km....Gratis </li>
            <li>längere Distanzen....Preis nach Vereinbarung </li>
          </ul>
          <hr />

          <h3>4 Food and Snacks</h3>
          <ul>
            <li>Rustico-Kalteplatte (für 5 Pers.)....45.- </li>
            <li>Rustico-Kalteplatte (für 10 Pers.)....80.-</li>
            <li>Dessert Buffet p.P.....12.-</li>
           
          </ul>
          <hr />

       </div>
    </div>

      <div className="angebot-btns">
      <Button
        className="ag-btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
        path="/kontakt"
      >
        KONTAKT
      </Button>
      </div>

      </div>






  )
}

export default Pricelist;
