import { useState } from 'react';
import { contentData } from './CopyrightUsagePolicyPageData';

const legalPages = [];
let _currentPage = [];
if (contentData) {
  contentData.forEach(p => {
    if (!p.trim()) return;
    const isPageMarker = /^PAGE\s+[A-Z0-9]+\s+\/\s+/i.test(p);
    
    if (isPageMarker) {
      if (_currentPage.length > 0) legalPages.push(_currentPage);
      _currentPage = [];
    } else {
      _currentPage.push(p);
    }
  });
  if (_currentPage.length > 0) legalPages.push(_currentPage);
}

export default function CopyrightUsagePolicyPage({ settings }) {
  const [legalPage, setLegalPage] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);

  const handlePrev = () => {
    if (legalPage <= 0 || isFlashing) return;
    setIsFlashing(true);
    setTimeout(() => setLegalPage(p => p - 1), 250);
    setTimeout(() => setIsFlashing(false), 500);
  };

  const handleNext = () => {
    if (legalPage >= legalPages.length - 1 || isFlashing) return;
    setIsFlashing(true);
    setTimeout(() => setLegalPage(p => p + 1), 250);
    setTimeout(() => setIsFlashing(false), 500);
  };

  return (
    <div className={"legal-notice-container " + (isFlashing ? "crt-active" : "")} style={{flex: 1, display: 'flex', flexDirection: 'column', height: 'calc(100% - 28px)', background: settings?.dark ? '#0f172a' : '#ffffff', borderTop: '1px solid #ffffff22', position: 'relative', overflow: 'hidden'}}>
      <style dangerouslySetInnerHTML={{__html: `
        .crt-active {
          animation: screenCloseOpen 0.5s ease-in-out forwards;
          transform-origin: center center;
        }

        @keyframes screenCloseOpen {
          0% { transform: scale(1); opacity: 1; filter: brightness(1); }
          25% { transform: scaleY(0.005) scaleX(1); opacity: 1; filter: brightness(3); }
          50% { transform: scaleY(0.005) scaleX(0); opacity: 0; filter: brightness(3); }
          75% { transform: scaleY(0.005) scaleX(1); opacity: 1; filter: brightness(3); }
          100% { transform: scale(1); opacity: 1; filter: brightness(1); }
        }
      `}} />

      <div style={{flex: 1, padding: '30px', overflowY: 'auto', overflowX: 'hidden', textAlign: 'left', background: settings?.dark ? '#0f172a' : '#ffffff'}}>
        <div style={{maxWidth: '600px', margin: '0 auto', paddingBottom: '20px'}}>
          {legalPages[legalPage]?.map((p, i) => {
            if (!p.trim()) return null;
            
            const isPageMarker = /^PAGE\s+[A-Z0-9]+\s+\/\s+/i.test(p);
            if (isPageMarker) return null;

            const isTitle = p.toLowerCase() === `Copyright Usage Policy`.toLowerCase();
            const isMainHeading = (p === p.toUpperCase() && p.length > 5) || (/^[0-9]+\. [A-Z ]+$/.test(p));
            const isSubHeading = !isMainHeading && /^[0-9]+\.[0-9]+ [^:]+$/.test(p) && p.length < 80;
            const prefixMatch = p.match(/^([0-9]+\.[0-9]+ [^:]+:)(.*)/);

            if (isTitle) {
              return <p key={i} style={{ fontSize: '28px', fontWeight: '800', marginTop: '0px', marginBottom: '24px', color: settings?.dark ? '#fff' : '#000' }}>{p}</p>;
            }
            
            if (isMainHeading) {
              return <p key={i} style={{ fontSize: '15px', fontWeight: '700', marginTop: '10px', marginBottom: '12px', letterSpacing: '0.5px', color: settings?.dark ? '#e2e8f0' : '#1e293b', textTransform: 'uppercase' }}>{p}</p>;
            }

            if (isSubHeading) {
              return <p key={i} style={{ fontSize: '14px', fontWeight: '700', marginTop: '20px', marginBottom: '4px', color: settings?.dark ? '#cbd5e1' : '#334155' }}>{p}</p>;
            }

            let prefix = '';
            let rest = p;
            if (prefixMatch) {
              prefix = prefixMatch[1];
              rest = prefixMatch[2];
            }

            return (
              <p key={i} style={{ fontSize: '13px', fontWeight: '400', marginTop: '8px', lineHeight: 1.7, color: settings?.dark ? '#94a3b8' : '#475569' }}>
                {prefix && <strong style={{color: settings?.dark ? '#cbd5e1' : '#334155'}}>{prefix}</strong>}
                {rest}
              </p>
            );
          })}
        </div>
      </div>
      <div style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        gap: '8px',
        padding: '12px 16px', 
        borderTop: `1px solid ${settings?.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`, 
        background: settings?.dark ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.85)', 
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 60
      }}>
        <button 
          onClick={handlePrev} 
          disabled={legalPage === 0 || isFlashing} 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px', 
            borderRadius: '100px',
            flexShrink: 0, 
            border: 'none', 
            background: '#003135', 
            color: '#ffffff', 
            opacity: (legalPage === 0 || isFlashing) ? 0.4 : 1, 
            cursor: (legalPage === 0 || isFlashing) ? 'not-allowed' : 'pointer', 
            fontSize: '13px', 
            fontWeight: '600',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(0, 49, 53, 0.3)',
            letterSpacing: '0.5px'
          }}
          onMouseEnter={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.background = '#00484d'; }}
          onMouseLeave={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.background = '#003135'; }}
          onMouseDown={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.transform = 'scale(0.96)'; }}
          onMouseUp={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.transform = 'scale(1)'; }}
          onMouseOut={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Previous
        </button>

        <span style={{
          fontSize: '11px', 
          color: settings?.dark ? '#64748b' : '#94a3b8', 
          fontWeight: '700', 
          letterSpacing: '1px',
          whiteSpace: 'nowrap',
          textAlign: 'center'
        }}>
          CARD {(legalPage + 1).toString().padStart(2, '0')} OF {Math.max(1, legalPages.length)}
        </span>

        <button 
          onClick={handleNext} 
          disabled={legalPage >= (legalPages.length - 1) || isFlashing} 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px', 
            borderRadius: '100px', 
            flexShrink: 0, 
            border: 'none', 
            background: '#003135', 
            color: '#ffffff', 
            opacity: (legalPage >= (legalPages.length - 1) || isFlashing) ? 0.4 : 1, 
            cursor: (legalPage >= (legalPages.length - 1) || isFlashing) ? 'not-allowed' : 'pointer', 
            fontSize: '13px', 
            fontWeight: '600',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(0, 49, 53, 0.3)',
            letterSpacing: '0.5px'
          }}
          onMouseEnter={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.background = '#00484d'; }}
          onMouseLeave={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.background = '#003135'; }}
          onMouseDown={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.transform = 'scale(0.96)'; }}
          onMouseUp={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.transform = 'scale(1)'; }}
          onMouseOut={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Next
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}
