import React from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer({ t }) {
  return (
    <footer className="footer-shell py-10">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500 font-mono text-center">
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
    </footer>
  );
}
