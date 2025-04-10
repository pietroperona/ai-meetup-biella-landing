import { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [formStatus, setFormStatus] = useState({ message: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !privacyAccepted) {
      setFormStatus({
        message: 'Per favore, inserisci l\'email e accetta la privacy policy.',
        isError: true
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Utilizziamo direttamente l'endpoint di Mailchimp
      // NOTA: Questa soluzione richiede CORS abilitato sul tuo dominio in Mailchimp
      // In alternativa, puoi usare un servizio serverless come Netlify Functions
      
      const MAILCHIMP_URL = 'https://formspree.io/f/xdorkkbo'; // Usa Formspree come alternativa semplice
      
      const response = await fetch(MAILCHIMP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          email: email,
          formName: 'newsletter-signup'
        })
      });
      
      if (response.ok) {
        setFormStatus({
          message: 'Grazie per l\'iscrizione! Ti terremo aggiornato sui prossimi eventi.',
          isError: false
        });
        setEmail('');
        setPrivacyAccepted(false);
      } else {
        throw new Error('Si è verificato un errore durante l\'iscrizione.');
      }
    } catch (error) {
      setFormStatus({
        message: error.message || 'Si è verificato un errore. Riprova più tardi.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="inputGroup">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="La tua email"
          className="emailInput"
          required
        />
      </div>
      
      <div className="checkboxGroup">
        <input
          type="checkbox"
          id="privacy"
          checked={privacyAccepted}
          onChange={(e) => setPrivacyAccepted(e.target.checked)}
          className="checkbox"
          required
        />
        <label htmlFor="privacy" className="privacyLabel">
          Acconsento al trattamento dei miei dati personali come descritto nella <a href="/privacy-policy" className="privacyLink">Privacy Policy</a>
        </label>
      </div>
      
      {formStatus.message && (
        <div className={`formMessage ${formStatus.isError ? 'errorMessage' : 'successMessage'}`}>
          {formStatus.message}
        </div>
      )}
      
      <button 
        type="submit" 
        className="submitButton"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Iscrizione in corso...' : 'Iscriviti'}
      </button>
    </form>
  );
}