import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience({ t }) {
  return (
    <section id="experience" className="py-20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm">{t.number}</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {t.title}
        </h2>
        <div className="flex-1 h-[1px] bg-zinc-200 dark:bg-zinc-800 ml-4 max-w-xs"></div>
      </div>

      {/* Experience Item */}
      <div className="relative pl-6 sm:pl-8 border-l border-zinc-200 dark:border-zinc-800 space-y-6">
        <div className="relative">
          {/* Timeline Dot */}
          <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-[#09090b]"></span>

          <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-900/40 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Briefcase size={18} className="text-emerald-500" />
                {t.role}
              </h3>
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {t.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {t.duration}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200/60 dark:border-zinc-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
