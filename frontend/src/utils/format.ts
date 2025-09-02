/**
 * Formatea un número como precio en soles
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2
  }).format(price);
};

/**
 * Formatea una fecha en formato largo
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

/**
 * Convierte un texto en un slug URL-friendly
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

/**
 * Trunca un texto a una longitud máxima
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Formatea un número como duración (horas y minutos)
 */
export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (hours === 0) return `${minutes} minutos`;
  if (remainingMinutes === 0) return `${hours} hora${hours > 1 ? 's' : ''}`;
  return `${hours} hora${hours > 1 ? 's' : ''} y ${remainingMinutes} minuto${remainingMinutes > 1 ? 's' : ''}`;
};