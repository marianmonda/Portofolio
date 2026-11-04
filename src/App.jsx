import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { translations } from './data/translations';

export default function App() {
  // Estado Modo Oscuro
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Estado Idioma (ES / EN)
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'en' || savedLang === 'es') {
      return savedLang;
    }
    // Detección automática por idioma de navegador
    return navigator.language.startsWith('es') ? 'es' : 'en';
  });
  const [languagePhase, setLanguagePhase] = useState('idle');
  const languageTimer = useRef(null);

  const handleLanguageChange = (nextLanguage) => {
    if (nextLanguage === language || languagePhase !== 'idle') return;

    window.clearTimeout(languageTimer.current);
    setLanguagePhase('exiting');
    languageTimer.current = window.setTimeout(() => {
      setLanguage(nextLanguage);
      setLanguagePhase('entering');
      languageTimer.current = window.setTimeout(() => setLanguagePhase('idle'), 420);
    }, 140);
  };

  useEffect(() => {
    return () => window.clearTimeout(languageTimer.current);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-500/20 selection:text-emerald-500">
      {/* Barra de navegación superior fija */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={handleLanguageChange}
        t={t.nav}
      />

      {/* Contenido principal estructurado */}
      <main className={`flex-1 w-full language-transition language-transition--${languagePhase}`}>
        <HeroSection t={t.hero} />
        <div className="content-frame">
          <Experience t={t.experience} />
          <Projects t={t.projects} />
          <Skills t={t.skills} />
          <ContactSection t={t.footer} />
        </div>
      </main>

      {/* Footer y sección de contacto */}
      <Footer t={t.footer} />
    </div>
  );
}
