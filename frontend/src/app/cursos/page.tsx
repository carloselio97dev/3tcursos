import Link from "next/link";

interface Curso {
  id: string;
  titulo: string;
  descripcion?: string;
  categoria: string;
  nivel?: "Principiante" | "Intermedio" | "Avanzado" | "Experto";
  duracion?: string;
}

export default function Cursos() {
  const categorias = [
    {
      id: "azure",
      titulo: "Microsoft Azure Certification",
      descripcion: "Cursos de preparación para los examenes de certificación oficial de Microsoft.",
      cursos: [
        { id: "sc-100", titulo: "SC-100: Microsoft Cybersecurity Architect", nivel: "Experto" },
        { id: "dp-900", titulo: "DP-900: Microsoft Certified: Azure Data Fundamentals", nivel: "Principiante" },
        { id: "ai-900", titulo: "AI-900: Microsoft Certified: Azure AI Fundamentals", nivel: "Principiante" },
        { id: "az-900", titulo: "AZ-900: Microsoft Certified: Azure Fundamentals", nivel: "Principiante" },
        { id: "az-104", titulo: "AZ-104: Microsoft Certified: Azure Administrator Associate", nivel: "Intermedio" },
        { id: "az-204", titulo: "AZ-204: Microsoft Certified: Azure Developer Associate", nivel: "Intermedio" },
        { id: "az-500", titulo: "AZ-500: Microsoft Certified: Azure Security Engineer Associate", nivel: "Intermedio" },
        { id: "az-305", titulo: "AZ-305: Microsoft Certified: Azure Solutions Architect Expert", nivel: "Experto" },
        { id: "az-700", titulo: "AZ-700: Microsoft Certified: Azure Network Engineer Associate", nivel: "Intermedio" },
      ]
    },
    {
      id: "aws",
      titulo: "Amazon Web Services",
      descripcion: "Cursos de preparación para los examenes de certificación oficial de AWS.",
      cursos: [
        { id: "aws-cp", titulo: "AWS Certified Cloud Practitioner", nivel: "Principiante" },
        { id: "aws-sysops", titulo: "AWS Certified SysOps Administrator", nivel: "Intermedio" },
        { id: "aws-dev", titulo: "AWS Certified Developer", nivel: "Intermedio" },
        { id: "aws-sec", titulo: "AWS Certified Security", nivel: "Intermedio" },
        { id: "aws-net", titulo: "AWS Certified Advanced Networking", nivel: "Avanzado" },
        { id: "aws-arch", titulo: "AWS Certified Solutions Architect", nivel: "Avanzado" },
        { id: "aws-devops", titulo: "AWS Certified DevOps Engineer", nivel: "Avanzado" },
        { id: "aws-ml", titulo: "AWS Certified Machine Learning", nivel: "Avanzado" },
        { id: "aws-data", titulo: "AWS Certified Data Analytics", nivel: "Avanzado" },
      ]
    },
    {
      id: "kubernetes",
      titulo: "Kubernetes Certification",
      descripcion: "Cursos de preparación para los examenes de certificación oficial de Kubernetes",
      cursos: [
        { id: "cka", titulo: "Certified Kubernetes Administrator", nivel: "Avanzado" },
        { id: "ckad", titulo: "Certified Kubernetes Application Developer", nivel: "Avanzado" },
        { id: "cks", titulo: "Certified Kubernetes Security Specialist", nivel: "Experto" },
      ]
    },
    {
      id: "confluent",
      titulo: "Confluent Certification",
      descripcion: "Cursos de preparación para los examenes de certificación oficial de Confluent.",
      cursos: [
        { id: "kafka-dev", titulo: "Confluent Certified Developer for Apache Kafka", nivel: "Intermedio" },
        { id: "kafka-admin", titulo: "Confluent Certified Administrator for Apache Kafka", nivel: "Intermedio" },
      ]
    },
    {
      id: "seguridad",
      titulo: "Seguridad",
      descripcion: "Cursos especializados en seguridad de aplicaciones y sistemas",
      cursos: [
        { id: "owasp-web", titulo: "OWASP TOP 10 Web", nivel: "Intermedio" },
        { id: "owasp-api", titulo: "OWASP Api Security TOP 10", nivel: "Intermedio" },
        { id: "owasp-lcnc", titulo: "OWASP Low-Code/No-Code Top 10", nivel: "Intermedio" },
        { id: "owasp-ai", titulo: "OWASP Agentic AI top 10 for LLM Apps", nivel: "Avanzado" },
        { id: "thread-model", titulo: "Thread modeling", nivel: "Avanzado" },
        { id: "sslp", titulo: "Secure Software Lifecycle Professional", nivel: "Avanzado" },
        { id: "mobile-sec", titulo: "Mobile Security Framework", nivel: "Intermedio" },
        { id: "ast", titulo: "Implementacion de AST (Application Security Testing)", nivel: "Avanzado" },
      ]
    },
    {
      id: "mobile",
      titulo: "Mobile",
      descripcion: "Desarrollo de aplicaciones móviles nativas y multiplataforma",
      cursos: [
        { id: "android", titulo: "Desarrollo de aplicaciones móviles con Android", nivel: "Intermedio" },
        { id: "ios", titulo: "Desarrollo de aplicaciones móviles con iOS", nivel: "Intermedio" },
        { id: "flutter", titulo: "Desarrollo de aplicaciones móviles con Flutter", nivel: "Intermedio" },
      ]
    },
    {
      id: "server",
      titulo: "Server side",
      descripcion: "Arquitectura y desarrollo de microservicios",
      cursos: [
        { id: "spring", titulo: "Diseño de Arquitectura y desarrollo de microservicios con Spring Boot", nivel: "Avanzado" },
        { id: "quarkus", titulo: "Diseño de Arquitectura y desarrollo de microservicios con Quarkus", nivel: "Avanzado" },
        { id: "dotnet", titulo: "Diseño de Arquitectura y desarrollo de microservicios con .NET 8", nivel: "Avanzado" },
        { id: "nestjs", titulo: "Diseño de Arquitectura y desarrollo de microservicios con NestJS", nivel: "Avanzado" },
      ]
    },
    {
      id: "frontend",
      titulo: "Front Web",
      descripcion: "Desarrollo de aplicaciones web modernas",
      cursos: [
        { id: "angular", titulo: "Diseño y Desarrollo de aplicaciones Microfront con Angular", nivel: "Avanzado" },
        { id: "nextjs", titulo: "Diseño y Desarrollo de aplicaciones Microfront con NextJS", nivel: "Avanzado" },
      ]
    },
    {
      id: "lowcode",
      titulo: "Low-code No-code",
      descripcion: "Automatización y desarrollo sin código",
      cursos: [
        { id: "zapier", titulo: "Automatizaciones con Zapier y Make", nivel: "Principiante" },
        { id: "bots", titulo: "Implementación de Bots de WhatsApp o Telegram sin código", nivel: "Principiante" },
        { id: "n8n", titulo: "Automatizaciones de negocios con n8n", nivel: "Intermedio" },
        { id: "power", titulo: "Desarrollo de Aplicaciones empresariales con Power Platform", nivel: "Intermedio" },
      ]
    },
    {
      id: "arquitectura",
      titulo: "Arquitecturas empresariales",
      descripcion: "Frameworks de arquitectura empresarial",
      cursos: [
        { id: "togaf", titulo: "Curso de TOGAF", nivel: "Avanzado" },
        { id: "bian", titulo: "Curso de BIAN", nivel: "Avanzado" },
      ]
    },
  ];

  return (
    <main className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Nuestros Cursos</h1>
          <p className="text-lg text-slate-600 mb-8">
            Programas especializados y cursos de preparación para certificaciones oficiales que te ayudarán a potenciar tu carrera en tecnología.
          </p>
        </div>

        <div className="space-y-16">
          {categorias.map((categoria) => (
            <section key={categoria.id} className="scroll-mt-16" id={categoria.id}>
              <div className="border-b border-slate-200 pb-8 mb-8">
                <h2 className="text-2xl font-bold mb-2">{categoria.titulo}</h2>
                <p className="text-slate-600">{categoria.descripcion}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoria.cursos.map((curso) => (
                  <div
                    key={curso.id}
                    className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold">{curso.titulo}</h3>
                      <span className={`
                        px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${curso.nivel === "Principiante" && "bg-green-100 text-green-800"}
                        ${curso.nivel === "Intermedio" && "bg-blue-100 text-blue-800"}
                        ${curso.nivel === "Avanzado" && "bg-purple-100 text-purple-800"}
                        ${curso.nivel === "Experto" && "bg-red-100 text-red-800"}
                      `}>
                        {curso.nivel}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <Link
                        href={`/cursos/${curso.id}`}
                        className="text-sm font-medium text-[#00AEEF] hover:text-[#1E3A8A] transition-colors"
                      >
                        Ver detalles
                        <span className="sr-only">{curso.titulo}</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}