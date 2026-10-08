export const formatCurrency = (value: number, currency = 'XOF') =>
  new Intl.NumberFormat('fr-CI', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
