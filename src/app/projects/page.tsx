'use client';

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'


export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-darkBlack text-creamWhite px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-display text-royalGold drop-shadow-md mb-2 text-center"
        >
          Mis Proyectos
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl font-body text-center text-creamWhite"
        >
          Aquí te muestro algunos de los proyectos que he desarrollado con pasión, creatividad y mucho café ☕.
        </motion.p>

        {/* Lista de proyectos */}
        <section className="grid gap-10 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + i * 0.4, // Más separación entre entradas
                duration: 1.2,         // Más lento y elegante
                ease: "easeOut",       // Movimiento más fluido
              }}
              whileHover={{ scale: 1.02 }}
              className="bg-darkBlack border-2 border-royalGold rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="rounded-md shadow-lg border border-royalGold mb-4"
              />
              <h3 className="text-2xl font-display text-royalGold mb-2">{project.title}</h3>
              <p className="text-creamWhite font-body mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="bg-royalGold/20 text-royalGold px-2 py-1 rounded text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="bg-haruPurple text-darkBlack px-3 py-1 rounded hover:bg-opacity-80 transition-colors mr-2 font-semibold text-sm"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="bg-haruPurple text-darkBlack px-3 py-1 rounded hover:bg-opacity-80 transition-colors mr-2 font-semibold text-sm"
                >
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Botón para regresar */}
        <div className="flex justify-center mt-10">
          <Link
            href="/"
            className="inline-block px-8 py-3 border-2 border-haruPurple text-haruPurple hover:bg-haruPurple hover:text-darkBlack transition-colors duration-300 font-semibold uppercase tracking-wider"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
