import React from 'react';
import NodalLetter from './NodalLetter';

/**
 * NodalTitle - Título tipográfico interactivo a gran escala estilo OpenAI DevDay [2026]
 */
export default function NodalTitle({ className = '' }) {
  const wordMarian = ['M', 'a', 'r', 'i', 'a', 'n'];
  const wordMonda = ['M', 'o', 'n', 'd', 'a'];
  const tagYear = ['[', '2', '0', '2', '6', ']'];

  return (
    <div className={`w-full py-4 select-none flex justify-center ${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-4">
        {/* Marian (Blanco en dark mode / Zinc en light mode) */}
        <div className="flex items-center">
          {wordMarian.map((char, index) => (
            <NodalLetter
              key={`marian-${index}`}
              char={char}
              color="text-zinc-900 dark:text-white"
            />
          ))}
        </div>

        {/* Monda (Verde Esmeralda DevDay) */}
        <div className="flex items-center">
          {wordMonda.map((char, index) => (
            <NodalLetter
              key={`monda-${index}`}
              char={char}
              color="text-emerald-500 dark:text-emerald-400"
            />
          ))}
        </div>

        {/* [2026] (Púrpura DevDay con corchetes claros) */}
        <div className="flex items-center">
          {tagYear.map((char, index) => {
            const isBracket = char === '[' || char === ']';
            const colorClass = isBracket
              ? 'text-zinc-400 dark:text-zinc-300'
              : 'text-purple-600 dark:text-purple-400';

            return (
              <NodalLetter
                key={`tag-${index}`}
                char={char}
                color={colorClass}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
