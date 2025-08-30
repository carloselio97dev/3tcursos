export default function Soluciones() {
  const soluciones = [
    {
      id: 1,
      titulo: "Capacitación Empresarial",
      descripcion: "Programas personalizados para equipos corporativos.",
      caracteristicas: [
        "Contenido adaptado a necesidades específicas",
        "Instructores certificados",
        "Evaluación y seguimiento",
        "Soporte post-capacitación",
      ],
    },
    {
      id: 2,
      titulo: "Licencias por Volumen",
      descripcion: "Gestión de licencias para software empresarial.",
      caracteristicas: [
        "Precios preferenciales",
        "Portal de administración",
        "Soporte técnico dedicado",
        "Renovación automática",
      ],
    },
    {
      id: 3,
      titulo: "Consultoría Tecnológica",
      descripcion: "Asesoramiento experto en transformación digital.",
      caracteristicas: [
        "Análisis de necesidades",
        "Recomendaciones estratégicas",
        "Implementación guiada",
        "Monitoreo de resultados",
      ],
    },
  ];

  return (
    <main className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Soluciones Empresariales</h1>
          <p className="text-lg text-slate-600 mb-8">
            Servicios integrales diseñados para potenciar el desarrollo tecnológico de tu empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {soluciones.map((solucion) => (
            <div
              key={solucion.id}
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{solucion.titulo}</h3>
              <p className="text-slate-600 mb-4">{solucion.descripcion}</p>
              <ul className="space-y-2">
                {solucion.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-600">
                    <svg
                      className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {caracteristica}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
