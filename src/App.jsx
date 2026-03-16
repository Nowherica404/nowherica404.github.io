import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [language, setLanguage] = useState('en');

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    en: {
      title: 'Route 66 Slingman',
      nav: { home: 'Home', about: 'About', gallery: 'Gallery', contact: 'Contact' },
      hero: { heading: 'Route 66 Slingman', subheading: 'Historic Arizona Adventure', cta: 'Explore' },
      about: { title: 'About Us', description: 'Located in Seligman, Arizona, Route 66 Slingman is a legendary stop on the iconic Mother Road.' },
      gallery: { title: 'Gallery', description: 'Explore the colorful world' },
      social: { title: 'Follow Us' },
      footer: 'Route 66 Slingman © 2026'
    },
    fa: {
      title: 'رت 66 اسلینگمن',
      nav: { home: 'خانه', about: 'درباره', gallery: 'گالری', contact: 'تماس' },
      hero: { heading: 'رت 66 اسلینگمن', subheading: 'ماجرای تاریخی آریزونا', cta: 'کاوش' },
      about: { title: 'درباره ما', description: 'رت 66 اسلینگمن در سلیگمن، آریزونا واقع است.' },
      gallery: { title: 'گالری', description: 'دنیای رنگارنگ را کاوش کنید' },
      social: { title: 'ما را دنبال کنید' },
      footer: 'رت 66 اسلینگمن © 2026'
    }
  };

  const t = content[language];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-logo" onClick={() => handleScroll('home')}>
          <h1>🛣️ {t.title}</h1>
        </div>
        <div className="nav-menu">
          <button onClick={() => handleScroll('home')}>{t.nav.home}</button>
          <button onClick={() => handleScroll('about')}>{t.nav.about}</button>
          <button onClick={() => handleScroll('gallery')}>{t.nav.gallery}</button>
          <button onClick={() => handleScroll('contact')}>{t.nav.contact}</button>
        </div>
        <div className="language-toggle">
          <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
          <button className={language === 'fa' ? 'active' : ''} onClick={() => setLanguage('fa')}>فا</button>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h2>{t.hero.heading}</h2>
          <p>{t.hero.subheading}</p>
          <button className="cta-button" onClick={() => handleScroll('gallery')}>{t.hero.cta}</button>
        </div>
      </section>

      <section id="about" className="about">
        <h2>{t.about.title}</h2>
        <p>{t.about.description}</p>
        <div className="highlights">
          <div className="card">✨ Historic Route 66</div>
          <div className="card">🎨 Vintage Americana</div>
          <div className="card">📍 Seligman, AZ</div>
          <div className="card">🚗 Road Trip Hub</div>
          <div className="card">🛍️ Shopping</div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <h2>{t.gallery.title}</h2>
        <p>{t.gallery.description}</p>
        <div className="gallery-grid">
          <div className="gallery-card">🏜️<br/>Desert</div>
          <div className="gallery-card">🚗<br/>Cars</div>
          <div className="gallery-card">🏪<br/>Shops</div>
          <div className="gallery-card">🌅<br/>Sunset</div>
          <div className="gallery-card">🛣️<br/>Signs</div>
          <div className="gallery-card">🎨<br/>Art</div>
        </div>
      </section>

      <section id="contact" className="social">
        <h2>{t.social.title}</h2>
        <div className="social-links">
          <a href="https://instagram.com/Nowherica404" target="_blank" rel="noopener noreferrer" className="social-btn">📷 Instagram</a>
          <a href="https://youtube.com/@nowherica404" target="_blank" rel="noopener noreferrer" className="social-btn">🎥 YouTube</a>
        </div>
      </section>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
