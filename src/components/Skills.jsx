import React from 'react';
import { Server, Layout, Cpu, Languages } from 'lucide-react';

const iconMap = {
  server: Server,
  layout: Layout,
  cpu: Cpu,
  languages: Languages,
};

export default function Skills({ t }) {
  return (
    <section id="skills" className="py-20 border-t border-zinc-200/60 dark:border-zinc-800/60">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm">{t.number}</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {t.title}
        </h2>
        <div className="flex-1 h-[1px] bg-zinc-200 dark:bg-zinc-800 ml-4 max-w-xs"></div>
      </div>

      {/* Grid de categorías */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.categories.map((category, index) => {
          const Icon = iconMap[category.type] || Server;
          return (
            <div
              key={index}
              className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-900/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
