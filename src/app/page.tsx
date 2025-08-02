'use client';

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-darkBlack text-creamWhite flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Imagen de perfil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/images/Profile.jpg"
            alt="Ulises Sánchez Muñoz"
            width={180}
            height={180}
            className="rounded-full border-4 border-haruPurple shadow-[0_0_20px_#8B1E3F]"
          />
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-display text-haruPurple"
        >
           Ulises Sánchez Muñoz
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl font-body text-creamWhite"
        >
          Desarrollador web.  
          Amante del arte digital y los buenos cafés 
          <span className="inline-block animate-[float_3s_ease-in-out_infinite]">☕</span>  
          <span className="block italic text-royalGold mt-2">Con amor y café, todo se puede lograr.</span>
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/about"
            className="inline-block px-8 py-3 border-2 border-royalGold text-royalGold hover:bg-royalGold hover:text-darkBlack transition-colors duration-300 font-semibold uppercase tracking-wider"
          >
            Sobre Mí
          </Link>
          <Link
            href="/projects"
            className="inline-block px-8 py-3 border-2 border-haruPurple text-haruPurple hover:bg-haruPurple hover:text-darkBlack transition-colors duration-300 font-semibold uppercase tracking-wider"
          >
            Proyectos
          </Link>
          <Link
            href="/skills"
            className="inline-block px-8 py-3 border-2 border-personaRed text-personaRed hover:bg-personaRed hover:text-darkBlack transition-colors duration-300 font-semibold uppercase tracking-wider"
          >
            Skills
          </Link>

        </motion.div>
      </div>
    </main>
  );
}