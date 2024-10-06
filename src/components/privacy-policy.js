import React from 'react';
import './privacy-policy.css';
import Navbar from "./Navbar";
import { Button } from "./Button";



function Policy() {
    return (
        <>
      
      <Navbar />
    
    <div className='privacy-policy'>

    <h1>Datenschutzerklärung</h1>

    <p>
    Der Schutz Ihrer persönlichen Daten ist uns 
    sehr wichtig. Wir erheben, verarbeiten und 
    nutzen Ihre personenbezogenen Daten ausschließlich 
    gemäß den gesetzlichen Bestimmungen der Datenschutz-Grundverordnung 
    (DSGVO). Nachfolgend möchten wir Sie über die Art, den Umfang und den 
    Zweck der Erhebung und Verwendung personenbezogener Daten auf unserer 
    Website informieren.
    </p>

    <h2>1. Verantwortliche Stelle</h2>
    <p>
    Verantwortliche Stelle für die Verarbeitung der Daten ist:
    </p>
    <p>
    <strong>LUXE DRINKS AG Catering Services</strong><br />
     E-Mail: <a href="mailto:info@luxe-catering.ch">info@luxe-catering.ch</a>
    </p>

    <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
    <p>
    Wenn Sie das Kontaktformular auf unserer Website nutzen, erheben 
    und speichern wir die von Ihnen eingegebenen personenbezogenen Daten. 
    Dies sind in der Regel:
    </p>
    <ul>
    <li>Ihr Name</li>
    <li>Ihre E-Mail-Adresse</li>
    <li>Ihre Telefonnummer</li>
    <li>Nachrichtentext</li>
    <li>Datum und Uhrzeit der Anfrage</li>
    </ul>

    <h2>3. Zweck der Datenverarbeitung</h2>
    <p>
    Die Erhebung und Verarbeitung Ihrer Daten erfolgt 
    ausschließlich zu dem Zweck, Ihre Anfrage zu beantworten 
    und Sie zu kontaktieren. Ihre Daten werden nicht an Dritte 
    weitergegeben, es sei denn, wir sind gesetzlich dazu verpflichtet.
    </p>

    <h2>4. Speicherung und Löschung der Daten</h2>
    <p>
    Wir speichern Ihre personenbezogenen Daten nur so 
    lange, wie es für die Bearbeitung Ihrer Anfrage 
    erforderlich ist. Nach der abschließenden Bearbeitung 
    Ihrer Anfrage werden die Daten gelöscht, sofern keine
     gesetzlichen Aufbewahrungspflichten bestehen.
    </p>

    <h2>5. Widerruf der Einwilligung</h2>
    <p>
    Sie haben jederzeit das Recht, Ihre Einwilligung 
    zur Verarbeitung Ihrer personenbezogenen Daten zu 
    widerrufen. Bitte senden Sie dazu eine E-Mail 
    an: <a href="mailto:info@luxe-catering.ch">info@luxe-catering.ch</a>. 
    Nach Erhalt Ihres Widerrufs werden wir die Verarbeitung Ihrer Daten einstellen 
    und diese löschen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
    </p>

    <h2>6. Ihre Rechte</h2>
    <p>
    Sie haben das Recht auf:
    </p>
    <ul>
    <li>Auskunft über die von uns gespeicherten Daten</li>
    <li>Berichtigung unrichtiger Daten</li>
    <li>Löschung Ihrer Daten</li>
    <li>Einschränkung der Verarbeitung</li>
    <li>Datenübertragbarkeit</li>
    <li>Widerspruch gegen die Verarbeitung</li>
    </ul>
    <p>
    Zur Ausübung dieser Rechte können Sie uns jederzeit unter der 
    E-Mail-Adresse <a href="mailto:info@luxe-catering.ch">info@luxe-catering.ch</a> kontaktieren.
    </p>

    <h2>7. Verwendung von Cookies</h2>
    <p>
    Unsere Website verwendet Cookies, um die 
    Benutzerfreundlichkeit zu verbessern. Cookies 
    sind kleine Textdateien, die auf Ihrem Endgerät 
    gespeichert werden und die Nutzung der Website 
    erleichtern. Sie können die Speicherung von Cookies 
    in den Einstellungen Ihres Browsers verhindern. Bitte 
    beachten Sie, dass dies die Funktionalität der Website 
    beeinträchtigen kann.
    </p>

    <h2>8. Änderungen der Datenschutzerklärung</h2>
    <p>
    Wir behalten uns das Recht vor, diese Datenschutzerklärung 
    zu ändern, um sie an aktuelle rechtliche Anforderungen anzupassen 
    oder um Änderungen unserer Dienstleistungen umzusetzen. Die neue 
    Datenschutzerklärung gilt dann ab Ihrem nächsten Besuch auf unserer 
    Website.
    </p>
    <div className="policy-btns">
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--small"
        path="/kontakt"
      >
        zurück
      </Button>
      </div>

     </div> 

</>
    );
};



export default Policy;