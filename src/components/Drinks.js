import React from 'react';
import './Drinks.css';


const Drinks = ({ klassiker, longdrinks, specials }) => {
    return (
      <div className='klassiker-wrapper'>
        <div className='klassiker-text-wrapper'>
          <p>
            Hier finden Sie eine kleine Auswahl an Cocktails 
            und Longdrinks, die WIR frisch und direkt vor den 
            Augen Ihrer Gäste auf IHREM Event zubereiten können. 
            Diese Liste ist nur ein Vorgeschmack, und falls Ihr 
            Lieblingsgetränk nicht aufgeführt ist, keine Sorge – 
            wir können es trotzdem besorgen. Schicken Sie uns 
            einfach eine Nachricht mit Ihren Wünschen, und wir 
            melden uns umgehend bei Ihnen zurück.
          </p>
        </div>
        
      {/* Render klassiker drinks */}
      <div className='drinks-text-wrapper'>
        <h2>unsere Klassiker </h2>        
          <div className="drinks-wrapper">
            {klassiker.map((drink) => (
              <div key={drink.id} className="drink-item">
                <div className="drinks-image-wrapper">
                  <img 
                  alt={drink.title} 
                  src={drink.img} />
                </div>
                <div className="drinks__text">
                  <h4>{drink.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      

      {/* Render longdrinks */}
      <div className='drinks-text-wrapper'>
        <h2>Long drinks </h2>        
          <div className="drinks-wrapper">
            {longdrinks.map((drink) => (
              <div key={drink.id} className="drink-item">
                <div className="drinks-image-wrapper">
                  <img alt={drink.title} src={drink.img} />
                </div>
                <div className="drinks__text">
                  <h4>{drink.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Render specials */}
      <div className='drinks-text-wrapper'>
        <h2>Specials </h2>        
          <div className="drinks-wrapper">
            {specials.map((drink) => (
              <div key={drink.id} className="drink-item">
                <div className="drinks-image-wrapper">
                  <img alt={drink.title} src={drink.img} />
                </div>
                <div className="drinks__text">
                  <h4>{drink.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
}

export default Drinks;
