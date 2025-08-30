export default function Casos() {
  const casos = [
    {
      id: 1,
      empresa: "TechCorp S.A.",
      industria: "Tecnología",
      desafio: "Necesidad de actualizar las habilidades del equipo en cloud computing.",
      solucion: "Programa personalizado de capacitación en Microsoft Azure.",
      resultados: [
        "100+ empleados capacitados",
        "30% mejora en eficiencia",
        "Reducción de costos en infraestructura",
      ],
    },
    {
      id: 2,
      empresa: "DataPro Inc.",
      industria: "Análisis de Datos",
      desafio: "Implementación de análisis de datos avanzado.",
      solucion: "Entrenamiento especializado en Power BI y Azure Data Services.",
      resultados: [
        "Automatización de reportes",
        "Decisiones basadas en datos",
        "ROI positivo en 6 meses",
      ],
    },
    {
      id: 3,
      empresa: "SecureNet",
      industria: "Ciberseguridad",
      desafio: "Fortalecer la seguridad de la infraestructura IT.",
      solucion: "Programa integral de ciberseguridad y buenas prácticas.",
      resultados: [
        "Reducción de incidentes",
        "Certificación del equipo",
        "Mejora en compliance",
      ],
    },
  ];

  return (
    <main className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Casos de Éxito</h1>
          <p className="text-lg text-slate-600 mb-8">
            Descubre cómo hemos ayudado a otras empresas a alcanzar sus objetivos tecnológicos.
          </p>
        </div>

        <div className="space-y-8">
          {casos.map((caso) => (
            <div
              key={caso.id}
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap gap-4 items-start mb-4">
                <h3 className="text-xl font-semibold">{caso.empresa}</h3>
                <span className="px-3 py-1 bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-full text-sm font-medium">
                  {caso.industria}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-[#00AEEF] mb-2">Desafío</h4>
                  <p className="text-slate-600">{caso.desafio}</p>
                </div>
                <div>
                  <h4 className="font-medium text-[#00AEEF] mb-2">Solución</h4>
                  <p className="text-slate-600">{caso.solucion}</p>
                </div>
                <div>
                  <h4 className="font-medium text-[#00AEEF] mb-2">Resultados</h4>
                  <ul className="space-y-1">
                    {caso.resultados.map((resultado, index) => (
                      <li key={index} className="flex items-center gap-2 text-slate-600">
                        <svg
                          className="w-4 h-4 text-[#00AEEF] flex-shrink-0"
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
                        {resultado}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
