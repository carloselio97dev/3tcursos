// Tipos para los cursos
export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  duration: number; // en minutos
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  topics: string[];
  price: number;
  instructor: Instructor;
  category: Category;
  tags: string[];
  requirements: string[];
  objectives: string[];
  thumbnail: string;
  featured: boolean;
  rating: number;
  studentsCount: number;
  updatedAt: Date;
}

// Tipos para los instructores
export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  specialties: string[];
  certifications: string[];
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// Tipos para las categorías
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
}

// Tipos para los testimonios
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
  rating: number;
  date: Date;
}

// Tipos para los usuarios
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  avatar?: string;
  company?: string;
  position?: string;
  enrolledCourses?: string[]; // IDs de los cursos
  preferences?: {
    notifications: boolean;
    newsletter: boolean;
    language: 'es' | 'en';
  };
}

// Tipos para las órdenes/compras
export interface Order {
  id: string;
  userId: string;
  courseId: string;
  status: 'pending' | 'completed' | 'cancelled';
  amount: number;
  paymentMethod: 'card' | 'transfer';
  createdAt: Date;
  updatedAt: Date;
}

// Tipos para el progreso del curso
export interface CourseProgress {
  userId: string;
  courseId: string;
  completedLessons: string[]; // IDs de las lecciones completadas
  quizScores: {
    [quizId: string]: number;
  };
  lastAccessed: Date;
  completionPercentage: number;
}

// Tipos para las notificaciones
export interface Notification {
  id: string;
  userId: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

// Tipos para el sistema de mensajería
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  read: boolean;
  createdAt: Date;
}

// Tipos para las respuestas de la API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

// Tipos para los filtros de búsqueda
export interface SearchFilters {
  category?: string;
  level?: Course['level'];
  priceRange?: {
    min: number;
    max: number;
  };
  duration?: {
    min: number;
    max: number;
  };
  rating?: number;
  sortBy?: 'price' | 'rating' | 'popularity' | 'newest';
  page?: number;
  limit?: number;
}