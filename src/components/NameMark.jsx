import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const letters = [
  { char: 'M', path: 'M0 67.2V0H23.52L35.136 58.56H36.864L48.48 0H72V67.2H59.712V9.312H57.984L46.464 67.2H25.536L14.016 9.312H12.288V67.2H0Z', nodes: [[0, 0], [23.52, 0], [36, 58.56], [48.48, 0], [70, 0], [72, 67.2], [46.464, 67.2], [25.536, 67.2], [0, 67.2]], color: 'text-zinc-900 dark:text-white' },
  { char: 'A', path: 'M80.0482 67.2L97.7122 0H119.792L137.456 67.2H124.4L120.752 52.416H96.7523L93.1043 67.2H80.0482ZM99.7282 40.704H117.776L109.616 7.968H107.888L99.7282 40.704Z', nodes: [[80.0482, 67.2], [97.7122, 0], [119.792, 0], [137.456, 67.2], [120.752, 52.416], [96.7523, 52.416], [108.752, 7.968]], color: 'text-zinc-900 dark:text-white' },
  { char: 'R', path: 'M145.5 67.2V0H174.684C178.908 0 182.588 0.736 185.724 2.208C188.86 3.68 191.292 5.76 193.02 8.448C194.748 11.136 195.612 14.304 195.612 17.952V19.104C195.612 23.136 194.652 26.4 192.732 28.896C190.812 31.392 188.444 33.216 185.628 34.368V36.096C188.188 36.224 190.172 37.12 191.58 38.784C192.988 40.384 193.692 42.528 193.692 45.216V67.2H181.02V47.04C181.02 45.504 180.604 44.256 179.772 43.296C179.004 42.336 177.692 41.856 175.836 41.856H158.172V67.2H145.5ZM158.172 30.336H173.34C176.348 30.336 178.684 29.536 180.348 27.936C182.076 26.272 182.94 24.096 182.94 21.408V20.448C182.94 17.76 182.108 15.616 180.444 14.016C178.78 12.352 176.412 11.52 173.34 11.52H158.172V30.336Z', nodes: [[145.5, 0], [174.684, 0], [193.02, 8.448], [185.628, 34.368], [193.692, 45.216], [193.692, 67.2], [145.5, 67.2]], color: 'text-zinc-900 dark:text-white' },
  { char: 'I', path: 'M206.156 67.2V0H218.828V67.2H206.156Z', nodes: [[206.156, 0], [218.828, 0], [218.828, 67.2], [206.156, 67.2]], color: 'text-zinc-900 dark:text-white' },
  { char: 'A', path: 'M226.861 67.2L244.525 0H266.605L284.269 67.2H271.213L267.565 52.416H243.565L239.917 67.2H226.861ZM246.541 40.704H264.589L256.429 7.968H254.701L246.541 40.704Z', nodes: [[226.861, 67.2], [244.525, 0], [266.605, 0], [284.269, 67.2], [267.565, 52.416], [243.565, 52.416], [255.565, 7.968]], color: 'text-zinc-900 dark:text-white' },
  { char: 'N', path: 'M292.312 67.2V0H316.409L329.753 58.56H331.48V0H343.961V67.2H319.865L306.521 8.64H304.793V67.2H292.312Z', nodes: [[292.312, 0], [316.409, 0], [329.753, 58.56], [343.961, 0], [343.961, 67.2], [319.865, 67.2], [306.521, 8.64], [292.312, 67.2]], color: 'text-zinc-900 dark:text-white' },
  { char: 'M', path: 'M0 189.2V122H23.52L35.136 180.56H36.864L48.48 122H72V189.2H59.712V131.312H57.984L46.464 189.2H25.536L14.016 131.312H12.288V189.2H0Z', nodes: [[0, 122], [23.52, 122], [36, 180.56], [48.48, 122], [72, 122], [72, 189.2], [46.464, 189.2], [25.536, 189.2], [0, 189.2]], color: 'text-emerald-500 dark:text-emerald-400' },
  { char: 'O', path: 'M110.768 190.544C102.32 190.544 95.6003 188.24 90.6083 183.632C85.6163 178.96 83.1203 172.304 83.1203 163.664V147.536C83.1203 138.896 85.6163 132.272 90.6083 127.664C95.6003 122.992 102.32 120.656 110.768 120.656C119.216 120.656 125.936 122.992 130.928 127.664C135.92 132.272 138.416 138.896 138.416 147.536V163.664C138.416 172.304 135.92 178.96 130.928 183.632C125.936 188.24 119.216 190.544 110.768 190.544ZM110.768 179.216C115.504 179.216 119.184 177.84 121.808 175.088C124.432 172.336 125.744 168.656 125.744 164.048V147.152C125.744 142.544 124.432 138.864 121.808 136.112C119.184 133.36 115.504 131.984 110.768 131.984C106.096 131.984 102.416 133.36 99.7282 136.112C97.1042 138.864 95.7923 142.544 95.7923 147.152V164.048C95.7923 168.656 97.1042 172.336 99.7282 175.088C102.416 177.84 106.096 179.216 110.768 179.216Z', nodes: [[110.768, 120.656], [138.416, 155.6], [110.768, 190.544], [83.1203, 155.6], [110.768, 131.984], [125.744, 155.6], [110.768, 179.216], [95.7923, 155.6]], color: 'text-emerald-500 dark:text-emerald-400' },
  { char: 'N', path: 'M149.531 189.2V122H173.627L186.971 180.56H188.699V122H201.179V189.2H177.083L163.739 130.64H162.011V189.2H149.531Z', nodes: [[149.531, 122], [173.627, 122], [186.971, 180.56], [201.179, 122], [201.179, 189.2], [177.083, 189.2], [163.739, 130.64], [149.531, 189.2]], color: 'text-emerald-500 dark:text-emerald-400' },
  { char: 'D', path: 'M211.924 189.2V178.064H220.756V133.136H211.924V122H239.572C248.596 122 255.444 124.304 260.116 128.912C264.852 133.456 267.22 140.24 267.22 149.264V161.936C267.22 170.96 264.852 177.776 260.116 182.384C255.444 186.928 248.596 189.2 239.572 189.2H211.924ZM233.428 177.68H239.764C244.884 177.68 248.628 176.336 250.996 173.648C253.364 170.96 254.548 167.184 254.548 162.32V148.88C254.548 143.952 253.364 140.176 250.996 137.552C248.628 134.864 244.884 133.52 239.764 133.52H233.428V177.68Z', nodes: [[211.924, 122], [239.572, 122], [260.116, 128.912], [267.22, 149.264], [260.116, 182.384], [239.572, 189.2], [211.924, 189.2], [220.756, 133.136]], color: 'text-emerald-500 dark:text-emerald-400' },
  { char: 'A', path: 'M272.611 189.2L290.275 122H312.355L330.019 189.2H316.963L313.315 174.416H289.315L285.667 189.2H272.611ZM292.291 162.704H310.339L302.179 129.968H300.451L292.291 162.704Z', nodes: [[272.611, 189.2], [290.275, 122], [312.355, 122], [330.019, 189.2], [313.315, 174.416], [289.315, 174.416], [301.315, 129.968]], color: 'text-emerald-500 dark:text-emerald-400' },
];

