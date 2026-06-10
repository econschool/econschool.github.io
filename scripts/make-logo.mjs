// One-off generator: turns "ES" set in Playfair Display Bold into pure SVG paths.
// Output: public/es-logo.svg (header mark) and public/favicon.svg (violet tile).
import opentype from 'opentype.js';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const buf = readFileSync(
  'node_modules/@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff'
);
const font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));

const SIZE = 100; // font size in SVG units
const baseline = 88;

// Lay out "E" then "S" with a slight tightening between them.
const pathE = font.getPath('E', 0, baseline, SIZE);
const eAdv = font.getAdvanceWidth('E', SIZE);
const kern = -4;
const pathS = font.getPath('S', eAdv + kern, baseline, SIZE);

const dE = pathE.toPathData(2);
const dS = pathS.toPathData(2);
const totalW = Math.ceil(eAdv + kern + font.getAdvanceWidth('S', SIZE));

// Header logo: E in ink, S in brand terracotta (fixes the #B10101 mismatch).
const logo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW} 110" role="img" aria-label="ES — Econschool">
  <path d="${dE}" fill="#1F1F1F"/>
  <path d="${dS}" fill="#A03A2C"/>
</svg>
`;

// Favicon: per the style guide's avatar rule, the mark sits on violet
// for small-size contrast — cream letters on #5A1BA6.
const pad = 26;
const tile = Math.max(totalW, 110) + pad * 2;
const ox = (tile - totalW) / 2;
const oy = (tile - 110) / 2;
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${tile} ${tile}">
  <rect width="${tile}" height="${tile}" rx="${Math.round(tile * 0.14)}" fill="#5A1BA6"/>
  <g transform="translate(${ox.toFixed(1)}, ${oy.toFixed(1)})">
    <path d="${dE}" fill="#FAF7F2"/>
    <path d="${dS}" fill="#FAF7F2"/>
  </g>
</svg>
`;

mkdirSync('public', { recursive: true });
writeFileSync('public/es-logo.svg', logo);
writeFileSync('public/favicon.svg', favicon);
console.log(`Wrote es-logo.svg (${totalW}×110) and favicon.svg (${tile}×${tile})`);
