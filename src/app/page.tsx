import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mitchelle Koech</title>
        <meta name="description" content="Crafting software at Vercel" />
      </Head>
      <main className="container">
        <div className="content">
          <h1 className="name">
            <span className="first-name">koech</span>
            <br />
            <span className="last-name">mitchelle</span>
          </h1>
          <p className="description">
            crafting softwares at ▲ Vercel
            <br />
            enjoys Cloud, Open Source...
            <br />
            <span role="img" aria-label="flag">
             🇰🇪
            </span>{' '}
            living in{' '}
            <span role="img" aria-label="Kenya flag">
              🇰🇪
            </span>{' '}
            Kenya
          </p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <footer className="footer">
          <a href="/home">/home</a>
          <a href="/projects">/projects</a>
          <a href="/uses">/uses</a>
        </footer>
      </main>
    </>
  );
}