const commandArity = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7 };

function getPathNodes(path, nodes) {
  const tokens = path.match(/[a-z]|-?\d*\.?\d+(?:e[-+]?\d+)?/gi) || [];
  const points = [...nodes];
  const isNearExisting = (nextX, nextY) => points.some(([pointX, pointY]) => Math.hypot(pointX - nextX, pointY - nextY) < 3);
  let command = null;
  let x = 0;
  let y = 0;
  let startX = 0;
  let startY = 0;
  let index = 0;

  const addPoint = (nextX, nextY) => {
    if (!isNearExisting(nextX, nextY)) {
      points.push([nextX, nextY]);
    }
  };

  while (index < tokens.length) {
    if (/^[a-z]$/i.test(tokens[index])) {
      command = tokens[index];
      index += 1;
      if (command.toUpperCase() === 'Z') {
        x = startX;
        y = startY;
        command = null;
      }
      continue;
    }

    if (!command) break;
    const upperCommand = command.toUpperCase();
    const arity = commandArity[upperCommand];
    if (!arity || index + arity > tokens.length) break;

    const values = tokens.slice(index, index + arity).map(Number);
    index += arity;
    const relative = command === command.toLowerCase();
    let nextX = x;
    let nextY = y;

    if (upperCommand === 'H') {
      nextX = relative ? x + values[0] : values[0];
    } else if (upperCommand === 'V') {
      nextY = relative ? y + values[0] : values[0];
    } else {
      const offset = values.length - 2;
      nextX = relative ? x + values[offset] : values[offset];
      nextY = relative ? y + values[offset + 1] : values[offset + 1];
    }

    if (upperCommand === 'M') {
      startX = nextX;
      startY = nextY;
      command = relative ? 'l' : 'L';
    }

    x = nextX;
    y = nextY;
    if (upperCommand === 'M' || upperCommand === 'L' || upperCommand === 'H' || upperCommand === 'V') {
      addPoint(x, y);
    }
  }

  return points;
}

function InteractivePath({ char, path, nodes, color, transform, extractNodes = true }) {
  const groupRef = useRef(null);
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.name-fill', { opacity: 1 });
      gsap.set('.name-stroke', { opacity: 0 });
      gsap.set('.name-node circle', {
        scale: 0,
        opacity: 0,
        transformOrigin: 'center center',
      });
      timelineRef.current = gsap.timeline({ paused: true })
        .to('.name-fill', { opacity: 0, duration: 0.38, ease: 'power2.out' }, 0)
        .to('.name-stroke', { opacity: 1, duration: 0.38, ease: 'power2.out' }, 0)
        .to('.name-node circle', {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          stagger: { each: 0.045, from: 'random' },
          ease: 'back.out(2)',
          transformOrigin: 'center center',
        }, 0.02);
    }, groupRef);

    return () => ctx.revert();
  }, []);

  const showOutline = () => timelineRef.current?.play();
  const hideOutline = () => timelineRef.current?.reverse();

  return (
    <g
      ref={groupRef}
      className={color}
      transform={transform}
      onMouseEnter={showOutline}
      onMouseLeave={hideOutline}
    >
      <path className="name-fill" d={path} fill="currentColor" />
      <path className="name-stroke" d={path} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <g className="name-node" fill="currentColor">
        {(extractNodes ? getPathNodes(path, nodes) : nodes).map(([x, y], index) => (
          <circle key={index} cx={x} cy={y} r="2.2" />
        ))}
      </g>
    </g>
  );
}

export default function NameMark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 344 165"
      className={`name-mark w-full max-w-[680px] h-auto overflow-visible select-none ${className}`}
      role="img"
      aria-label="Marian Monda"
    >
      {letters.map((letter, index) => (
        <InteractivePath
          key={`${letter.char}-${index}`}
          {...letter}
          extractNodes={letter.char !== 'O'}
          transform={index >= 6 ? 'translate(0 -28)' : undefined}
        />
      ))}
    </svg>
  );
}