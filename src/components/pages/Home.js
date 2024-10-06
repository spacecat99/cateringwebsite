import React from "react";
import { useState } from "react";
import "../../App.css";
import { NAVIGATION_MAP_LIST, scrollToTop } from "../../util/constants";
import Action from "../Action";
import HeroSection from "../HeroSection";
import Text from "../Text";
import Points from "../Points";
import WhatsAppIcon from '../WhatsAppIcon';
import CookieConsent from "../CookieConsent";
import Kontaktform from "../KontaktUs";
import { useMediaQuery } from "react-responsive";


import inspo from '../../assets/Dink_redandgreen.jpg';
import uber from '../../assets/bartending_basics_tips_tricks.jpg';
import angebot from '../../assets/Drink_Orange.jpg';
import kontakt from '../../assets/jpg_12.jpg';

function Home() {
  const [menudata, change] = useState([
    { 'id': '1', 'title': 'inspo', 'img': inspo, 'site': '/inspiration' },
    { 'id': '2', 'title': 'über uns', 'img': uber, 'site': '/uber-uns' },
    { 'id': '3', 'title': 'angebot', 'img': angebot, 'site': '/angebot' },
    { 'id': '4', 'title': 'kontakt', 'img': kontakt, 'site': '/kontakt' },
  ]);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };// Correctly close the scrollToTop function here

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      <HeroSection />
      <Text />
      <Action menudata={NAVIGATION_MAP_LIST} scrollToTop={scrollToTop} />
      <Points />
      {isMobile && <Kontaktform />}
      <WhatsAppIcon />
      <CookieConsent />
    </>
  );
}


export default Home;
