import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Instagram, MapPin, Menu, Sparkles, X } from 'lucide-react'
import Gallery from './Gallery'
import { prices, services } from './content'

const instagramUrl = 'https://instagram.com/chellah_nailed_it'
const tiktokUrl = 'https://tiktok.com/@chellah_nailedit'

function Brand() {
  return <a className="brand" href="#top" aria-label="Chellah Nailed It home"><img src="/assets/crown.png" alt="" /><span>Chellah</span><small>Nailed It</small></a>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header id="top" className="site-header">
        <div className="shell nav-shell">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#services">Services</a><a href="#work">Work</a><a href="#prices">Prices</a><a href="#visit">Visit</a>
          </nav>
          <a className="nav-cta" href={instagramUrl} target="_blank" rel="noreferrer">Book on Instagram <ArrowUpRight size={16} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen}><Menu /></button>
        </div>
        <div className={menuOpen ? 'mobile-menu open' : 'mobile-menu'} aria-hidden={!menuOpen}>
          <button onClick={closeMenu} aria-label="Close menu"><X /></button>
          <nav aria-label="Mobile navigation">
            {['services', 'work', 'prices', 'visit'].map((item) => <a key={item} href={`#${item}`} onClick={closeMenu}>{item}</a>)}
          </nav>
          <a href={instagramUrl} target="_blank" rel="noreferrer">Book on Instagram <ArrowUpRight /></a>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={15} /> Nails · Braids · Locs</p>
            <h1 id="hero-title">Wear your<br /><em>confidence.</em></h1>
            <p className="hero-intro">Expressive nail art and considered hair styling, shaped around you.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={instagramUrl} target="_blank" rel="noreferrer">Request a booking <ArrowUpRight size={18} /></a>
              <a className="text-link" href="#work">Explore the work <ArrowDownRight size={18} /></a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img className="hero-image" src="/assets/heroBg.png" alt="Beauty look featuring styled hair and purple-and-gold nails" fetchPriority="high" />
            <div className="hero-note"><span>From</span><strong>KSh 400</strong><small>See full price menu below</small></div>
          </div>
          <p className="hero-index">CNI — 2026</p>
        </section>

        <section id="services" className="section services" aria-labelledby="services-title">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">The edit</p>
              <h2 id="services-title">Beauty, with intention.</h2>
              <p>Choose a direction, then make it your own.</p>
            </div>
            <div className="service-list">
              {services.map((service, index) => <article key={service.name}><span>0{index + 1}</span><div><h3>{service.name}</h3><p>{service.detail}</p></div><ArrowDownRight aria-hidden="true" /></article>)}
            </div>
          </div>
        </section>

        <Gallery />

        <section id="prices" className="section prices" aria-labelledby="prices-title">
          <div className="shell price-layout">
            <div className="section-heading sticky-heading">
              <p className="eyebrow">Price menu</p>
              <h2 id="prices-title">Clear prices.<br />Your choice.</h2>
              <p>Custom designs and extra nail art may vary. Ask Chellah for a quote before your appointment.</p>
            </div>
            <div className="price-table">
              {prices.map((item) => <div className="price-row" key={item.name}><small>{item.group}</small><span>{item.name}</span><strong>{item.price}</strong></div>)}
            </div>
          </div>
        </section>

        <section id="visit" className="visit" aria-labelledby="visit-title">
          <div className="visit-art"><img src="/assets/04c195fd851adfe31024d2994aca18cb.png" alt="Colourful nail design by Chellah Nailed It" loading="lazy" /></div>
          <div className="visit-copy">
            <p className="eyebrow">Come through</p>
            <h2 id="visit-title">Your next look starts here.</h2>
            <div className="address"><MapPin aria-hidden="true" /><p><strong>Shop 41, upstairs</strong><br />Juakali, by the containers</p></div>
            <p className="booking-note">For availability and appointment details, message Chellah directly on Instagram.</p>
            <div className="visit-links">
              <a className="button button-light" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={18} /> @chellah_nailed_it</a>
              <a className="text-link light" href={tiktokUrl} target="_blank" rel="noreferrer">TikTok @chellah_nailedit <ArrowUpRight size={18} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="shell footer-inner"><Brand /><p>Beauty that feels like you.</p><div><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a><a href={tiktokUrl} target="_blank" rel="noreferrer">TikTok</a></div><small>© 2026 Chellah Nailed It</small></div></footer>
    </>
  )
}
