import fs from 'fs'

function seededRandom(seed: number) {
  return function() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }
}

function rainbowText(text: string, seed: number, freq: number = 0.1, spread: number = 3.0): string {
  let result = '';
  let i = 0;
  const random = seededRandom(seed);
  const startColor = random() * 256;

  for (const char of text) {
    if (char === '\n') {
      result += char;
      i = 0;
      continue;
    }

    const color = (startColor + i * freq) % 256;
    const r = Math.sin(0.024 * color + 0) * 127 + 128 + (random() - 0.5) * 40;
    const g = Math.sin(0.024 * color + 2 * Math.PI / 3) * 127 + 128 + (random() - 0.5) * 40;
    const b = Math.sin(0.024 * color + 4 * Math.PI / 3) * 127 + 128 + (random() - 0.5) * 40;

    result += `\x1b[38;2;${Math.round(Math.max(0, Math.min(255, r)))};${Math.round(Math.max(0, Math.min(255, g)))};${Math.round(Math.max(0, Math.min(255, b)))}m${char}`;
    i += spread;
  }

  return result + '\x1b[0m';  // Reset color at the end
}

const text = fs.readFileSync('dist/quote.txt', 'utf8');
const seed = Math.floor(Math.random() * 1000);
const coloredText = rainbowText(text, seed, 0.25, 6.0);
fs.writeFileSync('./dist/lolcat.ansi', coloredText);
