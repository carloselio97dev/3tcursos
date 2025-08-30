export default function Recursos() {
  const recursos = [
    {
      id: 1,
      tipo: "Guía",
      titulo: "Fundamentos de Azure",
      descripcion: "Guía completa para comenzar con Microsoft Azure.",
      enlace: "#",
    },
    {
      id: 2,
      tipo: "Webinar",
      titulo: "Power BI en la Práctica",
      descripcion: "Sesión práctica sobre análisis de datos empresariales.",
      enlace: "#",
    },
    {
      id: 3,
      tipo: "E-book",
      titulo: "Seguridad en la Nube",
      descripcion: "Mejores prácticas para proteger datos en la nube.",
      enlace: "#",
    },
    {
      id: 4,
      tipo: "Tutorial",
      titulo: "Data Analytics",
      descripcion: "Tutorial paso a paso para análisis de datos.",
      enlace: "#",
    },
    {
      id: 5,
      tipo: "Infografía",
      titulo: "Cloud vs On-Premise",
      descripcion: "Comparativa detallada de soluciones.",
      enlace: "#",
    },
    {
      id: 6,
      tipo: "Checklist",
      titulo: "Seguridad IT",
      descripcion: "Lista de verificación de seguridad empresarial.",
      enlace: "#",
    },
  ];

  return (
    <main className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Recursos</h1>
          <p className="text-lg text-slate-600 mb-8">
            Material educativo gratuito para mantenerte actualizado en tecnologías de la información.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recursos.map((recurso) => (
            <a
              key={recurso.id}
              href={recurso.enlace}
              className="group bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-full text-sm font-medium">
                  {recurso.tipo}
                </span>
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-[#00AEEF] transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00AEEF] transition-colors">
                {recurso.titulo}
              </h3>
              <p className="text-slate-600">{recurso.descripcion}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
