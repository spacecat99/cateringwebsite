import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EMAIL_SUCCESS_MSG, EMAIL_ERR_MSG, WHATSAPP_URL } from "../util/constants";

function Footer() {
  const inputRef = useRef(null);

  async function handleClick(event) {
    if (!inputRef.current.value || !event) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };
    if (!validateEmail(inputRef.current.value)) {
      toast.error("Bitte geben Sie eine gültige Email Addresse ein");
      return;
    }
    try {
      const response = await fetch(
        "/server/mail-newsletter.php",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            emailAddress: inputRef.current.value,
          }),
        }
      );
      if (response.ok) {
        toast.success(EMAIL_SUCCESS_MSG);
      } else {
        toast.error(EMAIL_ERR_MSG);
      }
    } catch (error) {
      console.error(error);
      toast.error(EMAIL_ERR_MSG);
    }
  }

  return (
    <div className="foot-container">
      <section className="foot-subscription">
        <p className="foot-subscription-heading">
          Abbonieren Sie unser Newsletter und verfolgen unsere Projekte
        </p>
        {/* <p className="footer-subscription-text">The next one could be yours!</p> */}
        <div className="input-areas">
          <form>
            <input
              ref={inputRef}
              className="foot-input"
              name="email"
              type="email"
              placeholder="Ihr Email"
            />
            <Button buttonStyle="btn--outline" onClick={handleClick}>
              Senden
            </Button>
          </form>
        </div>
      </section>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              LUXE
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">LUXE © 2024</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="https://wa.me/message/ABWH5B4RPAHLB1"
              target="_blank"
              aria-label="whatsapp"
            >
              <i class="fab fa-whatsapp" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="https://www.instagram.com/luxe.catering_service?igsh=Y2FqY3Rvc2RvdWgx"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
