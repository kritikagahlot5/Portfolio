import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import NeuralBackground from './components/NeuralBackground';

function App() {
  useEffect(() => {
    // Scroll progress handler
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const scrollBar = document.getElementById('scroll-bar');
      if (scrollBar) scrollBar.style.width = scrolled + '%';
    };

    // Advanced reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    // Global scroll listener
    window.addEventListener('scroll', handleScroll);
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <NeuralBackground />
      <div id="scroll-bar" className="scroll-progress"></div>
      <Header />
      <main>
        <Hero />
        <section className="reveal-left"><Experience /></section>
        <section className="reveal-right"><Projects /></section>
        <section className="reveal"><Skills /></section>
        <section className="reveal-left"><Education /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
