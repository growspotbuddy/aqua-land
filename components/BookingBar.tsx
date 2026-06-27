'use client'

import { useState } from 'react'

export default function BookingBar() {
  const [activeTab, setActiveTab] = useState<'szallas' | 'jegy'>('szallas')
  const [activeSubTab, setActiveSubTab] = useState<'napi' | 'berlet'>('napi')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(1)
  const [ticketAdults, setTicketAdults] = useState(2)
  const [ticketChildren, setTicketChildren] = useState(1)
  const [ticketCount, setTicketCount] = useState(1)

  const tabStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: '"Barlow Condensed", sans-serif',
    fontSize: '15px',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
    padding: '14px 28px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    borderBottom: active ? '3px solid #F97316' : '3px solid transparent',
    color: active ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
    transition: 'color 0.2s, border-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  })

  const labelStyle: React.CSSProperties = {
    fontFamily: '"Barlow Condensed", sans-serif',
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.12em',
    color: 'rgba(255,255,255,0.45)',
    marginBottom: '6px',
  }

  const fieldStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.08)',
    border: '1.5px solid rgba(255,255,255,0.15)',
    borderRadius: '6px',
    padding: '10px 14px',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
    minWidth: '150px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'Barlow, sans-serif',
  }

  const counterBtnStyle: React.CSSProperties = {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.12)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#FFFFFF',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    lineHeight: '1',
    fontFamily: 'Barlow Condensed, sans-serif',
    transition: 'background 0.15s',
  }

  const countStyle: React.CSSProperties = {
    fontFamily: '"Barlow Condensed", sans-serif',
    fontSize: '20px',
    fontWeight: 700,
    color: '#FFFFFF',
    minWidth: '28px',
    textAlign: 'center',
  }

  const subTabStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: '"Barlow Condensed", sans-serif',
    fontSize: '13px',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
    padding: '6px 18px',
    cursor: 'pointer',
    background: active ? '#0285C7' : 'rgba(255,255,255,0.08)',
    border: '1px solid ' + (active ? '#0285C7' : 'rgba(255,255,255,0.15)'),
    borderRadius: '50px',
    color: '#FFFFFF',
    transition: 'background 0.2s, border-color 0.2s',
  })

  return (
    <div className="booking-panel" style={{
      background: 'rgba(15,23,42,0.88)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderTop: '3px solid #F97316',
      borderRadius: '14px',
      width: '100%',
      boxShadow: '0 8px 40px rgba(0,0,0,0.45)',
    }}>
      {/* Tabs row */}
      <div className="booking-tabs" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex' }}>
        <button className="booking-tab-btn" style={tabStyle(activeTab === 'szallas')} onClick={() => setActiveTab('szallas')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          Szállásfoglalás
        </button>
        <button className="booking-tab-btn" style={tabStyle(activeTab === 'jegy')} onClick={() => setActiveTab('jegy')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 9a3 3 0 010 6v2a2 2 0 002 2h16a2 2 0 002-2v-2a3 3 0 010-6V7a2 2 0 00-2-2H4a2 2 0 00-2 2v2z"/>
          </svg>
          Jegy / Bérlet
        </button>
      </div>

      {/* Tab body */}
      <div className="booking-body" style={{ padding: '18px 24px 20px' }}>
        {activeTab === 'szallas' && (
          <div className="booking-fields-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', flexWrap: 'wrap' }}>
            {/* Érkezés */}
            <div className="booking-field-wrap">
              <div style={labelStyle}>Érkezés</div>
              <div className="booking-field" style={fieldStyle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                2026. júl. 12.
              </div>
            </div>
            <div className="booking-arrow-sep" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '20px', paddingBottom: '10px' }}>→</div>
            {/* Távozás */}
            <div className="booking-field-wrap">
              <div style={labelStyle}>Távozás</div>
              <div className="booking-field" style={fieldStyle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                2026. júl. 14.
              </div>
            </div>
            {/* Vendégek */}
            <div className="booking-field-wrap">
              <div style={labelStyle}>Vendégek</div>
              <div className="booking-field" style={fieldStyle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                {adults} felnőtt, {children} gyerek
              </div>
            </div>
            {/* Foglalás button */}
            <button className="booking-action-btn" style={{
              background: '#F97316',
              color: '#FFFFFF',
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: '17px',
              fontWeight: 800,
              textTransform: 'uppercase' as const,
              padding: '14px 32px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              marginLeft: 'auto',
              letterSpacing: '0.04em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              FOGLALÁS
            </button>
          </div>
        )}

        {activeTab === 'jegy' && (
          <div>
            {/* Sub-tabs */}
            <div className="booking-subtabs" style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <button style={subTabStyle(activeSubTab === 'napi')} onClick={() => setActiveSubTab('napi')}>
                Napi belépő
              </button>
              <button style={subTabStyle(activeSubTab === 'berlet')} onClick={() => setActiveSubTab('berlet')}>
                Bérlet
              </button>
            </div>

            {activeSubTab === 'napi' && (
              <div className="booking-fields-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', flexWrap: 'wrap' }}>
                {/* Felnőtt counter */}
                <div className="booking-field-wrap">
                  <div style={labelStyle}>Felnőtt</div>
                  <div className="booking-field" style={{ ...fieldStyle, minWidth: 'auto', gap: '10px' }}>
                    <button style={counterBtnStyle} onClick={() => setTicketAdults(Math.max(0, ticketAdults - 1))}>−</button>
                    <span style={countStyle}>{ticketAdults}</span>
                    <button style={counterBtnStyle} onClick={() => setTicketAdults(ticketAdults + 1)}>+</button>
                  </div>
                </div>
                {/* Gyerek counter */}
                <div className="booking-field-wrap">
                  <div style={labelStyle}>Gyerek (3-14 év)</div>
                  <div className="booking-field" style={{ ...fieldStyle, minWidth: 'auto', gap: '10px' }}>
                    <button style={counterBtnStyle} onClick={() => setTicketChildren(Math.max(0, ticketChildren - 1))}>−</button>
                    <span style={countStyle}>{ticketChildren}</span>
                    <button style={counterBtnStyle} onClick={() => setTicketChildren(ticketChildren + 1)}>+</button>
                  </div>
                </div>
                {/* Dátum */}
                <div className="booking-field-wrap">
                  <div style={labelStyle}>Dátum</div>
                  <div className="booking-field" style={fieldStyle}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    2026. júl. 12.
                  </div>
                </div>
                <button className="booking-action-btn" style={{
                  background: '#F97316',
                  color: '#FFFFFF',
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: '17px',
                  fontWeight: 800,
                  textTransform: 'uppercase' as const,
                  padding: '14px 32px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  marginLeft: 'auto',
                  letterSpacing: '0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  KOSÁRBA
                </button>
              </div>
            )}

            {activeSubTab === 'berlet' && (
              <div className="booking-fields-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', flexWrap: 'wrap' }}>
                {/* Bérlet típusa */}
                <div className="booking-field-wrap">
                  <div style={labelStyle}>Bérlet típusa</div>
                  <div className="booking-field" style={{ ...fieldStyle, minWidth: '200px', cursor: 'pointer' }}>
                    10 napos bérlet
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" style={{ marginLeft: 'auto' }}><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                {/* Darabszám */}
                <div className="booking-field-wrap">
                  <div style={labelStyle}>Darabszám</div>
                  <div className="booking-field" style={{ ...fieldStyle, minWidth: 'auto', gap: '10px' }}>
                    <button style={counterBtnStyle} onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}>−</button>
                    <span style={countStyle}>{ticketCount}</span>
                    <button style={counterBtnStyle} onClick={() => setTicketCount(ticketCount + 1)}>+</button>
                  </div>
                </div>
                <button className="booking-action-btn" style={{
                  background: '#F97316',
                  color: '#FFFFFF',
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: '17px',
                  fontWeight: 800,
                  textTransform: 'uppercase' as const,
                  padding: '14px 32px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  marginLeft: 'auto',
                  letterSpacing: '0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  KOSÁRBA
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
