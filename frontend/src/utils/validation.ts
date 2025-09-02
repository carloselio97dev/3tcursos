/**
 * Valida un email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida un número de teléfono peruano
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(?:\+51|51)?9\d{8}$/;
  return phoneRegex.test(phone);
};

/**
 * Valida una URL
 */
export const isValidURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Valida un DNI peruano
 */
export const isValidDNI = (dni: string): boolean => {
  return /^\d{8}$/.test(dni);
};

/**
 * Valida un RUC peruano
 */
export const isValidRUC = (ruc: string): boolean => {
  if (!/^[0-9]{11}$/.test(ruc)) return false;
  
  // Validar que empiece con 10 o 20
  if (!['10', '20'].includes(ruc.substring(0, 2))) return false;
  
  return true;
};

/**
 * Valida una contraseña fuerte
 * - Al menos 8 caracteres
 * - Al menos una letra mayúscula
 * - Al menos una letra minúscula
 * - Al menos un número
 * - Al menos un carácter especial
 */
export const isStrongPassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

/**
 * Valida que un texto no esté vacío
 */
export const isNotEmpty = (text: string): boolean => {
  return text.trim().length > 0;
};

/**
 * Valida un rango numérico
 */
export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};