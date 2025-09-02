import Image from "next/image";
import Link from "next/link";
import WhyUs from "@/components/features/WhyUs";
import Testimonials from "@/components/features/Testimonials";
import Hero from "@/components/features/Hero";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      <WhyUs
        eyebrow="¿Por qué elegir 3T Cursos?"
        title="Lo que nos hace diferentes"
        subtitle="Metodologías probadas, instructores expertos y práctica aplicada para resultados reales."
        cta={{ label: "Conoce nuestros cursos", href: "/cursos" }}
      />

      <Testimonials />
    </main>
  );
}