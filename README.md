# AI Meetup Biella - Landing Page

Una semplice e minimal landing page per la community AI Meetup Biella.

## Tecnologie utilizzate

- Next.js
- CSS Modules
- Mailchimp API per la gestione delle newsletter

## Requisiti

- Node.js 14.x o superiore
- npm o yarn

## Installazione

1. Clona il repository:
```bash
git clone <repository-url>
cd ai-meetup-biella
```

2. Installa le dipendenze:
```bash
npm install
# oppure
yarn install
```

3. Copia il file `.env.local.example` in `.env.local` e compila con le tue credenziali Mailchimp:
```bash
cp .env.local.example .env.local
```

4. Modifica il file `.env.local` inserendo le tue credenziali Mailchimp:
```
MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_SERVER=your_server_prefix
MAILCHIMP_AUDIENCE_ID=your_audience_list_id
```

## Configurazione Mailchimp

Per configurare correttamente l'integrazione con Mailchimp:

1. Accedi al tuo account Mailchimp
2. Vai su Account -> API Keys
3. Crea una nuova API Key se non ne hai già una
4. Trova il tuo Server Prefix (es. us1, us2, etc.) - è la parte dell'URL dopo il login: `https://{server}.admin.mailchimp.com/`
5. Vai su Audience -> Settings -> Audience name and defaults per trovare il tuo Audience ID (List ID)

## File media richiesti

Assicurati di inserire nella cartella `public` i seguenti file:

- `logo-ai-meetup-biella.svg` - Il logo principale
- `ai-meetup.ico` - La favicon
- `apple-touch-icon.png` - Icona per dispositivi Apple (180x180px)
- `favicon-32x32.png` - Favicon 32x32
- `favicon-16x16.png` - Favicon 16x16
- `android-chrome-192x192.png` - Icona per Android (192x192px)
- `android-chrome-512x512.png` - Icona per Android (512x512px)
- `social-card.png` - Immagine per la condivisione sui social media (1200x630px)

## Sviluppo

Avvia il server di sviluppo:
```bash
npm run dev
# oppure
yarn dev
```

Apri [http://localhost:3000](http://localhost:3000) nel tuo browser per vedere il risultato.

## Deployment su Vercel

Il modo più semplice per deployare questa applicazione è utilizzare [Vercel](https://vercel.com) dal creatore di Next.js.

1. Crea un account su Vercel se non ne hai già uno
2. Importa il tuo repository da GitHub, GitLab o Bitbucket
3. Aggiungi le variabili d'ambiente necessarie (stesse del file `.env.local`)
4. Fai clic su "Deploy"

## Struttura del progetto

```
├── pages/              # Pagine dell'applicazione
│   ├── _app.js         # Componente App personalizzato
│   ├── _document.js    # Documento HTML personalizzato
│   ├── index.js        # Homepage
│   ├── privacy-policy.js # Pagina della privacy policy
│   └── api/            # API routes
│       └── subscribe.js # Endpoint per l'iscrizione alla newsletter
├── public/             # File statici
├── styles/             # Fogli di stile CSS
└── package.json        # Dipendenze del progetto
```

## Licenza

Questo progetto è di proprietà di AI Meetup Biella.