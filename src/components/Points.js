import React from 'react';
import './Points.css';
import longone from '../assets/Location.JPG';
import { Button } from './Button';
import { Link } from 'react-router-dom';


const Points = () => {
  return (
    
    <div className='points-container'>
      <section className='Points-subscription'>
        <h2>Wir bieten qualitativen Getränkeservice an Ihrem gewünschten Veranstaltungsort!<br></br>

        </h2>
               <ul> 
                <li>• Bereitstellung von Materialien wie Gläsern, Servietten etc.</li>

                <li>• Lieferung von Getränkeprodukten</li>

                <li>• Eisversorgung</li>

                <li>• Professionelle Barkeeper für den Service</li>

                <li>• Personalisierte Getränkekarte</li>
            </ul>

            <h3>für jeden Event</h3>

            <ul> 
                <li>• Private Partys</li>

                <li>• Geburtstagen</li>

                <li>• Hochzeiten</li>

                <li>• Taufen</li>

                <li>• Bachelor partys/ Junggesellenabschied</li>
                
                <li>• und vieles mehr ...</li>
            </ul>
        </section>

       
        
            <Button buttonStyle='btn--outline' path="/kontakt">KONTAKT</Button>
          
      

      <div className="points-image-container">
        <img src={longone} alt="Your Image" />
        </div>
      
      
    </div>

    );
};

export default Points;