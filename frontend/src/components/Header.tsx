'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const nav = [
    { label: "Inicio", href: "/" },
    { label: "Cursos", href: "/cursos" },
    { label: "Soluciones", href: "/soluciones" },
    { label: "Casos", href: "/casos" },
    { label: "Recursos", href: "/recursos" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-[#1E3A8A] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-14 md:h-20 px-4">
          {/* Logo */}
          <Link href="/" className="text-lg md:text-xl font-medium">
            3T Cursos
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base transition-colors ${
                  isActive(item.href)
                    ? "text-white font-medium bg-white/10 px-4 py-2 rounded-lg"
                    : "text-gray-200 hover:text-[#00B4D8]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Acciones Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/area-empresa"
              className={`transition-colors ${
                isActive("/area-empresa")
                  ? "text-white font-medium bg-white/10 px-4 py-2 rounded-lg"
                  : "text-gray-200 hover:text-[#00B4D8]"
              }`}
            >
              Área empresa
            </Link>
            <Link
              href="/cotizar"
              className="bg-white text-[#1E3A8A] px-4 py-2 rounded font-medium hover:bg-white/90 transition-colors"
            >
              Cotizar
            </Link>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 -mr-2 md:hidden"
            aria-label="Menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Menú móvil */}
        <div
          className={`${
            open ? "block" : "hidden"
          } md:hidden bg-[#1E3A8A]`}
        >
          <nav className="px-4 pt-2 pb-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 text-base border-b border-white/10 ${
                  isActive(item.href) ? "bg-white/10 font-medium" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/area-empresa"
              className={`block py-3 text-base border-b border-white/10 ${
                isActive("/area-empresa") ? "bg-white/10 font-medium" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              Área empresa
            </Link>
            <div className="pt-4">
              <Link
                href="/cotizar"
                className="block w-full py-3 text-center bg-white text-[#1E3A8A] rounded font-medium"
                onClick={() => setOpen(false)}
              >
                Cotizar
              </Link>
            </div>

            <div className="mt-8 text-sm text-white/80">
              <p>
                Impulsa el desarrollo de tu equipo con cursos especializados en Azure, Data y Ciberseguridad
              </p>
              <div className="flex gap-4 mt-4">
                <Link
                  href="/cursos"
                  className="inline-block px-6 py-2 bg-white text-[#1E3A8A] rounded font-medium text-center"
                >
                  Ver cursos
                </Link>
                <Link
                  href="/contacto"
                  className="inline-block px-6 py-2 bg-[#00B4D8] text-white rounded font-medium text-center"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}