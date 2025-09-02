import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const variants = {
  default: 'bg-white shadow-sm',
  hover: 'bg-white shadow-sm hover:shadow-md transition-shadow duration-200',
  bordered: 'bg-white border border-gray-200'
};

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
};

export default function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md'
}: CardProps) {
  return (
    <div className={`rounded-lg ${variants[variant]} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
}

// Sub-componentes para una mejor organización
Card.Header = function CardHeader({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

Card.Title = function CardTitle({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
      {children}
    </h3>
  );
};

Card.Description = function CardDescription({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-sm text-gray-600 ${className}`}>
      {children}
    </p>
  );
};

Card.Content = function CardContent({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mt-4 ${className}`}>
      {children}
    </div>
  );
};


