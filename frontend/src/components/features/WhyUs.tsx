'use client';

import Link from 'next/link';
import { ShieldCheck, FlaskConical, Briefcase, Building2, RefreshCw, Boxes } from "lucide-react";

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  featured?: boolean;
};

type WhyUsProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: Feature[];
  cta?: { label: string; href: string };
};

export const FEATURES: Feature[] = [
  {
    id: "efectivas",
    title: "100% Efectivas",
    description: "Objetivos claros y evaluables en cada curso.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    id: "metodologia",
    title: "Excelente metodología",
    description: "Claridad y práctica guiada para avanzar paso a paso.",
    icon: <FlaskConical className="w-6 h-6" />,
    featured: true
  },
  {
    id: "reales",
    title: "Casos reales",
    description: "Laboratorios aplicados a problemas del negocio.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    id: "experiencia",
    title: "+15 años de experiencia",
    description: "Instructores referentes en la industria TI.",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    id: "actualizado",
    title: "Contenido actualizado",
    description: "Tecnologías y tendencias vigentes del mercado.",
    icon: <RefreshCw className="w-6 h-6" />,
  },
  {
    id: "proyectos",
    title: "Aprende creando proyectos",
    description: "Construcción guiada hasta el objetivo final.",
    icon: <Boxes className="w-6 h-6" />,
  },
];

export default function WhyUs({
  eyebrow = "¿Por qué elegir 3T Cursos?",
  title = "Lo que nos hace diferentes",
  subtitle = "Metodologías probadas, instructores expertos y práctica aplicada para resultados reales.",
  items = FEATURES,
  cta
}: WhyUsProps) {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#1E3A8A] bg-blue-50 border border-blue-100 rounded-full px-6 py-2 text-sm font-medium">
            {eyebrow}
          </div>
          <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((feature) => (
            <article
              key={feature.id}
              role="article"
              aria-label={feature.title}
              className={`
                group relative rounded-2xl p-6 transition-all duration-300 ease-in-out
                hover:-translate-y-1
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                ${feature.featured 
                  ? 'bg-gradient-to-b from-[#1E3A8A] to-[#0F2167] text-white shadow-xl hover:shadow-blue-500/25' 
                  : 'bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg'
                }
              `}
            >
              {/* Icono */}
              <div className={`
                h-12 w-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110
                ${feature.featured
                  ? 'bg-white/20'
                  : 'bg-blue-50'
                }
              `}>
                <div className={`
                  transition-transform duration-300 group-hover:scale-110
                  ${feature.featured ? 'text-white' : 'text-[#1E3A8A]'}
                `}>
                  {feature.icon}
                </div>
              </div>

              {/* Contenido */}
              <h3 className={`text-lg font-semibold mb-2 ${feature.featured ? 'text-white' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
              <p className={`leading-relaxed ${feature.featured ? 'text-white/90' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        {cta && (
          <div className="mt-12 text-center">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center rounded-full bg-[#1E3A8A] hover:bg-[#0F2167] text-white font-semibold px-6 py-3 text-base transition-colors duration-300"
            >
              {cta.label}
            </Link>
          </div>
        )}
      </div>

      {/* Divisor decorativo */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-24 bg-gradient-to-b from-transparent to-[#1E3A8A]/5" />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1E3A8A]/10 to-transparent" />
      </div>
    </section>
  );
}