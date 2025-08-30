import type { Course } from "@/data/courses";
import Link from "next/link";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="bg-white rounded-xl border border-slate-200 shadow-soft overflow-hidden flex flex-col">
      {/* Contenido */}
      <div className="p-5 flex-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">{course.title}</h3>
          {course.badge && (
            <span className="text-xs px-2 py-1 rounded-full bg-brand-primary/10 text-brand-primary">
              {course.badge}
            </span>
          )}
        </div>

        <p className="mt-2 text-slate-600">{course.summary}</p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-xs px-2 py-1 rounded-full bg-slate-100">
            {course.level}
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-slate-100">
            {course.modality}
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-slate-100">
            {course.durationHrs}h
          </span>
        </div>
      </div>

      {/* Acciones */}
      <div className="px-5 pb-5 pt-0 flex items-center justify-between">
        <Link
          href={`#/cursos/${course.id}`}
          className="text-brand-primary hover:underline"
        >
          Ver detalle
        </Link>
        <Link
          href="#cotizar"
          className="px-4 py-2 rounded-lg bg-brand-primary text-white font-medium hover:opacity-90"
        >
          Cotizar
        </Link>
      </div>
    </article>
  );
}
