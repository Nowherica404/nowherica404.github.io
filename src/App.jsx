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
      title: 'Nowherica 404',
      nav: {
        home: 'Home',
        route66: 'Route 66',
        locations: 'Locations',
        gallery: 'Gallery',
        videos: 'Videos',
        follow: 'Follow'
      },
      hero: {
        heading: 'Nowherica 404',
        subheading: 'Route 66 Adventures & Explorations',
        cta: 'Explore'
      },
      route66: {
        title: 'Route 66',
        subtitle: 'The Mother Road',
        description: 'Route 66, known as "The Main Street of America," is a historic U.S. Route that stretches from Chicago to Santa Monica, passing through Illinois, Missouri, Kansas, Oklahoma, Texas, New Mexico, Arizona, and California.',
        routeTitle: '🚩 The Route',
        routeDesc: 'From Chicago to Santa Monica, passing through Illinois, Missouri, Kansas, Oklahoma, Texas, New Mexico, Arizona, and California.',
        experienceTitle: '🚗 The Experience',
        experienceDesc: 'Journey through authentic Americana with quirky attractions, vintage diners, and breathtaking desert landscapes.'
      },
      locations: {
        title: 'Locations',
        slingman: {
          title: 'Slingman, Arizona',
          subtitle: 'Historic Route 66 Stop',
          description: 'Known for its iconic Route 66 attractions, Slingman is a historic stop on the Mother Road featuring vintage shops, quirky diners, and strange shops.',
          attractionsTitle: '🏪 Attractions',
          attractionsDesc: 'Vintage shops, classic diners, and iconic Route 66 signs. Don\'t miss local burger joints and historic landmarks.',
          photoOpsTitle: '📸 Photo Ops',
          photoOpsDesc: 'Instagram-worthy shots with vintage signs, classic cars, and desert landscapes.'
        },
        nelson: {
          title: 'Nelson Ghost Town',
          subtitle: 'Historic Mining Community',
          description: 'A historic ghost town with preserved buildings and rich mining heritage.'
        },
        kingsman: {
          title: 'Kingsman, Arizona',
          subtitle: 'Route 66 Heritage',
          description: 'A charming Route 66 town with historic landmarks and vintage attractions.'
        }
      },
      gallery: {
        title: 'Gallery',
        description: 'Explore the colorful world of Route 66'
      },
      videos: {
        title: 'Latest Videos',
        subtitle: 'Route 66 adventures and explorations on YouTube',
        unavailable: 'Video unavailable'
      },
      social: {
        title: 'Follow Us',
        instagram: 'Instagram',
        youtube: 'YouTube'
      },
      footer: 'Nowherica 404 © 2026'
    },
    fa: {
      title: 'ناوهریکا 404',
      nav: {
        home: 'خانه',
        route66: 'رت 66',
        locations: 'مکان‌ها',
        gallery: 'گالری',
        videos: 'ویدیوها',
        follow: 'دنبال کنید'
      },
      hero: {
        heading: 'ناوهریکا 404',
        subheading: 'ماجراهای رت 66 و اکتشافات',
        cta: 'کاوش'
      },
      route66: {
        title: 'رت 66',
        subtitle: 'جاده مادر',
        description: 'رت 66، به عنوان "خیابان اصلی آمریکا" شناخته می‌شود، یک مسیر تاریخی آمریکایی است که از شیکاگو تا سانتا مونیکا امتداد دارد و از ایلینویز، میسوری، کانزاس، اوکلاهما، تگزاس، نیومکزیکو، آریزونا و کالیفرنیا می‌گذرد.',
        routeTitle: '🚩 مسیر',
        routeDesc: 'از شیکاگو تا سانتا مونیکا، از ایلینویز، میسوری، کانزاس، اوکلاهما، تگزاس، نیومکزیکو، آریزونا و کالیفرنیا می‌گذرد.',
        experienceTitle: '🚗 تجربه',
        experienceDesc: 'سفری در میان آمریکانای اصیل با جاذبه‌های عجیب، رستوران‌های کلاسیک و منظره‌های بیابانی خیره‌کننده.'
      },
      locations: {
        title: 'مکان‌ها',
        slingman: {
          title: 'اسلینگمن، آریزونا',
          subtitle: 'ایستگاه تاریخی رت 66',
          description: 'اسلینگمن به دلیل جاذبه‌های نمادین رت 66 شناخته می‌شود و یک ایستگاه تاریخی در جاده مادر است که دارای فروشگاه‌های کلاسیک، رستوران‌های عجیب و فروشگاه‌های غریب است.',
          attractionsTitle: '🏪 جاذبه‌ها',
          attractionsDesc: 'فروشگاه‌های کلاسیک، رستوران‌های تاریخی و نشانه‌های نمادین رت 66. از رستوران‌های برگر محلی و نقاط تاریخی غفلت نکنید.',
          photoOpsTitle: '📸 نقاط عکاسی',
          photoOpsDesc: 'عکس‌های شایسته اینستاگرام با نشانه‌های کلاسیک، ماشین‌های قدیمی و منظره‌های بیابانی.'
        },
        nelson: {
          title: 'شهر شبح نلسون',
          subtitle: 'جامعه معدن کاری تاریخی',
          description: 'یک شهر شبح تاریخی با ساختمان‌های حفظ‌شده و میراث معدن کاری غنی.'
        },
        kingsman: {
          title: 'کینگزمن، آریزونا',
          subtitle: 'میراث رت 66',
          description: 'یک شهر دلکش رت 66 با نقاط تاریخی و جاذبه‌های کلاسیک.'
        }
      },
      gallery: {
        title: 'گالری',
        description: 'دنیای رنگارنگ رت 66 را کاوش کنید'
      },
      videos: {
        title: 'آخرین ویدیوها',
        subtitle: 'ماجراهای رت 66 و اکتشافات در یوتیوب',
        unavailable: 'ویدیو در دسترس نیست'
      },
      social: {
        title: 'ما را دنبال کنید',
        instagram: 'اینستاگرام',
        youtube: 'یوتیوب'
      },
      footer: 'ناوهریکا 404 © 2026'
    }
  };

  const t = content[language];
  const isRTL = language === 'fa';

  return (
    <div className={`app ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <nav className="navbar">
        <div className="nav-logo" onClick={() => handleScroll('home')}>
          <h1>🛣️ {t.title}</h1>
        </div>
        <div className="nav-menu">
          <button onClick={() => handleScroll('home')}>{t.nav.home}</button>
          <button onClick={() => handleScroll('route66')}>{t.nav.route66}</button>
          <button onClick={() => handleScroll('locations')}>{t.nav.locations}</button>
          <button onClick={() => handleScroll('gallery')}>{t.nav.gallery}</button>
          <button onClick={() => handleScroll('videos')}>{t.nav.videos}</button>
          <button onClick={() => handleScroll('follow')}>{t.nav.follow}</button>
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
          <button className="cta-button" onClick={() => handleScroll('route66')}>{t.hero.cta}</button>
        </div>
      </section>

      <section id="route66" className="route66">
        <div className="section-container">
          <h2>{t.route66.title}</h2>
          <h3 className="subtitle">{t.route66.subtitle}</h3>
          <p className="description">{t.route66.description}</p>
          
          <div className="route-info-grid">
            <div className="route-card">
              <h3>{t.route66.routeTitle}</h3>
              <p>{t.route66.routeDesc}</p>
            </div>
            <div className="route-card">
              <h3>{t.route66.experienceTitle}</h3>
              <p>{t.route66.experienceDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="locations">
        <div className="section-container">
          <h2>{t.locations.title}</h2>
          
          <div className="location-card">
            <h3>{t.locations.slingman.title}</h3>
            <h4>{t.locations.slingman.subtitle}</h4>
            <p>{t.locations.slingman.description}</p>
            <div className="location-details">
              <div className="detail-item">
                <h4>{t.locations.slingman.attractionsTitle}</h4>
                <p>{t.locations.slingman.attractionsDesc}</p>
              </div>
              <div className="detail-item">
                <h4>{t.locations.slingman.photoOpsTitle}</h4>
                <p>{t.locations.slingman.photoOpsDesc}</p>
              </div>
            </div>
          </div>

          <div className="location-card">
            <h3>{t.locations.nelson.title}</h3>
            <h4>{t.locations.nelson.subtitle}</h4>
            <p>{t.locations.nelson.description}</p>
          </div>

          <div className="location-card">
            <h3>{t.locations.kingsman.title}</h3>
            <h4>{t.locations.kingsman.subtitle}</h4>
            <p>{t.locations.kingsman.description}</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="section-container">
          <h2>{t.gallery.title}</h2>
          <p className="description">{t.gallery.description}</p>
          <div className="gallery-grid">
            <div className="gallery-card">🏜️<br/>Desert</div>
            <div className="gallery-card">🚗<br/>Cars</div>
            <div className="gallery-card">🏪<br/>Shops</div>
            <div className="gallery-card">🌅<br/>Sunset</div>
            <div className="gallery-card">🛣️<br/>Signs</div>
            <div className="gallery-card">🎨<br/>Art</div>
          </div>
        </div>
      </section>

      <section id="videos" className="videos">
        <div className="section-container">
          <h2>{t.videos.title}</h2>
          <p className="description">{t.videos.subtitle}</p>
          
          <div className="videos-grid">
            <div className="video-container">
              <h3>اینجا کسی نمی خوابه…They Don't Sleep Here…The Haunted Truth of Denver's Oldest Cemetery</h3>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/LZxvZICG21Q"
                title="They Don't Sleep Here…The Haunted Truth of Denver's Oldest Cemetery"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
            
            <div className="video-container">
              <h3>The Lafayette Shadow That Never Left</h3>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/3UvAtbh3vzc"
                title="The Lafayette Shadow That Never Left"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="follow" className="social">
        <div className="section-container">
          <h2>{t.social.title}</h2>
          <div className="social-links">
            <a href="https://instagram.com/Nowherica404" target="_blank" rel="noopener noreferrer" className="social-btn">
              📷 {t.social.instagram}
            </a>
            <a href="https://youtube.com/@nowherica404" target="_blank" rel="noopener noreferrer" className="social-btn">
              🎥 {t.social.youtube}
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
