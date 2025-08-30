export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  course: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Cristhian Vila Cordero",
    role: "Desarrollador",
    company: "3t Cursos",
    image: "/testimonials/avatar.png",
    content: "Me he capacitado en 3t Cursos, he llevado varios cursos de programación y todos han sido de altísima calidad, con 3t Cursos puedo mantenerme actualizado en TI.",
    course: "Programación"
  },
  {
    id: "2",
    name: "Enrique Perez Menendez",
    role: "Full Stack Developer",
    company: "3t Cursos",
    image: "/testimonials/avatar.png",
    content: "Llevé el curso de Full Stack Web Developer, un curso muy detallado, super claro y efectivo. Gracias al entrenamiento he creado y administro mi site de Ventas Online.",
    course: "Full Stack Web Developer"
  },
  {
    id: "3",
    name: "Jose Sotelo Jiménez",
    role: "Software Developer",
    company: "3t Cursos",
    image: "/testimonials/avatar.png",
    content: "3t Cursos me ayudó a reforzar mis conocimientos, gracias a 3t Cursos y mi esfuerzo hoy trabajo haciendo lo que más me gusta, desarrollando Software.",
    course: "Desarrollo de Software"
  },
  {
    id: "4",
    name: "Diego Gutierrez Aguirre",
    role: "Mobile Developer",
    company: "3t Cursos",
    image: "/testimonials/avatar.png",
    content: "Me capacité en 3t Cursos y logré mi objetivo de desarrollar apps móviles para Android. Un curso muy completo con explicaciones claras y precisas. Altamente recomendado.",
    course: "Desarrollo Android"
  },
  {
    id: "5",
    name: "Angel Alata Perla",
    role: "UI Developer",
    company: "3t Cursos",
    image: "/testimonials/avatar.png",
    content: "Con 3t Cursos pude actualizar mis conocimientos a SWIFT UI, desarrollamos una App de billetera digital completo con acceso a datos, un muy buen curso.",
    course: "SWIFT UI Development"
  },
  {
    id: "6",
    name: "Enrique Cordero",
    role: "Full Stack Developer",
    company: "3t Cursos",
    image: "/testimonials/avatar.png",
    content: "He participado en el curso de Full Stack Web, el contenido es muy acertado, muy completo, se ve el desarrollo paso a paso y también el despliegue a la nube.",
    course: "Full Stack Web"
  }
];
