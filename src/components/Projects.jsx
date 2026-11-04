import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ t }) {
  return (
    <section id="projects" className="py-20 border-t border-zinc-200/60 dark:border-zinc-800/60">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm">{t.number}</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {t.title}
        </h2>
        <div className="flex-1 h-[1px] bg-zinc-200 dark:bg-zinc-800 ml-4 max-w-xs"></div>
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.items.map((project, index) => (
          <article
            key={index}
            className="group relative flex flex-col justify-between p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              {/* Card top icons */}
              <div className="flex items-center justify-between mb-5">
                <Folder className="text-emerald-500" size={32} />
                <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      aria-label={`Repository for ${project.title}`}
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      aria-label={`Live Demo for ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <ul className="flex flex-wrap gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200/60 dark:border-zinc-700/50"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
