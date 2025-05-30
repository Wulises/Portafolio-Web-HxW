'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutContent() {
  return (
    <section className="min-h-screen bg-darkBlack text-creamWhite px-6 py-16 flex flex-col justify-center items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-display text-royalGold mb-6 drop-shadow-md"

      >
        Sobre mí
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl max-w-3xl text-center font-body text-creamWhite leading-relaxed"
      >
        Soy Ulises, desarrollador full stack con un enfoque en frontend.
        Me apasiona crear experiencias elegantes, intuitivas y visualmente atractivas.
        Amo el arte digital, la programación, y juegos como <strong>Persona 5 Royal</strong>,
        que me han inspirado a nunca rendirme. Trabajo con tecnologías modernas como
        <span className="text-royalGold font-semibold"> React, Next.js, Tailwind, SQL</span> y más.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 text-md md:text-lg max-w-2xl text-center text-creamWhite font-body"
      >
        Mi enfoque combina diseño y funcionalidad para construir soluciones que no solo funcionen,
        sino que se vean y sientan bien. Estoy comprometido a crecer como profesional y dar lo mejor en cada proyecto.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-2 border-2 border-royalGold text-royalGold hover:bg-royalGold hover:text-darkBlack transition-colors duration-300 font-semibold uppercase tracking-wider"
        >
          Volver al Inicio
        </Link>
      </motion.div>
    </section>

  );
}
