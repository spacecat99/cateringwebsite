import React from "react";
import "../App.css";
import { useState } from "react";
import "./KontaktFormular.css";
import "./Footer.css";
import { ToastContainer, toast } from "react-toastify";
import { EMAIL_SUCCESS_MSG, EMAIL_ERR_MSG } from "./../util/constants";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { de } from 'date-fns/locale/de';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

registerLocale('de', de);

function KontaktUs() {
  const [reservationDate, setreservationDate] = useState(new Date());
  const [consent, setConsent] = useState(false); // State to handle checkbox

  async function handleFormSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const formData = new FormData(event.target);
    if (!validateInput(formData)) {
      toast.error("Bitte füllen Sie alle Pflichtfelder aus und stimmen Sie der Datenschutzerklärung zu.");
      return;
    }
    const body = {};
    formData.forEach((v, k) => {
      body[k] = v;
    });
    body["reservationDate"] = reservationDate.toLocaleDateString();
    body["reservationTime"] = reservationDate.toLocaleTimeString();
    
    try {
      const response = await fetch(
        "/server/mail.php",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
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

  function validateInput(data) {
    let formPropKeys = ["name", "emailAddress", "phoneNumber", "numberOfPeople", "messageBody"];
    let dataMap = {};
    data.forEach((v, k) => {
      dataMap[k] = v;
    });
    // Ensure all form fields are filled and consent is checked
    return formPropKeys.every(el => !!dataMap[el]) && consent;
  }

  return (
    <>
      <div className="container-fluid mt-5">
        <form onSubmit={handleFormSubmit}>
          <div class="row">
            <div class="col-6 col-md-4">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className="footer-input"
                name="name"
                type="text"
                placeholder="Ihr Name"
                required
              />
            </div>
            <div class="col-6 col-md-4">
              <label htmlFor="emailAddress">Email</label>
              <input
                id="emailAddress"
                className="footer-input"
                name="emailAddress"
                type="email"
                placeholder="Ihr Email"
                required
              />
            </div>
            <div class="col-6 col-md-4">
              <label htmlFor="phoneNumber">Tel. Nummer</label>
              <input
                id="phoneNumber"
                className="footer-input"
                name="phoneNumber"
                type="text"
                placeholder="Ihre Nummer"
              />
            </div>
            <div class="col-6 col-md-4">
              <label htmlFor="reservationDate">Datum</label>
              <br />
              <DatePicker
                id="reservationDate"
                name="reservationDate"
                locale="de"
                showTimeSelect
                selected={reservationDate}
                onChange={(date) => setreservationDate(date)}
              />
            </div>
            <div class="col-6 col-md-4">
              <label htmlFor="numberOfPeople">Anzahl Gäste</label>
              <input
                id="numberOfPeople"
                className="footer-input"
                name="numberOfPeople"
                type="number"
                placeholder="1"
                required
              />
            </div>
            <div class="col-6 col-md-4">
              <label htmlFor="eventType">Art des Anlasses</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="eventType"
                  value="Standard Drink"
                  id="eventTypeStandardDrink"
                  defaultChecked
                />
                <label class="form-check-label-m" htmlFor="eventTypeStandardDrink">
                  Standard Drink Service
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="eventType"
                  value="Drink And Food"
                  id="eventTypeDrinkAndFood"
                />
                <label class="form-check-label-m" htmlFor="eventTypeDrinkAndFood">
                  Drink & Food Service
                </label>
              </div>
            </div>
            <div class="col-6">
              <label htmlFor="messageBody">Nachricht</label>
              <br />
              <textarea
                id="messageBody"
                style={{ width: "100%" }}
                className="footer-input"
                name="messageBody"
                placeholder="Ihre Nachricht"
                required
              />
            </div>
            {/* Privacy consent checkbox */}
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="privacyConsent"
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                />
                <label class="form-check-label" htmlFor="privacyConsent">
                  Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. 
                  Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht. Hinweis: Sie können Ihre Einwilligung jederzeit 
                  für die Zukunft per E-Mail an info@luxe-catering.ch widerrufen. Detaillierte Informationen zum Umgang mit Nutzerdaten 
                  finden Sie in unserer <Link to="/privacy-policy" target="_blank" >Datenschutzerklärung</Link>.
                </label>
              </div>
            </div>
            <div class="col-12">
              <button class="btn--outline btn--medium" type="submit">
                Senden
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default KontaktUs;
