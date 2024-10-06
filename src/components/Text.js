import React from 'react';
import './Text.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import drink from '../assets/Drinks.jpg';


function Text() {
  return (
    <div className='t-container'>
      <div className="text-container">
        <h2> Ihre Veranstaltungen <br></br>
          zu etwas Besonderem <br></br>machen!
        </h2>

        <p> BEI LUXE STEHT IHR KULINARISCHES ERLEBNIS <br>
        </br>AN ERSTER STELLE.

        </p>

        <p>
          <br></br>
          Wollen Sie einen Abend organisieren, der Ihren Gästen im Gedächtnis bleibt?
          <br />
          Möchten Sie den TEAMGEIST Ihrer Mitarbeiter durch aussergewöhnliche Aktivitäten stärken?
          <br />
          Sie organisieren einen Empfang und möchten, dass der Barservice TADELOSS, aber auch ORIGINELL ist?
          <br />
          Mit uns können Sie den Service erstellen, den Sie sich vorstellen.
          <br />
          <br />
          Lassen Sie uns gemeinsam unvergessliche Geschmacksmomente schaffen.
          Buchen Sie jetzt und erleben Sie, wie wir Ihre Veranstaltung zu ETWAS BESONDEREM MACHEN!
        </p>
      </div>
      <div className="image-container">
        <img src={drink} alt="Your Image" />
      </div>
    </div>

  );
};



export default Text;