"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { calcPricePerSeat } from "@/lib/pricing";

export default function PricingEstimator() {
  const [seats, setSeats] = useState(25); // Nº de colaboradores
  const [base, setBase] = useState(480);  // Precio lista por asiento (S/)

  const price = useMemo(() => calcPricePerSeat(base, seats), [base, seats]);

  return (
    <div className="rounded-xl border border-slate-200 p-6 bg-white">
      {/* Inputs */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Asientos (colaboradores)
          </label>
          <input
            type="number"
            min={1}
            value={seats}
            onChange={(e) => setSeats(Math.max(1, Number(e.target.value)))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Precio lista por asiento (S/)
          </label>
          <input
            type="number"
            min={1}
            value={base}
            onChange={(e) => setBase(Math.max(1, Number(e.target.value)))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>
      </div>

      {/* Info */}
      <div className="mt-4">
        <p className="text-sm text-slate-600">
          Descuentos automáticos: 10% (10–49), 18% (50–99), 25% (100+)
        </p>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-slate-50">
            <div className="text-xs text-slate-500">Asientos</div>
            <div className="text-2xl font-bold">{seats}</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50">
            <div className="text-xs text-slate-500">Estimado por asiento</div>
            <div className="text-2xl font-bold">S/ {price}</div>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link
          href="#cotizar"
          className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-brand-primary text-white font-medium hover:opacity-90"
        >
          Solicitar cotización
        </Link>
        <Link
          href="#contacto"
          className="inline-flex justify-center items-center px-5 py-3 rounded-xl border border-slate-300 hover:bg-white"
        >
          Hablar por WhatsApp
        </Link>
      </div>
    </div>
  );
}
