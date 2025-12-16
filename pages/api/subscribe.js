// pages/api/subscribe.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  // Accetta solo richieste POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Nome e email richiesti' });
  }

  try {
    // Recupera le variabili d'ambiente
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER || !MAILCHIMP_AUDIENCE_ID) {
      console.error('Configurazione Mailchimp mancante');
      return res.status(500).json({ message: 'Configurazione del server incompleta' });
    }

    // Costruisci l'endpoint Mailchimp API
    const endpoint = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    // Prepara i dati per Mailchimp
    const data = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name
      }
    };

    // Configura l'autenticazione e la richiesta
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();

    // Gestisci la risposta di Mailchimp
    if (response.status >= 400) {
      // Gestisci specificamente l'errore di email già iscritta
      if (responseData.title === 'Member Exists') {
        return res.status(200).json({ 
          success: true, 
          message: 'Sei già iscritto alla nostra newsletter! Grazie!' 
        });
      }
      
      console.error('Errore Mailchimp:', responseData);
      return res.status(response.status).json({ 
        success: false, 
        message: responseData.detail || 'Errore durante l\'iscrizione' 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Iscrizione completata con successo!' 
    });
  } catch (error) {
    console.error('Errore durante l\'iscrizione:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Si è verificato un errore durante l\'iscrizione. Riprova più tardi.' 
    });
  }
}