import { image } from "framer-motion/client";
import { Teachers } from "next/font/google";

export const projects = [

  {
    title: "Portafolio Personal",
    description:
      "Portafolio con Next.js 13, Tailwind CSS, Framer Motion y un diseño elegante inspirado en Haru de Persona 5 Royal.",
    image: "/images/Haru.jpg", // Guarda la imagen en public/proyectos/
    techs: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Wulises/Portafolio-Web-HxW", // cámbialo por el real
    demo: "https://portafolio-web-hxw.vercel.app/", // o el link del deploy
  },
  
  {
    title: "Proyecto con Vue.js y Vite",
    description:
      "Aplicación en Vue.js, Vite, Tailwind CSS, donde se pone aprueba lo básico del framework Vue.js con un toque de jardinería.",
    image: "/images/Vivian.png",
    techs: ['Vue3.js', 'Vite', 'Tailwind CSS'],
    github: "https://github.com/Wulises/vue-garden-tracker", // si no tienes link, déjalo así
    demo: "https://vue-garden-tracker.vercel.app/",
  },

  {
    title: 'Dashboard de Finanzas',
    description: 'Aplicación web para visualizar ingresos y gastos con gráfica dinámica y diseño personalizado, utilizando Next.js 13, Tailwind CSS, Zustand y Chart.js',
    image: '/images/kasumi.jpg',
    techs: ['Next.js', 'TypeScript','Tailwind CSS', 'Zustand', 'Chart.js'],
    github: 'https://github.com/Wulises/Personal-Finance-Tracker-WXM',
    demo: 'https://personal-finance-tracker-wxm.vercel.app/'
  },

  {
    title: 'Aplicación Monstruo de todo lo que es full stack',
    description: 'Aplicación web full stack con Next.js 13, Taiwind CSS, PostgreSQL, la cual muestra todo lo que se necesita para dominar el stack completo y moderno de desarrollo web.',
    image: '/images/makoto.png',
    techs: ['Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Express'],
    github: '',
    demo: 'https://the-real-phantom-full-stack-thief-h-alpha.vercel.app/',
  }

]
