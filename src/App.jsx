import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
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
        setLanguage={setLanguage}
        t={t.nav}
      />

      {/* Contenido principal estructurado */}
      <main className="flex-1 max-w-5xl mx-auto px-6 w-full">
        <HeroSection t={t.hero} />
        <Experience t={t.experience} />
        <Projects t={t.projects} />
        <Skills t={t.skills} />
      </main>

      {/* Footer y sección de contacto */}
      <Footer t={t.footer} />
    </div>
  );
}
