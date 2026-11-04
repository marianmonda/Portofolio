import React from 'react';
import { Mail, Languages, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import NodalTitle from './NodalTitle';

export default function HeroSection({ t }) {
  return (
    <section id="about" className="min-h-[92vh] flex flex-col justify-center items-center text-center pt-24 pb-16 w-full">
      <div className="space-y-6 w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Status Badges Centrados */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {t.statusBadge}
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300">
            <Languages size={14} className="text-emerald-500" />
            {t.englishBadge}
          </div>
        </div>

        {/* Gran Título Nodal estilo OpenAI DevDay a pantalla completa */}
        <div className="w-full my-3">
          <NodalTitle />
        </div>

        {/* Titular y Perfil Centrado */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-lg sm:text-xl font-mono text-zinc-500 dark:text-zinc-400">
            {t.headline}
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            {t.profile}
          </p>
        </div>

        {/* Botón Principal estilo Pill (como "Learn about OpenAI DevDay ↗") */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-md group cursor-pointer"
          >
            <span>{t.ctaProjects}</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all cursor-pointer"
          >
            {t.ctaExperience}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all cursor-pointer"
          >
            {t.ctaContact}
          </a>
        </div>

        {/* Social Links centrados */}
        <div className="flex items-center justify-center gap-5 pt-4 text-zinc-600 dark:text-zinc-400">
          <a
            href="https://github.com/marianmonda"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com/in/marianmonda"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:marianimonda@gmail.com"
            className="p-2.5 rounded-full hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
