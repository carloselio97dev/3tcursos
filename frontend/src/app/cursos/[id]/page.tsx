import { notFound } from "next/navigation";
import Link from "next/link";

// Tipo para los niveles de curso
type NivelCurso = "Principiante" | "Intermedio" | "Avanzado" | "Experto";

// Interfaz para los datos del curso
interface CursoData {
  titulo: string;
  descripcion: string;
  nivel: NivelCurso;
  duracion: string;
  categoria: string;
  requisitos: string[];
  temas: string[];
  certificacion: {
    nombre: string;
    validez: string;
    examen: string;
  };
}

// Datos de ejemplo - En un caso real, esto vendría de una base de datos
const cursosData: Record<string, CursoData> = {
  "sc-100": {
    titulo: "SC-100: Microsoft Cybersecurity Architect",
    descripcion: "Aprende a diseñar e implementar estrategias de ciberseguridad empresarial con Microsoft Azure.",
    nivel: "Experto",
    duracion: "40 horas",
    categoria: "Microsoft Azure Certification",
    requisitos: [
      "Conocimientos sólidos en seguridad de vla nube",
      "Experiencia con Azure Security Center",
      "Comprensión de arquitecturas cloud",
    ],
    temas: [
      "Diseño de estrategias de seguridad Zero Trust",
      "Implementación de soluciones de identidad y acceso",
      "Seguridad de infraestructura y datos",
      "Gestión de amenazas y vulnerabilidades",
    ],
    certificacion: {
      nombre: "Microsoft Cybersecurity Architect",
      validez: "2 años",
      examen: "SC-100",
    },
  },
  "az-900": {
    titulo: "AZ-900: Microsoft Certified: Azure Fundamentals",
    descripcion: "Fundamentos esenciales de la nube de Microsoft Azure para principiantes.",
    nivel: "Principiante",
    duracion: "20 horas",
    categoria: "Microsoft Azure Certification",
    requisitos: [
      "No se requiere experiencia previa",
      "Conocimientos básicos de informática",
    ],
    temas: [
      "Conceptos fundamentales de la nube",
      "Servicios principales de Azure",
      "Seguridad, privacidad y cumplimiento",
      "Precios y soporte de Azure",
    ],
    certificacion: {
      nombre: "Microsoft Azure Fundamentals",
      validez: "No expira",
      examen: "AZ-900",
    },
  },
  "aws-cp": {
    titulo: "AWS Certified Cloud Practitioner",
    descripcion: "Certificación fundamental de AWS para comprender los servicios en la nube.",
    nivel: "Principiante",
    duracion: "25 horas",
    categoria: "Amazon Web Services",
    requisitos: [
      "No se requiere experiencia previa",
      "Conocimientos básicos de informática",
    ],
    temas: [
      "Conceptos de la nube de AWS",
      "Seguridad y cumplimiento",
      "Tecnología y servicios principales",
      "Facturación y precios",
    ],
    certificacion: {
      nombre: "AWS Certified Cloud Practitioner",
      validez: "3 años",
      examen: "CLF-C01",
    },
  },
};

type CursoId = keyof typeof cursosData;

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CursoDetalle({ params }: PageProps) {
  // Esperamos a que los parámetros estén disponibles
  const { id } = await params;
  
  // Verificamos que el ID sea válido
  if (!Object.keys(cursosData).includes(id)) {
    notFound();
  }

  // Obtenemos el curso
  const curso = cursosData[id as CursoId];

  if (!curso) {
    notFound();
  }

  return (
    <main className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link
            href="/cursos"
            className="text-slate-600 hover:text-[#00AEEF] transition-colors"
          >
            Cursos
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-900">{curso.titulo}</span>
        </nav>

        {/* Encabezado */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold">{curso.titulo}</h1>
            <span className={`
              px-3 py-1 rounded-full text-sm font-medium
              ${curso.nivel === "Principiante" && "bg-green-100 text-green-800"}
              ${curso.nivel === "Intermedio" && "bg-blue-100 text-blue-800"}
              ${curso.nivel === "Avanzado" && "bg-purple-100 text-purple-800"}
              ${curso.nivel === "Experto" && "bg-red-100 text-red-800"}
            `}>
              {curso.nivel}
            </span>
          </div>
          <p className="text-lg text-slate-600">{curso.descripcion}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Información principal */}
          <div className="md:col-span-2 space-y-8">
            {/* Temas */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Contenido del curso</h2>
              <ul className="space-y-3">
                {curso.temas.map((tema, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-slate-700">{tema}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requisitos */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Requisitos previos</h2>
              <ul className="space-y-3">
                {curso.requisitos.map((requisito, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-slate-700">{requisito}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 sticky top-24">
              <div className="space-y-4">
                {/* Duración */}
                <div>
                  <h3 className="font-medium text-slate-900 mb-1">Duración</h3>
                  <p className="text-slate-600">{curso.duracion}</p>
                </div>

                {/* Certificación */}
                <div>
                  <h3 className="font-medium text-slate-900 mb-1">Certificación</h3>
                  <div className="text-sm text-slate-600">
                    <p>{curso.certificacion.nombre}</p>
                    <p>Examen: {curso.certificacion.examen}</p>
                    <p>Validez: {curso.certificacion.validez}</p>
                  </div>
                </div>

                {/* Categoría */}
                <div>
                  <h3 className="font-medium text-slate-900 mb-1">Categoría</h3>
                  <p className="text-slate-600">{curso.categoria}</p>
                </div>

                {/* Botón de contacto */}
                <Link
                  href="/contacto"
                  className="block w-full bg-[#1E3A8A] text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-[#1E3A8A]/90 transition-colors mt-6"
                >
                  Solicitar información
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}