import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Database, Brain, BarChart3, Binary, Activity, PieChart } from 'lucide-react';

const projects = [
  {
    title: 'Customer Churn Prediction - ML Pipeline',
    tech: 'Python • Scikit-learn • XGBoost',
    desc: 'Architected a robust machine learning pipeline focusing on advanced feature engineering and SMOTE techniques for class balancing. Improved model F1-score from 0.71 to 0.87, delivering a 22.5% increase in predictive accuracy for real-time churn scoring.',
    details: 'Leveraging Logistic Regression, Random Forest, and XGBoost on 7,000+ telecom records.',
    icon: <BarChart3 size={48} />,
    color: '#10b981'
  },
  {
    title: 'Intelligent Fitness Ecosystem (Data Engine)',
    tech: 'React Native • Health APIs • Chart.js',
    desc: 'Built an analytical dashboard that visualizes physiological metrics by monitoring real-time activity data. Focused on optimizing data ingestion latency and interactive charting for deep-dive user analytics and personalized trend insights.',
    details: 'Interactive charting engine powered by Chart.js for daily/weekly trend analysis.',
    icon: <Activity size={48} />,
    color: '#8b5cf6'
  },
  {
    title: 'Production News Aggregator (API/NLP)',
    tech: 'React Native • Third-Party APIs • Caching',
    desc: 'Developed a high-concurrency news data surface optimized with intelligent caching strategies that reduced redundant network requests by ~50%. Focused on low-latency data fetch and category-based filtering architectures.',
    details: 'Focused on API lifecycle efficiency and data fetching performance.',
    icon: <Binary size={48} />,
    color: '#f43f5e'
  },
  {
    title: 'E-Commerce Analytical Engine',
    tech: 'React Native • REST APIs • JWT',
    desc: 'Engineering an end-to-end shopping platform that prioritizes data-driven product synchronization and secure user-session modeling. Developed responsive UI components that seamlessly mirror complex backend data states.',
    details: 'Built with scalable state management and RESTful integration patterns.',
    icon: <PieChart size={48} />,
    color: '#0ea5e9'
  }
];

const ProjectSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    const prev = () => setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

    useEffect(() => {
        const timer = setInterval(next, 6000); // 6s for better reading of ML details
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="projects" className="reveal">
            <h2 style={{ fontSize: '3.5rem', marginBottom: '80px', textAlign: 'center' }}>Enterprise <span className="text-gradient">ML Projects</span></h2>
            
            <div className="slider-container">
                <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {projects.map((p, i) => (
                        <div key={i} className="slide">
                            <div style={{ 
                                padding: '40px', borderRadius: '32px', 
                                background: `linear-gradient(135deg, ${p.color}20 0%, ${p.color}05 100%)`,
                                border: `1px solid ${p.color}25`,
                                color: p.color,
                                boxShadow: `0 30px 60px -15px ${p.color}40`,
                                width: '130px', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                {p.icon}
                            </div>
                            <div className="slide-content">
                                <h4 style={{ color: p.color, fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2.5px', marginBottom: '14px' }}>{p.tech}</h4>
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '16px', fontWeight: 800 }}>{p.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '24px', maxWidth: '650px', lineHeight: 1.7 }}>{p.desc}</p>
                                <p style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, fontStyle: 'italic', opacity: 0.8, marginBottom: '32px' }}>{p.details}</p>
                                <div style={{ display: 'flex', gap: '24px' }}>
                                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, opacity: 0.8, fontSize: '0.9rem' }}><Github size={20} /> Research & Source</a>
                                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}><ExternalLink size={20} /> ML Performance Review</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="slider-nav">
                    {projects.map((_, i) => (
                        <div key={i} className={`dot ${i === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(i)}></div>
                    ))}
                </div>

                <button onClick={prev} style={{
                    position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)',
                    background: 'rgba(255,255,255,0.05)', border: 'none', padding: '12px', borderRadius: '50%', cursor: 'pointer', color: '#fff'
                }}><ChevronLeft size={24} /></button>
                <button onClick={next} style={{
                    position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)',
                    background: 'rgba(255,255,255,0.05)', border: 'none', padding: '12px', borderRadius: '50%', cursor: 'pointer', color: '#fff'
                }}><ChevronRight size={24} /></button>
            </div>
        </section>
    );
};

export default ProjectSlider;
