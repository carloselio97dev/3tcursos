'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-[#1E3A8A] text-white py-20">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/95 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 z-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Aprende las tecnologías que transforman el presente y preparan para el futuro.
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Cursos de TI para empresas y profesionales que quieren liderar el cambio digital.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/cursos"
                className="bg-white text-[#1E3A8A] px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Ver cursos
              </Link>
              <Link
                href="/contacto"
                className="bg-[#00AEEF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#00AEEF]/90 transition-colors"
              >
                Contactar
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] hidden md:block">
            <Image
              src="https://res.cloudinary.com/dgwl8k0sn/image/upload/v1756497179/Lucid_Origin_A_modern_corporate_training_scene_in_an_office_en_3_kwllwk.jpg"
              alt="Capacitación corporativa en 3T Cursos"
              fill
              className="object-cover rounded-lg"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}