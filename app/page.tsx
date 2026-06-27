import BookingBar from '@/components/BookingBar'

export default function Home() {
  return (
    <main>
      {/* 1. TopBar */}
      <div style={{
        background: '#0285C7',
        padding: '8px 60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-barlow), Barlow, sans-serif' }}>
          ☀ NYITVA: H-V 9:00-20:00 &nbsp;|&nbsp; TERMÁL: 10:00-21:00
        </span>
        <a href="#jegyek" style={{ color: '#FBBF24', fontSize: '13px', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-barlow), Barlow, sans-serif' }}>
          Jegyvásárlás →
        </a>
      </div>

      {/* 2. Sticky Nav */}
      <nav style={{
        background: '#FFFFFF',
        height: '72px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '0 60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/photos/logo.png" alt="Aqua-Land" style={{ height: '42px', width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#attrakciok" style={{ color: '#0F172A', textDecoration: 'none', fontSize: '15px', fontWeight: 600, fontFamily: 'var(--font-barlow), Barlow, sans-serif' }}>Attrakciók</a>
          <a href="#termal" style={{ color: '#0F172A', textDecoration: 'none', fontSize: '15px', fontWeight: 600, fontFamily: 'var(--font-barlow), Barlow, sans-serif' }}>Termál</a>
          <a href="#arak" style={{ color: '#0F172A', textDecoration: 'none', fontSize: '15px', fontWeight: 600, fontFamily: 'var(--font-barlow), Barlow, sans-serif' }}>Árak</a>
          <a href="#szallas" style={{ color: '#0F172A', textDecoration: 'none', fontSize: '15px', fontWeight: 600, fontFamily: 'var(--font-barlow), Barlow, sans-serif' }}>Szállás</a>
          <a href="#kapcsolat" style={{ color: '#0F172A', textDecoration: 'none', fontSize: '15px', fontWeight: 600, fontFamily: 'var(--font-barlow), Barlow, sans-serif' }}>Kapcsolat</a>
          <a href="#jegyek" style={{
            background: '#F97316',
            color: '#FFFFFF',
            textDecoration: 'none',
            padding: '12px 28px',
            borderRadius: '50px',
            fontSize: '15px',
            fontWeight: 700,
            fontFamily: 'var(--font-barlow), Barlow, sans-serif',
            letterSpacing: '0.02em',
          }}>
            Jegyvásárlás →
          </a>
        </div>
      </nav>

      {/* 3. Hero — height = viewport minus topbar(~36px) + nav(72px) so fold lands exactly at section bottom */}
      <section id="hero" style={{
        height: 'calc(100vh - 108px)',
        minHeight: '580px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
      }}>
        {/* Background layers */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/photos/csuszda.jpg')", backgroundSize: 'cover', backgroundPosition: 'center top' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(249,115,22,0.38)', mixBlendMode: 'multiply' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,23,42,0.72) 0%, rgba(15,23,42,0.30) 60%, rgba(15,23,42,0.10) 100%)' }} />

        {/* Hero text — absolute, upper-left, clear of booking bar */}
        <div style={{ position: 'absolute', top: '60px', left: '80px', maxWidth: '720px', zIndex: 2 }}>
          <div style={{
            display: 'inline-block',
            background: '#F97316',
            color: '#FFFFFF',
            fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            padding: '5px 14px',
            borderRadius: '50px',
            marginBottom: '18px',
          }}>
            ★ FŐSZEZÓN NYITVA
          </div>
          <h1 style={{
            fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
            fontSize: '96px',
            fontWeight: 900,
            color: '#FFFFFF',
            textTransform: 'uppercase',
            lineHeight: 0.95,
            textShadow: '0 2px 24px rgba(0,0,0,0.4)',
            marginBottom: '20px',
          }}>
            A legjobb<br />nap az évből?<br />Ma az.
          </h1>
          <p style={{
            fontSize: '18px',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '560px',
            lineHeight: 1.5,
            fontFamily: 'var(--font-barlow), Barlow, sans-serif',
            margin: 0,
          }}>
            Aquapark, termál, mozi a vízben · hozd el mindenkit, és csináljatok emlékeket.
          </p>
        </div>

        {/* BookingBar — pinned to hero bottom, glassmorphism panel */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ padding: '0 48px 20px', width: '100%', boxSizing: 'border-box' }}>
            <BookingBar />
          </div>
        </div>
      </section>

      {/* 5. Price Strip */}
      <section id="arak" style={{
        background: '#F97316',
        padding: '0 80px 20px',
        height: '72px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), 0 100%)',
      }}>
        <p style={{
          fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
          fontSize: '22px',
          fontWeight: 700,
          color: '#FFFFFF',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          margin: 0,
        }}>
          NAPI BELÉPŐ MÁR <strong style={{ color: '#FBBF24' }}>2 990 FT-TÓL</strong> · A PIHENÉS SOSEM VOLT ENNYIRE ELÉRHETŐ.
        </p>
        <a href="#arak" style={{
          background: '#FFFFFF',
          color: '#F97316',
          textDecoration: 'none',
          padding: '10px 24px',
          borderRadius: '50px',
          fontSize: '14px',
          fontWeight: 700,
          fontFamily: 'var(--font-barlow), Barlow, sans-serif',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          marginLeft: '20px',
        }}>
          Nézd meg az árakat
        </a>
      </section>

      {/* 6. Segmentation */}
      <section style={{
        background: '#0285C7',
        padding: '80px 80px 100px',
        marginTop: '-20px',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <span style={{
            fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.65)',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
          }}>
            Mindenki megtalálja a magáét
          </span>
        </div>
        <h2 style={{
          fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
          fontSize: '52px',
          fontWeight: 900,
          color: '#FFFFFF',
          textTransform: 'uppercase',
          textAlign: 'center',
          marginBottom: '48px',
        }}>
          Válaszd ki a napod!
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {[
            { img: '/photos/gyerek-paradicsom.jpg', badge: 'Gyerekeknek', title: 'Gyerekparadicsom', text: 'Csúszdák, vizes játékok, vidámság egész nap · a kicsik imádják.' },
            { img: '/photos/hero-main.jpg', badge: 'Felnőtteknek', title: 'Töltsd fel magad', text: 'Termálvíz, onsen, floating · ahol a test és az elme megpihen.' },
            { img: '/photos/people2.jpg', badge: 'Adrenalin', title: 'Nem unatkozunk itt', text: 'A legmagasabb csúszdák, a legtöbb pálya · adrenalin a tetőfokig.' },
          ].map((card, i) => (
            <div key={i} style={{
              height: '380px',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer',
            }}>
              <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.88) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px' }}>
                <div style={{
                  display: 'inline-block',
                  background: '#F97316',
                  color: '#FFFFFF',
                  fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  padding: '4px 12px',
                  borderRadius: '50px',
                  marginBottom: '10px',
                }}>
                  {card.badge}
                </div>
                <h3 style={{
                  fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-barlow), Barlow, sans-serif', lineHeight: 1.5 }}>
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Attractions */}
      <section id="attrakciok" style={{
        background: '#0F172A',
        clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)',
        marginTop: '-40px',
        padding: '120px 80px 140px',
      }}>
        <div style={{ marginBottom: '12px' }}>
          <span style={{
            fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            color: '#F97316',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
          }}>
            Ami itt vár rád
          </span>
        </div>
        <h2 style={{
          fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
          fontSize: '56px',
          fontWeight: 900,
          color: '#FBBF24',
          textTransform: 'uppercase',
          maxWidth: '700px',
          lineHeight: 1.0,
          marginBottom: '40px',
        }}>
          Ami itt vár rád · minden, ami kell.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr 1fr',
          gridTemplateRows: '260px 260px',
          gap: '16px',
        }}>
          {/* Card 1 - TALL */}
          <div style={{ gridRow: '1 / span 2', borderRadius: '12px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
            <img src="/photos/csuszda.jpg" alt="Csúszdapark" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,15,28,0.9) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
              <h3 style={{ fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif', fontSize: '24px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '8px' }}>Csúszdapark</h3>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.72)', fontFamily: 'var(--font-barlow), Barlow, sans-serif', lineHeight: 1.5, marginBottom: '12px' }}>15+ csúszda, minden korosztálynak · az első lépéstől a freefallig.</p>
              <a href="#" style={{ color: '#F97316', fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none' }}>Felfedezem →</a>
            </div>
          </div>
          {/* Card 2 */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
            <img src="/photos/termal.jpg" alt="Caracalla Termál" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,15,28,0.9) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
              <h3 style={{ fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif', fontSize: '24px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '8px' }}>Caracalla Termál</h3>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.72)', fontFamily: 'var(--font-barlow), Barlow, sans-serif', lineHeight: 1.5, marginBottom: '12px' }}>Gyógyvizes medencék · testnek és léleknek.</p>
              <a href="#" style={{ color: '#F97316', fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none' }}>Felfedezem →</a>
            </div>
          </div>
          {/* Card 3 */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
            <img src="/photos/event-aqua-cinema.jpg" alt="Aqua Cinema" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,15,28,0.9) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
              <h3 style={{ fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif', fontSize: '24px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '8px' }}>Aqua Cinema</h3>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.72)', fontFamily: 'var(--font-barlow), Barlow, sans-serif', lineHeight: 1.5, marginBottom: '12px' }}>Film a vízben · lebegj és lazíts.</p>
              <a href="#" style={{ color: '#F97316', fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none' }}>Felfedezem →</a>
            </div>
          </div>
          {/* Card 4 - wide bottom */}
          <div style={{ gridColumn: '2 / span 2', borderRadius: '12px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
            <img src="/photos/strand.jpg" alt="Beach Club" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,15,28,0.9) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
              <h3 style={{ fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif', fontSize: '24px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '8px' }}>Beach Club · Vízi Bár</h3>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.72)', fontFamily: 'var(--font-barlow), Barlow, sans-serif', lineHeight: 1.5, marginBottom: '12px' }}>Naplemente, koktél, strand.</p>
              <a href="#" style={{ color: '#F97316', fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none' }}>Felfedezem →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Social Proof */}
      <section style={{
        background: '#FBBF24',
        clipPath: 'polygon(0 0, 100% 40px, 100% 100%, 0 100%)',
        marginTop: '-40px',
        padding: '100px 80px 60px',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {[
            { num: '500 000+', label: 'látogató évente' },
            { num: '25+', label: 'éve a kedvencetek' },
            { num: '15+', label: 'attrakció' },
          ].map((item, i) => (
            <div key={i} style={{
              textAlign: 'center',
              borderLeft: i > 0 ? '2px solid rgba(15,23,42,0.15)' : 'none',
              padding: '0 40px',
            }}>
              <div style={{
                fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
                fontSize: '72px',
                fontWeight: 900,
                color: '#0F172A',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}>
                {item.num}
              </div>
              <div style={{
                fontFamily: 'var(--font-barlow), Barlow, sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                color: '#1e293b',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginTop: '8px',
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Second CTA */}
      <section style={{
        background: '#0285C7',
        padding: '80px 80px 120px',
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), 0 100%)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
      }}>
        <div>
          <div style={{
            fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            color: '#FBBF24',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            marginBottom: '16px',
          }}>
            Ne tervezgesd tovább
          </div>
          <h2 style={{
            fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
            fontSize: '60px',
            fontWeight: 900,
            color: '#FFFFFF',
            textTransform: 'uppercase',
            lineHeight: 0.95,
            marginBottom: '36px',
          }}>
            Ne tervezgesd<br />tovább.<br />Foglald le.
          </h2>
          <a href="#jegyek" style={{
            display: 'inline-block',
            background: '#F97316',
            color: '#FFFFFF',
            textDecoration: 'none',
            padding: '18px 44px',
            borderRadius: '50px',
            fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
            fontSize: '18px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}>
            Foglalj helyet a nyárban
          </a>
        </div>
        <div>
          <div style={{
            height: '480px',
            borderRadius: '16px',
            overflow: 'hidden',
            transform: 'rotate(2deg)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
          }}>
            <img src="/photos/aerial1.jpg" alt="Aqua-Land" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* 10. Thermal */}
      <section id="termal" style={{
        background: '#FFFFFF',
        padding: '140px 80px 100px',
        marginTop: '-40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
      }}>
        <div style={{
          height: '460px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(2,133,199,0.2)',
        }}>
          <img src="/photos/termal.jpg" alt="Termál" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div>
          <div style={{
            display: 'inline-block',
            background: '#0285C7',
            color: '#FFFFFF',
            fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            padding: '6px 16px',
            borderRadius: '50px',
            marginBottom: '20px',
          }}>
            Wellness &amp; Termál
          </div>
          <h2 style={{
            fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
            fontSize: '48px',
            fontWeight: 900,
            color: '#0F172A',
            textTransform: 'uppercase',
            lineHeight: 1.0,
            marginBottom: '20px',
          }}>
            A víz, amely gyógyít · nem csak felüdít.
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#555',
            lineHeight: 1.7,
            fontFamily: 'var(--font-barlow), Barlow, sans-serif',
            marginBottom: '32px',
          }}>
            Az Aqua-Land termálvizei nem dekorációk: a Kevei gyógyvizes medence és a japán ihletésű Onsen évszázados tudást hoz közel · testnek, elmének, izomnak egyaránt.
          </p>
          <a href="#" style={{
            display: 'inline-block',
            background: '#0285C7',
            color: '#FFFFFF',
            textDecoration: 'none',
            padding: '14px 32px',
            borderRadius: '50px',
            fontFamily: 'var(--font-barlow), Barlow, sans-serif',
            fontSize: '15px',
            fontWeight: 600,
          }}>
            Próbáld ki
          </a>
        </div>
      </section>

      {/* 11. Events */}
      <section style={{
        background: '#F97316',
        clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)',
        marginTop: '-40px',
        padding: '120px 80px 140px',
      }}>
        <div style={{
          fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
          fontSize: '13px',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.7)',
          textTransform: 'uppercase',
          letterSpacing: '0.25em',
          marginBottom: '16px',
        }}>
          Programok &amp; Ajánlatok
        </div>
        <h2 style={{
          fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
          fontSize: '72px',
          fontWeight: 900,
          color: '#FFFFFF',
          textTransform: 'uppercase',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          marginBottom: '20px',
        }}>
          A nyár<br />nem vár.
        </h2>
        <p style={{
          fontSize: '18px',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.85)',
          maxWidth: '560px',
          lineHeight: 1.6,
          fontFamily: 'var(--font-barlow), Barlow, sans-serif',
          marginBottom: '40px',
        }}>
          Szezonális programok, különleges belépők, wellness weekendek · mindig van ok visszajönni.
        </p>
        {/* 3-column photo event cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px' }}>
          {[
            { date: 'Júl 4-6', title: 'Splash Festival', text: '3 napos vizes fesztivál, zenével, DJ-kkel és éjszakai úszással.', photo: '/photos/event-splash-festival.jpg' },
            { date: 'Júl 12', title: 'Aqua Cinema éjjel', text: 'Filmvetítés a vízben, naplemente után. Hozd a matracod!', photo: '/photos/event-aqua-cinema.jpg' },
            { date: 'Aug 1-31', title: 'Wellness hónap', text: 'Termál belépő + reggeli csomag kedvezményes áron egész augusztusban.', photo: '/photos/event-wellness.jpg' },
          ].map((ev, i) => (
            <div key={i} style={{
              position: 'relative',
              height: '320px',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.25)',
            }}>
              {/* Photo background */}
              <img
                src={ev.photo}
                alt={ev.title}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Dark gradient overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.4) 55%, rgba(15,23,42,0.1) 100%)' }} />
              {/* Content */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
                <div style={{
                  fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#FBBF24',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '8px',
                }}>
                  {ev.date}
                </div>
                <h3 style={{
                  fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}>
                  {ev.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-barlow), Barlow, sans-serif', lineHeight: 1.5 }}>
                  {ev.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <a href="#" style={{
          display: 'inline-block',
          background: '#0F172A',
          color: '#FFFFFF',
          textDecoration: 'none',
          padding: '16px 36px',
          borderRadius: '50px',
          fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
          fontSize: '17px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}>
          Aktuális ajánlatok
        </a>
      </section>

      {/* 12. Accommodation */}
      <section id="szallas" style={{
        position: 'relative',
        padding: '120px 80px 100px',
        marginTop: '-40px',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/photos/strand.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.82)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            color: '#F97316',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            marginBottom: '12px',
          }}>
            Pihenj tovább
          </div>
          <h2 style={{
            fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
            fontSize: '56px',
            fontWeight: 900,
            color: '#FBBF24',
            textTransform: 'uppercase',
            lineHeight: 1.0,
            marginBottom: '48px',
          }}>
            Maradj éjszakára is · megérdemled.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[
              { icon: '🏨', title: 'Hotel szoba', text: 'Park-view szobák, minden reggel a csúszdák előtt.' },
              { icon: '🌿', title: 'Wellness csomag', text: 'Szállás + termál + reggeli. Az igazi feltöltődés.' },
              { icon: '👨‍👩‍👧‍👦', title: 'Családi csomag', text: '2+2 ajánlat, szállással és aquapark belépőkkel.' },
            ].map((opt, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.1)',
                border: '2px solid rgba(255,255,255,0.2)',
                borderRadius: '12px',
                padding: '28px 24px',
                textAlign: 'center',
                cursor: 'pointer',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{opt.icon}</div>
                <h3 style={{
                  fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}>
                  {opt.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-barlow), Barlow, sans-serif', lineHeight: 1.5 }}>
                  {opt.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Practical Info */}
      <section id="kapcsolat" style={{
        background: '#FFFFFF',
        padding: '80px',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <span style={{
            fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            color: '#0285C7',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
          }}>
            Mielőtt jössz
          </span>
        </div>
        <h2 style={{
          fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
          fontSize: '48px',
          fontWeight: 900,
          color: '#0F172A',
          textTransform: 'uppercase',
          textAlign: 'center',
          marginBottom: '56px',
        }}>
          Minden, amit tudni érdemes a látogatás előtt
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {/* Column 1 - Nyitvatartás */}
          <div style={{ textAlign: 'center', padding: '40px 28px', background: '#f8fafc', borderRadius: '16px' }}>
            <div style={{
              width: '72px',
              height: '72px',
              background: '#F97316',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="9" fill="white"/>
                <line x1="22" y1="2" x2="22" y2="8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="22" y1="36" x2="22" y2="42" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="2" y1="22" x2="8" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="36" y1="22" x2="42" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="7.5" y1="7.5" x2="11.8" y2="11.8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="32.2" y1="32.2" x2="36.5" y2="36.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="36.5" y1="7.5" x2="32.2" y2="11.8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="11.8" y1="32.2" x2="7.5" y2="36.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 style={{ fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif', fontSize: '22px', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', marginBottom: '12px' }}>Nyitvatartás</h3>
            <p style={{ fontSize: '15px', color: '#555', fontFamily: 'var(--font-barlow), Barlow, sans-serif', lineHeight: 1.7 }}>
              Május – szeptember: 9:00 – 20:00<br />
              Termál év közben: 10:00 – 21:00<br />
              Hétfőn zárva
            </p>
          </div>

          {/* Column 2 - Megközelítés */}
          <div style={{ textAlign: 'center', padding: '40px 28px', background: '#f8fafc', borderRadius: '16px' }}>
            <div style={{
              width: '72px',
              height: '72px',
              background: '#0285C7',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <path d="M22 4C15.373 4 10 9.373 10 16C10 24.8 22 40 22 40C22 40 34 24.8 34 16C34 9.373 28.627 4 22 4Z" fill="white"/>
                <circle cx="22" cy="16" r="5" fill="#0285C7"/>
              </svg>
            </div>
            <h3 style={{ fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif', fontSize: '22px', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', marginBottom: '12px' }}>Megközelítés</h3>
            <p style={{ fontSize: '15px', color: '#555', fontFamily: 'var(--font-barlow), Barlow, sans-serif', lineHeight: 1.7 }}>
              Autóval: M1 autópálya, 2-es kijárat<br />
              Vonattal: 45 perc Keleti pu.-tól<br />
              Buszjárat: 8-as busz
            </p>
          </div>

          {/* Column 3 - Parkoló */}
          <div style={{ textAlign: 'center', padding: '40px 28px', background: '#f8fafc', borderRadius: '16px' }}>
            <div style={{
              width: '72px',
              height: '72px',
              background: '#FBBF24',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="2" y="2" width="40" height="40" rx="8" fill="white"/>
                <text x="22" y="31" textAnchor="middle" fontFamily="Georgia, serif" fontSize="26" fontWeight="700" fill="#FBBF24">P</text>
              </svg>
            </div>
            <h3 style={{ fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif', fontSize: '22px', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', marginBottom: '12px' }}>Parkoló</h3>
            <p style={{ fontSize: '15px', color: '#555', fontFamily: 'var(--font-barlow), Barlow, sans-serif', lineHeight: 1.7 }}>
              1200+ férőhely, ingyenes<br />
              Buszparkoló különbejárattal<br />
              E-töltők a P2 parkolóban
            </p>
          </div>
        </div>
      </section>

      {/* 14. Gallery */}
      <section style={{
        background: '#f0f9ff',
        padding: '80px',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <span style={{
            fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            color: '#0285C7',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
          }}>
            Képgaléria
          </span>
        </div>
        <h2 style={{
          fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
          fontSize: '48px',
          fontWeight: 900,
          color: '#0F172A',
          textTransform: 'uppercase',
          textAlign: 'center',
          marginBottom: '40px',
        }}>
          Ahogy mások látták · és ahogy te fogod.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 200px)',
          gap: '10px',
        }}>
          <div style={{ gridColumn: '1 / span 2', borderRadius: '12px', overflow: 'hidden' }}>
            <img src="/photos/aerial2.jpg" alt="Aerial view" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img src="/photos/people1.jpg" alt="People" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img src="/photos/hero-main.jpg" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img src="/photos/people2.jpg" alt="People" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img src="/photos/pool1.jpg" alt="Pool" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img src="/photos/hero-alt.jpg" alt="Aqua-Land" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img src="/photos/pool1.jpg" alt="Pool" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* 15. Footer */}
      <footer style={{
        background: '#0F172A',
        borderTop: '6px solid #0285C7',
        padding: '72px 80px 48px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '60px',
          marginBottom: '60px',
        }}>
          {/* Col 1 */}
          <div>
            <img src="/photos/logo.png" alt="Aqua-Land" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: '20px', display: 'block' }} />
            <p style={{
              fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.45)',
              textTransform: 'uppercase',
              marginBottom: '24px',
              lineHeight: 1.3,
            }}>
              A legjobb nap az évből? Ma az.
            </p>
            <div style={{
              fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              color: '#FBBF24',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              marginBottom: '8px',
            }}>
              Hírlevél
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-barlow), Barlow, sans-serif', marginBottom: '12px' }}>
              Légy az első, aki tud a legjobb ajánlatokról.
            </p>
            <div style={{ display: 'flex', borderRadius: '50px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)' }}>
              <input
                type="email"
                placeholder="email@example.com"
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.06)',
                  border: 'none',
                  padding: '10px 16px',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontFamily: 'var(--font-barlow), Barlow, sans-serif',
                  outline: 'none',
                }}
              />
              <button style={{
                background: '#F97316',
                color: '#FFFFFF',
                border: 'none',
                padding: '10px 20px',
                fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}>
                Feliratkozom
              </button>
            </div>
          </div>

          {/* Col 2 - Aquapark */}
          <div>
            <h4 style={{ fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif', fontSize: '16px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>Aquapark</h4>
            {['Attrakciók', 'Csúszdapark', 'Aqua Cinema', 'Beach Club'].map(link => (
              <a key={link} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', fontFamily: 'var(--font-barlow), Barlow, sans-serif', marginBottom: '10px' }}>
                {link}
              </a>
            ))}
          </div>

          {/* Col 3 - Termál & Wellness */}
          <div>
            <h4 style={{ fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif', fontSize: '16px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>Termál &amp; Wellness</h4>
            {['Termálmedencék', 'Onsen', 'Szállás', 'Csomagok'].map(link => (
              <a key={link} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', fontFamily: 'var(--font-barlow), Barlow, sans-serif', marginBottom: '10px' }}>
                {link}
              </a>
            ))}
          </div>

          {/* Col 4 - Infó */}
          <div>
            <h4 style={{ fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif', fontSize: '16px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>Infó</h4>
            {['Árak', 'Nyitvatartás', 'Megközelítés', 'Kapcsolat'].map(link => (
              <a key={link} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', fontFamily: 'var(--font-barlow), Barlow, sans-serif', marginBottom: '10px' }}>
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Footer bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', fontFamily: 'var(--font-barlow), Barlow, sans-serif' }}>
            © 2026 Aqua-Land. Minden jog fenntartva.
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Facebook', 'Instagram', 'TikTok', 'YouTube'].map(social => (
              <a key={social} href="#" style={{
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                fontFamily: '"Barlow Condensed", var(--font-condensed), sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}>
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}
