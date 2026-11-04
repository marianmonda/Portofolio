import React from 'react';
import NameMark from './NameMark';

/**
 * NodalTitle - Título tipográfico interactivo a gran escala estilo OpenAI DevDay [2026]
 */
export default function NodalTitle({ className = '' }) {
  return (
    <div className={`w-full py-4 select-none flex justify-center ${className}`}>
      <div className="w-full flex flex-col items-center gap-2">
        <NameMark />
      </div>
    </div>
  );
}
