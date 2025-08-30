import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-brand-dark to-[#0F3347] py-20 md:py-28 text-white">
      <div className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Texto principal */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Impulsa tu carrera en tecnología
          </h1>
          <p className="mt-3 text-white/85 max-w-xl text-lg">
            Formación especializada en Cloud, Data y Ciberseguridad. Aprende con expertos y destaca en el mundo digital.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="#cotizar"
              className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-brand-primary text-white font-medium hover:opacity-90"
            >
              Solicitar cotización
            </Link>
            <Link
              href="#cursos"
              className="inline-flex justify-center items-center px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10"
            >
              Ver catálogo
            </Link>
          </div>

          {/* Métricas */}
          <div className="mt-6 flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <span>👥</span>
              <span>+1,000 profesionales</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🏅</span>
              <span>Instructores certificados</span>
            </div>
            <div className="flex items-center gap-2">
              <span>☎️</span>
              <span>Soporte a RR.HH.</span>
            </div>
          </div>
        </div>

        {/* Caja estimador visual (placeholder) */}
        <div>
          <div className="rounded-2xl border border-white/20 p-6 backdrop-blur bg-white/5">
            <h3 className="text-lg font-semibold mb-2">
              Calcula tu precio por asiento
            </h3>
            <p className="text-white/80 mb-4">
              Descuento automático según número de colaboradores.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white/10">
                <div className="text-sm text-white/80">Asientos</div>
                <div className="text-2xl font-bold">25</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10">
                <div className="text-sm text-white/80">Estimado/Asiento</div>
                <div className="text-2xl font-bold">S/ 432</div>
              </div>
            </div>
            <p className="mt-3 text-xs text-white/70">
              * Calculadora interactiva en sección Cotizar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
