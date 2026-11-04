import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer({ t }) {
  return (
    <footer id="contact" className="py-20 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <span className="font-mono text-emerald-600 dark:text-emerald-400 text-xs tracking-wider uppercase">
          {t.number}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {t.title}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
          {t.description}
        </p>

        <div className="pt-2">
          <a
            href="mailto:marianimonda@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-sm"
          >
            <Mail size={16} />
            {t.ctaButton}
          </a>
        </div>

        {/* Footer bottom */}
        <div className="pt-16 flex flex-col items-center gap-3 text-xs text-zinc-500 dark:text-zinc-500 font-mono">
          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
            <a
              href="https://github.com/marianmonda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/marianmonda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
          <p>© {new Date().getFullYear()} {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
