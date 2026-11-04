import React, { useEffect, useState } from 'react';
import { Sun, Moon, Download } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, language, setLanguage, t }) {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsStuck(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.experience, href: '#experience' },
    { name: t.projects, href: '#projects' },
    { name: t.skills, href: '#skills' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <header className={`site-bar ${isStuck ? 'is-stuck' : ''}`}>
      <nav className="site-bar__inner">
        {/* Logo / Identidad */}
        <a
          href="#" 
          className="site-bar__brand"
          aria-label="Volver al inicio"
        >
          marian.monda<span>()</span>
        </a>

        {/* Links, Language Toggle & Theme Toggle */}
        <div className="site-bar__right">
          <ul className="site-bar__links hidden md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="site-bar__link"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="site-bar__controls">
            <a href="/cv.pdf" download className="site-bar__cv">
              <span>{t.cv}</span>
              <Download size={15} aria-hidden="true" />
            </a>

            {/* Botón Selector de Idioma ES / EN */}
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="site-bar__language"
              aria-label="Cambiar idioma / Switch language"
            >
              <span className={language === 'es' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-zinc-400 dark:text-zinc-500'}>
                ES
              </span>
              <span className="text-zinc-300 dark:text-zinc-700 mx-1">/</span>
              <span className={language === 'en' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-zinc-400 dark:text-zinc-500'}>
                EN
              </span>
            </button>

            {/* Botón Modo Claro / Oscuro */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="site-bar__theme"
              aria-label="Alternar modo oscuro"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
