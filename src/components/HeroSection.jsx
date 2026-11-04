import React, { useEffect, useRef } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import NodalTitle from './NodalTitle';

export default function HeroSection({ t }) {
  const heroRef = useRef(null);
  const pointerTarget = useRef({ x: 0, y: 0 });
  const pointerPosition = useRef({ x: 0, y: 0 });
  const driftPosition = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  useEffect(() => {
    let lastTime = performance.now();

    const animateGrid = (time) => {
      const elapsed = Math.min(time - lastTime, 32);
      lastTime = time;

      const current = pointerPosition.current;
      const target = pointerTarget.current;
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      const heading = (time / 1000) * 0.09;
      const elapsedSeconds = elapsed / 1000;
      driftPosition.current.x = (driftPosition.current.x + Math.cos(heading) * 44 * elapsedSeconds) % 64;
      driftPosition.current.y = (driftPosition.current.y + Math.sin(heading) * 44 * elapsedSeconds) % 64;

      const hero = heroRef.current;
      if (hero) {
        hero.style.setProperty('--grid-x', `${current.x + driftPosition.current.x}px`);
        hero.style.setProperty('--grid-y', `${current.y + driftPosition.current.y}px`);
      }

      frameRef.current = requestAnimationFrame(animateGrid);
    };

    frameRef.current = requestAnimationFrame(animateGrid);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const handlePointerMove = (event) => {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const offsetX = ((x / bounds.width) - 0.5) * -34;
    const offsetY = ((y / bounds.height) - 0.5) * -24;
    pointerTarget.current = { x: offsetX, y: offsetY };
    heroRef.current.style.setProperty('--pointer-x', `${x}px`);
    heroRef.current.style.setProperty('--pointer-y', `${y}px`);
  };

  return (
    <section
      ref={heroRef}
      id="about"
      onPointerMove={handlePointerMove}
      className="hero-canvas min-h-[100svh] border-b border-zinc-300/80 dark:border-zinc-700/80 flex flex-col justify-center items-center text-center w-full"
    >
      <div className="space-y-6 w-full max-w-6xl mx-auto flex flex-col items-center">
        <p className="hero-location text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-zinc-500 dark:text-zinc-400">
          {t.location}
          <span className="mx-2 text-emerald-500" aria-hidden="true">·</span>
          <span className="text-emerald-600 dark:text-emerald-400">{t.availability}</span>
        </p>

        {/* Gran Título Nodal estilo OpenAI DevDay a pantalla completa */}
        <div className="w-full my-3">
          <NodalTitle />
        </div>

        {/* Titular y Perfil Centrado */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-medium leading-tight text-zinc-600 dark:text-zinc-300">
            {t.headline}
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            {t.profile}
          </p>
        </div>

        {/* Botón Principal estilo Pill (como "Learn about OpenAI DevDay ↗") */}
        <div className="hero-actions pt-3 flex flex-wrap items-center justify-center">
          <a
            href="#projects"
            className="hero-action hero-action--primary inline-flex items-center gap-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-md group cursor-pointer"
          >
            <span>{t.ctaProjects}</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#experience"
            className="hero-action inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all cursor-pointer"
          >
            {t.ctaExperience}
          </a>
          <a
            href="#contact"
            className="hero-action inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all cursor-pointer"
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
