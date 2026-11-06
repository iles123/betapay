export type Tone = 'blue' | 'green' | 'amber' | 'red' | 'violet' | 'cyan' | 'pink' | 'slate';

const TONES = {
  light: {
    blue: { fg: '#2563EB', bg: '#E7EFFE' },
    green: { fg: '#0F9D76', bg: '#E2F6EF' },
    amber: { fg: '#B45309', bg: '#FDF1DF' },
    red: { fg: '#DC2626', bg: '#FCEAEA' },
    violet: { fg: '#7C3AED', bg: '#F1EAFE' },
    cyan: { fg: '#0891B2', bg: '#E1F5FA' },
    pink: { fg: '#DB2777', bg: '#FCE7F1' },
    slate: { fg: '#475569', bg: '#EDF1F7' },
  },
  dark: {
    blue: { fg: '#7AA5FF', bg: '#16264A' },
    green: { fg: '#34D399', bg: '#0E2A22' },
    amber: { fg: '#FBBF24', bg: '#2A2210' },
    red: { fg: '#F87171', bg: '#2A1517' },
    violet: { fg: '#C4B5FD', bg: '#211A3A' },
    cyan: { fg: '#67E8F9', bg: '#0B2A33' },
    pink: { fg: '#F9A8D4', bg: '#2C1522' },
    slate: { fg: '#A3B0C2', bg: '#1A2436' },
  },
} as const;

export function getTone(tone: Tone, scheme: 'light' | 'dark' | null | undefined) {
  return TONES[scheme === 'dark' ? 'dark' : 'light'][tone];
}
