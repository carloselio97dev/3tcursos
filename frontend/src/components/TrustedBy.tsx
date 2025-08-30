export default function TrustedBy() {
  const LOGOS = ["AcmeBank", "PeruTel", "DataAndes", "LogiPac"];

  return (
    <div>
      <p className="uppercase tracking-wide text-sm text-slate-500">
        Confiados por equipos en
      </p>

      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {LOGOS.map((name) => (
          <div
            key={name}
            className="p-4 border border-slate-200 rounded-xl text-center bg-white"
          >
            <span className="text-sm font-medium text-slate-700">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
