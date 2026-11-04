import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import lettersData from './lettersData.json';

/**
 * NodalLetter - Letra individual interactiva con nodos dispersos y exactos estilo OpenAI DevDay
 */
export default function NodalLetter({
  char,
  color = 'text-zinc-900 dark:text-white',
  strokeColor,
  nodeColor,
  className = '',
}) {
  const letterRef = useRef(null);
  const timelineRef = useRef(null);
  const data = lettersData[char];

  const strokeClass = strokeColor || color;
  const nodeClass = nodeColor || color;

  useLayoutEffect(() => {
    if (!data) return;

    const ctx = gsap.context(() => {
      // Estado inicial
      gsap.set('.letter-fill', { opacity: 1 });
      gsap.set('.letter-stroke', { opacity: 0 });
      gsap.set('.letter-node circle', {
        scale: 0,
        opacity: 0,
        transformOrigin: 'center center',
      });

      // Línea de tiempo independiente
      timelineRef.current = gsap
        .timeline({ paused: true })
        // 1. Relleno desaparece a 0
        .to(
          '.letter-fill',
          {
            opacity: 0,
            duration: 0.25,
            ease: 'power2.out',
          },
          0
        )
        // 2. Trazo vectorial aparece a 1
        .to(
          '.letter-stroke',
          {
            opacity: 1,
            duration: 0.25,
            ease: 'power2.out',
          },
          0
        )
        // 3. Nodos dispersos en vértices clave aparecen con stagger a 35ms
        .to(
          '.letter-node circle',
          {
            scale: 1,
            opacity: 1,
            duration: 0.2,
            stagger: {
              each: 0.035, // 35ms estilo OpenAI
              from: 'random',
            },
            ease: 'back.out(2)',
            transformOrigin: 'center center',
          },
          0.02
        );
    }, letterRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  const handleMouseEnter = () => {
    timelineRef.current?.play();
  };

  const handleMouseLeave = () => {
    timelineRef.current?.reverse();
  };

  return (
    <div
      ref={letterRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex items-center justify-center cursor-pointer select-none transition-transform duration-150 hover:scale-[1.04] ${className}`}
      aria-label={`Letter ${char}`}
    >
      <svg
        viewBox={data.viewBox}
        className="h-12 sm:h-18 md:h-24 lg:h-32 xl:h-36 2xl:h-40 w-auto overflow-visible"
        style={{ aspectRatio: `${data.width} / ${data.height}` }}
      >
        {/* Capa 1: Relleno sólido */}
        <g className={`letter-fill ${color}`}>
          <path d={data.pathData} fill="currentColor" />
        </g>

        {/* Capa 2: Borde vectorial */}
        <g
          className={`letter-stroke ${strokeClass}`}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={data.pathData} stroke="currentColor" fill="none" />
        </g>

        {/* Capa 3: Nodos circulares reducidos a vértices clave */}
        <g className={`letter-node ${nodeClass}`}>
          {data.nodes.map((node, i) => (
            <circle key={i} cx={node.x} cy={node.y} r="3" fill="currentColor" />
          ))}
        </g>
      </svg>
    </div>
  );
}
