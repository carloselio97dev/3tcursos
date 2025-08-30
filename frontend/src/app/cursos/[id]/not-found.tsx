import Link from "next/link";

export default function NotFound() {
  return (
    <main className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Curso no encontrado</h2>
          <p className="text-lg text-slate-600 mb-8">
            Lo sentimos, el curso que estás buscando no está disponible o no existe.
          </p>
          <Link
            href="/cursos"
            className="inline-flex items-center gap-2 text-[#00AEEF] hover:text-[#1E3A8A] transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver a cursos
          </Link>
        </div>
      </div>
    </main>
  );
}
