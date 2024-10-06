import React, { useState, useEffect } from "react";
import "../../App.css";
import Navbar from "../Navbar";
import HeroInspiration from "../HeroInspiration";
import Drinks from "../Drinks";
import WhatsAppIcon from '../WhatsAppIcon';
import { useMediaQuery } from "react-responsive";

// Importing cocktail images
import Martini from '../../assets/cocktails/tinypics/Dirty_Martini.jpg';
import Gin from '../../assets/cocktails/tinypics/GinTonik.jpg';
import Margi from '../../assets/cocktails/tinypics/Margherita.jpg';
import Pina from '../../assets/cocktails/tinypics/PinaColada.jpg';
import Swim from '../../assets/cocktails/tinypics/Swimingpool.jpg';

import Horsesneck from '../../assets/cocktails/tinypics/HorsesNeck.jpg';
import Tom from '../../assets/cocktails/tinypics/Lychee_Tom_Collins.jpg';
import Island from '../../assets/cocktails/tinypics/LongIland.jpg';
import Tequila from '../../assets/cocktails/tinypics/Tequila_Sunrise.jpg';
import Moscow from '../../assets/cocktails/tinypics/MoscowMule2.jpg';
import GinF from '../../assets/cocktails/tinypics/Gin_Fizz.jpg';

import Mockarita from '../../assets/cocktails/tinypics/Pineapple_Coconut.jpg';
import Ginfizz from '../../assets/cocktails/tinypics/Elderflower.jpg';
import Smash from '../../assets/cocktails/tinypics/Blackberry.jpg';
import GinSour from '../../assets/cocktails/tinypics/campari_gin_sour.jpg';

function Inspiration() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const [klassiker] = useState([
    { 'id':'1', 'title':'Martini','img' : Martini},
    { 'id':'2', 'title':'Gin and tonic ','img' : Gin },
    { 'id':'3', 'title':'Gin Sour', 'img' : GinSour  },
    { 'id':'4', 'title':'Pina Colada', 'img' : Pina },
    { 'id':'5', 'title':'Swimmingpool', 'img' : Swim },
    { 'id':'6', 'title':'Erdbeer Margherita', 'img' : Margi },
  ]);

  const [longdrinks, setLongdrinks] = useState([
    { 'id': '2', 'title': 'Tom Collins', 'img': Tom },
    { 'id': '3', 'title': 'Longisland Icetee', 'img': Island },
  ]);

  const [specials, setSpecials] = useState([
    { 'id':'1', 'title':'pineaple coconut Mockarita','img' : Mockarita},
    { 'id':'2', 'title':'rosemary grapefruit Ginfizz','img' : Ginfizz },
    { 'id':'3', 'title':'Blackberry sage smash', 'img' : Smash },
  ]);

  useEffect(() => {
    if (isMobile) {
      setLongdrinks([        
        { 'id': '2', 'title': 'Tom Collins', 'img': Tom },
        { 'id': '3', 'title': 'Longisland Icetee', 'img': Island },
        { 'id': '1', 'title': 'Horse`s Neck', 'img': Horsesneck },
        { 'id': '6', 'title': 'Moscow Mule', 'img': Moscow },
      ]);

      setSpecials([
        { 'id': '1', 'title': 'pineaple coconut Mockarita', 'img': Mockarita },
        { 'id': '2', 'title': 'rosemary grapefruit Ginfizz', 'img': Ginfizz },
      ]);
    } else {
      setLongdrinks([
        { 'id': '1', 'title': 'Horse`s Neck', 'img': Horsesneck },
        { 'id': '2', 'title': 'Tom Collins', 'img': Tom },
        { 'id': '3', 'title': 'Longisland Icetee', 'img': Island },
        { 'id': '4', 'title': 'Gin Fizz', 'img': GinF },
        { 'id': '5', 'title': 'Tequila Sunrise', 'img': Tequila},
        { 'id': '6', 'title': 'Moscow Mule', 'img': Moscow },
      ]);

      setSpecials([
        { 'id': '1', 'title': 'pineaple coconut Mockarita','img' : Mockarita},
        { 'id': '2', 'title': 'rosemary grapefruit Ginfizz','img' : Ginfizz },
        { 'id': '3', 'title': 'Blackberry sage smash', 'img' : Smash },
      ]);
    }
  }, [isMobile]);

  return (
    <>
      <Navbar />
      <HeroInspiration />
      <Drinks klassiker={klassiker} longdrinks={longdrinks} specials={specials} />
      <WhatsAppIcon />
    </>
  );
}

export default Inspiration;
