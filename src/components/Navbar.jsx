import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, language, setLanguage, t }) {
  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.experience, href: '#experience' },
    { name: t.projects, href: '#projects' },
    { name: t.skills, href: '#skills' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/75 dark:bg-[#09090b]/75 border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-300">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Identidad */}
        <a 
          href="#" 
          className="font-mono text-sm tracking-wider font-semibold hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
        >
          marian.monda<span className="text-emerald-500">()</span>
        </a>

        {/* Links, Language Toggle & Theme Toggle */}
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Botón Selector de Idioma ES / EN */}
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="font-mono text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer"
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
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer"
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
