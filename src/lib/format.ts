export function formatNumber(value: number, decimals = 2) {
  const fixed = Math.abs(value).toFixed(decimals);
  const [whole, fraction] = fixed.split('.');
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return fraction ? `${grouped}.${fraction}` : grouped;
}

export function formatNaira(value: number, options?: { decimals?: boolean; sign?: boolean }) {
  const { decimals = true, sign = false } = options ?? {};
  const formatted = formatNumber(value, decimals ? 2 : 0);
  const prefix = sign ? (value < 0 ? '-' : '+') : value < 0 ? '-' : '';
  return `₦${prefix}${formatted}`;
}

export function formatCompact(value: number) {
  if (Math.abs(value) >= 1_000_000) {
    return `₦${(value / 1_000_000).toFixed(1)}M`;
  }
  if (Math.abs(value) >= 1_000) {
    return `₦${(value / 1_000).toFixed(0)}k`;
  }
  return `₦${value}`;
}

export function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}
