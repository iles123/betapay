import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#0B1524',
    textSecondary: '#5C6B82',
    textTertiary: '#8C98AB',
    background: '#F4F7FC',
    backgroundElement: '#EEF2F8',
    backgroundSelected: '#E3EAF5',
    surface: '#FFFFFF',
    surfaceAlt: '#F7F9FC',
    border: '#E3E9F2',
    primary: '#2563EB',
    primaryPressed: '#1D4ED8',
    primarySoft: '#E7EFFE',
    primaryStrong: '#1E40AF',
    onPrimary: '#FFFFFF',
    success: '#0F9D76',
    successSoft: '#E2F6EF',
    danger: '#E5484D',
    dangerSoft: '#FCEAEA',
    warning: '#D97706',
    warningSoft: '#FDF1DF',
    info: '#0EA5E9',
    infoSoft: '#E5F6FD',
    tabBar: '#FFFFFF',
    cardStart: '#1E4FD8',
    cardEnd: '#0A2A6B',
    cardMuted: '#0F172A',
    overlay: 'rgba(9, 16, 30, 0.45)',
    skeleton: '#E9EEF6',
  },
  dark: {
    text: '#F4F7FC',
    textSecondary: '#A3B0C2',
    textTertiary: '#7C8AA0',
    background: '#080D18',
    backgroundElement: '#141D2E',
    backgroundSelected: '#1D2940',
    surface: '#101827',
    surfaceAlt: '#0C1422',
    border: '#1E293B',
    primary: '#4F83F7',
    primaryPressed: '#3B72EE',
    primarySoft: '#16264A',
    primaryStrong: '#93B4FF',
    onPrimary: '#FFFFFF',
    success: '#34D399',
    successSoft: '#0E2A22',
    danger: '#F87171',
    dangerSoft: '#2A1517',
    warning: '#FBBF24',
    warningSoft: '#2A2210',
    info: '#38BDF8',
    infoSoft: '#0C2634',
    tabBar: '#0C1422',
    cardStart: '#1D4ED8',
    cardEnd: '#0A1F4D',
    cardMuted: '#050A14',
    overlay: 'rgba(0, 0, 0, 0.6)',
    skeleton: '#1A2436',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Brand = {
  blue: '#2563EB',
  blueDark: '#1D4ED8',
  navy: '#0B2A6B',
  cyan: '#22D3EE',
} as const;

export const Radius = {
  sm: 10,
  md: 14,
  lg: 20,
  xl: 26,
  pill: 999,
} as const;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const TAB_BAR_HEIGHT = 64;
export const BottomTabInset = TAB_BAR_HEIGHT + 16;
export const MaxContentWidth = 800;
