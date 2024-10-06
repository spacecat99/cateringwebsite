import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted or declined cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null; // Don't show the popup if not necessary

  return (
    <div style={styles.container}>
        <h2>Wir nutzen Cookies</h2>
      <p>Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
        Indem Sie fortfahren, stimmen Sie der Verwendung von Cookies zu. Cookies, 
        welche zur Betreibung der Webseite verwendet werden, können nicht abgelehnt werden.</p>
      <div style={styles.buttonContainer}>
        <button style={styles.buttonAccept} onClick={handleAccept}>
          Akzeptieren
        </button>
        <button style={styles.buttonDecline} onClick={handleDecline}>
          Ablehnen
        </button>
      </div>
    </div>
  );
};

// Basic styles for the popup
const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    zIndex: 1000,
  },
  buttonContainer: {
    marginTop: '10px',
  },
  buttonAccept: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  buttonDecline: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default CookieConsent;
