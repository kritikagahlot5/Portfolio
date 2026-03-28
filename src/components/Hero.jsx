import React, { useState, useEffect } from 'react';
import { ChevronRight, Database, Brain, BarChart3, Github, Terminal } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "AI/ML Engineer & Data Architect.";
    
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
          setText(fullText.substring(0, i));
          i++;
          if (i > fullText.length) clearInterval(timer);
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="about" className="reveal active" style={{
            minHeight: '100vh', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', textAlign: 'center',
            paddingTop: '60px'
        }}>
            <div className="stagger-container" style={{ maxWidth: '1000px' }}>
                <div style={{ 
                    display: 'inline-flex', alignItems: 'center', gap: '10px', 
                    padding: '10px 24px', borderRadius: '100px', 
                    background: 'rgba(168, 85, 247, 0.08)', border: '1px solid var(--primary)',
                    color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '2px',
                    marginBottom: '40px'
                }}>
                    <Terminal size={14} /> SYSTEM: NEURAL_ENGINE_ACTIVE
                </div>

                <h1 style={{ 
                    fontSize: 'clamp(3.5rem, 12vw, 6.5rem)', lineHeight: 0.9, 
                    fontWeight: 700, letterSpacing: '-0.06em', marginBottom: '40px',
                    minHeight: '2.5em'
                }}>
                    Engineering <br/>
                    <span className="text-gradient">{text}</span>
                    <span style={{ color: 'var(--primary)', animation: 'blink 1.2s infinite' }}>_</span>
                </h1>

                <p style={{ 
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)', color: 'var(--text-muted)', 
                    maxWidth: '850px', margin: '0 auto 64px auto', lineHeight: 1.8
                }}>
                    Developing <span style={{ color: '#fff' }}>intelligent production-grade systems</span> 
                    that bridge the gap between abstract mathematical models and 
                    <span style={{ color: 'var(--primary)', fontWeight: 700 }}> real-time business scalability.</span>
                </p>

                <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn-elite">
                        Explore Models <Brain size={20} />
                    </button>
                    <a href="https://github.com/kritikagahlot5" target="_blank" rel="noreferrer" 
                       className="card-elite"
                       style={{ 
                         padding: '16px 36px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)',
                         border: '1px solid var(--border)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px'
                       }}>
                        GitHub <Github size={20} />
                    </a>
                </div>
            </div>

            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
