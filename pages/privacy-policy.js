// pages/privacy-policy.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Privacy.module.css';
import Layout from '../components/Layout';

export default function PrivacyPolicy() {
  // Dati strutturati specifici per la pagina privacy
  const privacyStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.aimeetup.it/privacy-policy/#webpage",
    "url": "https://www.aimeetup.it/privacy-policy",
    "name": "Privacy Policy | AI Meetup Italia",
    "description": "Informativa sulla privacy di AI Meetup Italia. Come raccogliamo, trattiamo e proteggiamo i tuoi dati personali durante l'utilizzo del nostro sito e servizi.",
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.aimeetup.it/#organization"
    },
    "inLanguage": "it-IT",
    "datePublished": "2025-04-10T10:00:00+00:00",
    "dateModified": "2025-04-22T10:00:00+00:00"
  };

  return (
    <Layout
      title="Privacy Policy | AI Meetup Italia"
      description="Informativa sulla privacy di AI Meetup Italia. Come raccogliamo, trattiamo e proteggiamo i tuoi dati personali durante l'utilizzo del nostro sito e servizi."
      canonicalUrl="https://www.aimeetup.it/privacy-policy"
      ogImage="https://www.aimeetup.it/social-card.png"
      structuredData={privacyStructuredData}
    >
      <div className={styles.container}>
        <Head>
          {/* Rimozione dei meta tag noindex per consentire l'indicizzazione della privacy policy */}
          {/* La privacy policy è una pagina importante che gli utenti dovrebbero poter trovare */}
        </Head>
        <main className={styles.main}>
          <div className={styles.header}>
            <Link href="/" className={styles.backLink}>
              ← Torna alla home
            </Link>
            <h1 className={styles.title}>Privacy Policy</h1>
          </div>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Informativa sulla privacy</h2>
              <p>
                La presente informativa descrive come AI Meetup Biella raccoglie e utilizza i dati personali
                forniti attraverso questo sito web in conformità con il Regolamento UE 2016/679 (GDPR).
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Titolare del trattamento</h2>
              <p>
                Il titolare del trattamento dei dati personali è AI Meetup Biella, con sede in Biella.
                Per qualsiasi informazione relativa al trattamento dei dati personali è possibile scrivere all'indirizzo email: biella@aimeetup.it
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Dati raccolti</h2>
              <p>
                Raccogliamo l'indirizzo email fornito volontariamente dall'utente attraverso il modulo di iscrizione
                alla newsletter presente sul sito web.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Finalità del trattamento</h2>
              <p>
                I dati personali raccolti sono utilizzati esclusivamente per:
              </p>
              <ul className={styles.list}>
                <li>Inviare comunicazioni relative agli eventi e alle attività di AI Meetup Biella</li>
                <li>Fornire aggiornamenti sulle iniziative della community</li>
                <li>Rispondere a eventuali richieste di informazioni</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Base giuridica del trattamento</h2>
              <p>
                La base giuridica del trattamento dei dati personali è il consenso esplicito dell'utente,
                espresso mediante l'azione positiva di iscrizione alla newsletter e l'accettazione della presente informativa.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Destinatari dei dati</h2>
              <p>
                I dati personali raccolti potranno essere condivisi con:
              </p>
              <ul className={styles.list}>
                <li>Mailchimp (The Rocket Science Group LLC), in qualità di responsabile esterno del trattamento, per l'invio delle newsletter</li>
                <li>Altri fornitori di servizi tecnici che agiscono come responsabili del trattamento per nostro conto</li>
              </ul>
              <p>
                Non condividiamo i tuoi dati personali con terze parti per finalità di marketing.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>6. Periodo di conservazione</h2>
              <p>
                Conserviamo i dati personali per il tempo necessario al raggiungimento delle finalità per cui sono stati raccolti,
                o fino alla revoca del consenso da parte dell'utente.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>7. Diritti dell'interessato</h2>
              <p>
                In qualità di interessato, hai il diritto di:
              </p>
              <ul className={styles.list}>
                <li>Accedere ai tuoi dati personali</li>
                <li>Chiedere la rettifica o la cancellazione dei dati</li>
                <li>Richiedere la limitazione del trattamento</li>
                <li>Opporti al trattamento</li>
                <li>Ricevere i dati in formato strutturato (diritto alla portabilità)</li>
                <li>Revocare il consenso in qualsiasi momento</li>
              </ul>
              <p>
                Per esercitare i tuoi diritti puoi contattarci all'indirizzo email: biella@aimeetup.it
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>8. Cookie e tecnologie simili</h2>
              <p>
                Il nostro sito web utilizza cookie tecnici necessari al corretto funzionamento del sito.
                Non utilizziamo cookie di profilazione o per finalità di marketing.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>9. Modifiche alla privacy policy</h2>
              <p>
                Ci riserviamo il diritto di modificare questa informativa sulla privacy in qualsiasi momento.
                Le modifiche saranno pubblicate su questa pagina e, se significative, ti informeremo via email.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>10. Reclami</h2>
              <p>
                Se ritieni che il trattamento dei tuoi dati personali violi il GDPR, hai il diritto di presentare un reclamo
                all'autorità garante per la protezione dei dati personali del tuo paese.
              </p>
            </section>
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerLinks}>
            <a href="https://www.linkedin.com/groups/10083428/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              LinkedIn
            </a>
            <a href="https://www.instagram.com/biella.aimeetup/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              Instagram
            </a>
            <a href="mailto:biella@aimeetup.it" className={styles.footerLink}>
              Become a partner
            </a>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} AI Meetup Biella
          </div>
        </footer>
      </div>
    </Layout>
  );
}
