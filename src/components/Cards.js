import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Margherita from '../assets/cocktails/Margherita.jpg';
import Pina from '../assets/cocktails/PinaColada.jpg';
import Gin from '../assets/cocktails/GinTonik.jpg';
import Pool from '../assets/cocktails/Swimingpool.jpg';
import Martini from '../assets/cocktails/Dirty_Martini.jpg';



function Cards() {
  return (
    <div className='cards'>
      <h1>unsere klassiker!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Margherita}
              text='Erdbeer Margherita'
              label='Best seller'
              path='/services'
            />
            <CardItem
              src={Gin}
              text='Gin and Tonic'
              label='Best seller'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Pina}
              text='Pina Colada'
              label='Best seller'
              path='/services'
            />
            <CardItem
              src={Pool}
              text='Swimming Pool'
              label='Sommer Drink'
              path='/products'
            />
            <CardItem
              src={Martini}
              text='Martini'
              label='Winter Cockt'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
