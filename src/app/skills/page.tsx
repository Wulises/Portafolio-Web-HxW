'use client'

import Link from 'next/image'
import { motion } from 'framer-motion'

const skillsHaru = [

    { name: 'PHP', icon: '/icons_skills/php.svg' },
    { name: 'JavaScript', icon: '/icons_skills/javascript.svg' },
    { name: 'Typescript', icon: '/icons_skills/typescript.svg' },
    { name: 'HTML', icon: '/icons_skills/html5.svg' },
    { name: 'Tailwindcss', icon: '/icons_skills/tailwindcss.svg' },
    { name: 'Css 3', icon: '/icons_skills/css3.svg' },
    { name: 'Bootstrap', icon: '/icons_skills/bootstrap.svg' },
    { name: 'MySql', icon: '/icons_skills/mysql.svg' },
    { name: 'PostgreSQL', icon: '/icons_skills/postgresql.svg' },
    { name: 'Vue.js 3', icon: '/icons_skills/vuedotjs.svg' },
    { name: 'React', icon: '/icons_skills/react.svg' },
    { name: 'Next.js 13', icon: '/icons_skills/nextdotjs.svg' },
    { name: 'Node.js', icon: '/icons_skills/nodedotjs.svg' },
    { name: 'Laravel', icon: '/icons_skills/laravel.svg' },
    { name: 'Git', icon: '/icons_skills/git.svg' },
    { name: 'Github', icon: '/icons_skills/github.svg' },

]

export default function skillsPersona() {

    return (

        <main className="min-h-screen bg-darkBlack text-creamWhite px-6 py-12">

            <div className="max-w-5xl mx-auto text-center space-y-8">

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-display text-haruPurple"
                >
                    Mis Habilidades Técnicas
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-lg text-creamWhite font-body max-w-2xl mx-auto"
                >
                    Estas son las tecnologías con las que he trabajado y aprendido durante mi camino como desarrollador. ¡Cada una representa un paso en mi historia!
                </motion.p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">

                    {skillsHaru.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            className="bg-darkBlack border-2 border-haruPurple rounded-xl p-4 shadow-[0_0_12px_#F2B5D4] flex flex-col items-center"
                        >
                            <Link
                                src={skill.icon}
                                alt={skill.name}
                                width={50}
                                height={50}
                                className="mb-2"
                            />
                            <span className="text-sm font-semibold text-creamWhite">{skill.name}</span>
                        </motion.div>
                    ))}

                </div>

            </div>

            <a
                href="/"
                className="inline-block mt-8 px-6 py-2 border-2 border-royalGold text-royalGold hover:bg-royalGold hover:text-darkBlack transition-colors duration-300 font-semibold uppercase tracking-wider"
            >
                Volver al Inicio
            </a>

        </main>


    )

}