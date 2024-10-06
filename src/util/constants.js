import inspo from '../assets/Dink_redandgreen.jpg';
import uber from "../assets/bartending_basics_tips_tricks.jpg";
import angebot from '../assets/Drink_Orange.jpg';
import kontakt from '../assets/jpg_12.jpg';

export const NAVIGATION_MAP_LIST = [
  { id: '1', title: 'inspiration', img: inspo, site: '/inspiration' },
  { id: '2', title: 'über uns', img: uber, site: '/uber-uns' },
  { id: '3', title: 'angebot', img: angebot, site: '/angebot' },
  { id: '4', title: 'kontakt', img: kontakt, site: '/kontakt' },
];

export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=0123456789";

export const EMAIL_NEWSLETTER_URL = "https://luxe-catering.ch/server/mail-newsletter.php";
export const EMAIL_KONTAKT_URL = "https://luxe-catering.ch/server/mail.php";

export const EMAIL_SUCCESS_MSG =
  "Ihr Email wurde erfolgreich übermittelt. Danke!";
export const EMAIL_ERR_MSG =
  "Ihr Email konnte nicht übermittelt werden. Bitte Versuchen Sie es später noch einmal.";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const scrollToElementId = (elementId) => {
  let domElement = document.getElementById(elementId);
  if (domElement) {
    domElement.scrollIntoView({ behavior: "smooth" });
  }
}

