// pages/api/subscribe.js
const fetch = require('node-fetch');

export default async function handler(req, res) {
  // Accetta solo richieste POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Email non valida' });
  }

  try {
    // Configura le tue credenziali Mailchimp
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    // Verifica che tutte le variabili d'ambiente siano definite
    if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER || !MAILCHIMP_AUDIENCE_ID) {
      console.error('Configurazione Mailchimp incompleta');
      return res.status(500).json({ message: 'Errore di configurazione del server' });
    }

    // Prepara i dati per l'API di Mailchimp
    const data = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {}
    };

    // Chiamata all'API di Mailchimp
    const response = await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`
        },
        body: JSON.stringify(data)
      }
    );

    const responseData = await response.json();

    // Gestisci i vari casi di risposta
    if (response.ok) {
      return res.status(201).json({ message: 'Iscrizione avvenuta con successo!' });
    } else if (responseData.title === 'Member Exists') {
      return res.status(400).json({ message: 'Questa email è già iscritta alla newsletter.' });
    } else {
      console.error('Errore Mailchimp:', responseData);
      return res.status(500).json({ message: 'Si è verificato un errore durante l\'iscrizione.' });
    }
  } catch (error) {
    console.error('Errore durante l\'iscrizione:', error);
    return res.status(500).json({ message: 'Si è verificato un errore. Riprova più tardi.' });
  }
}

// Aggiungi questa configurazione per evitare la pre-rendering dell'endpoint API
export const config = {
  api: {
    bodyParser: true,
  },
}