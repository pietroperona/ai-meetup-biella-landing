// pages/404.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Custom404.module.css';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pagina non trovata | AI Meetup</title>
        <meta name="description" content="La pagina che stai cercando non esiste" />
        <link rel="icon" href="/ai-meetup.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <Link href="/">
            <img 
              src="/logo-ai-meetup-biella.svg" 
              alt="AI Meetup Logo" 
              className={styles.logo} 
            />
          </Link>
        </div>
        
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Pagina non trovata</h2>
          <p className={styles.description}>
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.button}>
              Torna alla Home
            </Link>
          </div>
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
          © {new Date().getFullYear()} AI Meetup
        </div>
      </footer>
    </div>
  );
}