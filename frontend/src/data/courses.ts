// src/data/courses.ts

export type Course = {
  id: string;
  title: string;
  summary: string;
  level: string;
  modality: string;
  durationHrs: number;
  priceBase: number;
  badge?: string;
};

export const courses: Course[] = [
  {
    id: "azure-advanced",
    title: "Microsoft Azure Avanzado",
    summary: "Arquitecturas, redes, seguridad y optimización de costos.",
    level: "Avanzado",
    modality: "Live / In-company",
    durationHrs: 24,
    priceBase: 450,
    badge: "Más vendido",
  },
  {
    id: "databricks-azure",
    title: "Databricks on Azure",
    summary: "Delta Lake, ETL con Auto Loader y orquestación en la nube.",
    level: "Intermedio",
    modality: "Live / On-demand",
    durationHrs: 20,
    priceBase: 520,
    badge: "Nuevo",
  },
  {
    id: "seguridad-cloud",
    title: "Seguridad en la Nube",
    summary: "Zero Trust, gestión de identidades y cumplimiento normativo.",
    level: "Intermedio",
    modality: "In-company",
    durationHrs: 16,
    priceBase: 480,
    badge: "Empresas",
  },
];
