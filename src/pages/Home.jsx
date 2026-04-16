import { Link } from "react-router-dom";
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import projects from "../data/projects";
import maPhoto from "../assets/maPhoto.png";
import circuitImg from "../assets/circuit.png";


function Home() {
    // État pour gérer l'ouverture de la modal du CV
    const [isOpen, setIsOpen] = useState(false);

    // On récupère les deux premiers projets pour l'aperçu
    const featuredProjects = projects.slice(0, 2);

    return (
        <div className="text-white">

            {/* HERO */}
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
                {/* Décoration High-Tech derrière la photo */}
                <div className="mb-8 relative">
                    {/* Le cercle de circuit board qui tourne et "respire" */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] pointer-events-none z-0 opacity-20 animate-slow-spin animate-pulse-soft"
                        style={{
                            backgroundImage: `url(${circuitImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                            WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                        }}
                    ></div>

                    {/* Conteneur de la photo de profil (au-dessus du circuit) */}
                    <div className="relative z-10 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl shadow-orange-500/20 bg-[#05172c]">
                        <img
                            src={maPhoto}
                            alt="Mathieu Lenormand"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
                    Mathieu <span className="text-orange-500">Lenormand</span>
                </h1>

                <h2 className="text-xl md:text-2xl text-gray-400 mb-8 font-medium">
                    Développeur Web
                </h2>

                <p className="max-w-xl text-gray-400 mb-10 text-lg leading-relaxed">
                    Passionné par le développement web, je crée des applications modernes
                    et performantes en <span className="text-white font-semibold">JavaScript</span> et <span className="text-white font-semibold">PHP</span>.
                </p>

                <div className="flex gap-4">
                    <Link
                        to="/projects"
                        className="bg-orange-500 px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-orange-500/20"
                    >
                        Voir mes projets
                    </Link>
                    <Link
                        to="/contact"
                        className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
                    >
                        Me contacter
                    </Link>
                </div>
            </section>

            {/* ABOUT */}
            <section className="py-24 px-6 bg-gray-800/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">À propos</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* PARTIE GAUCHE : CV */}
                        <div className="flex flex-col items-center space-y-4">
                            <div
                                className="relative group cursor-pointer"
                                onClick={() => setIsOpen(true)}
                            >
                                {/* Image du CV avec un petit effet de surbrillance au survol */}
                                <img
                                    src="/images/cv-preview.png"
                                    alt="Aperçu de mon CV"
                                    className="rounded-lg shadow-2xl border border-gray-700 w-64 md:w-80 transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Overlay au survol */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                                    <span className="text-white font-semibold">Voir en grand</span>
                                </div>
                            </div>

                            {/* Bouton de téléchargement */}
                            <a
                                href="/Lenormand-Mathieu.pdf" // Le chemin vers ton fichier dans le dossier public
                                download="Lenormand-Mathieu.pdf" // Force le téléchargement et donne un nom clair au fichier
                                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                </svg>
                                Télécharger mon CV (PDF)
                            </a>
                        </div>

                        {/* PARTIE DROITE : TEXTE */}
                        <div className="text-left">
                            <h3 className="text-2xl font-semibold mb-4 text-orange-500">Mon Parcours</h3>
                            <p className="text-xl text-gray-400 leading-relaxed mb-6">
                                Salut ! Je m'appelle Mathieu Lenormand. Je suis développeur web junior, j’ai récemment obtenu ma certification en développement web et web mobile (niveau Bac+2).</p>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                Avant le développement web, je suis passé par un CAP puis un Bac Pro en menuiserie. Ça m’a appris la rigueur, la précision et le goût du travail bien fait. Mais avec le temps, j’ai décidé de me réorienter vers ce qui me plaît vraiment : la programmation web.
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                J’ai appris à créer des applications complètes en JavaScript et PHP. Depuis, je réalise différents projets (e-commerce, click & collect, API…) et je développe aussi sur mon serveur FiveM.</p>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                Aujourd’hui, je cherche une alternance en développement web sur Lyon pour continuer à progresser et travailler sur des projets concrets.</p>
                        </div>

                    </div>
                </div>

                {/* MODAL POUR L'IMAGE DU CV */}
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                    {/* Fond sombre */}
                    <div className="fixed inset-0 bg-black/90" aria-hidden="true" />

                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <DialogPanel className="max-w-3xl w-full">
                            <div className="relative">
                                {/* Bouton Fermer */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute -top-12 right-0 text-white hover:text-orange-500 text-xl font-bold transition-colors"
                                >
                                    Fermer ✕
                                </button>

                                {/* Image agrandie */}
                                <img
                                    src="/images/cv-preview.png"
                                    alt="CV Agrandit"
                                    className="w-full h-auto rounded-lg shadow-2xl border border-white/10"
                                />
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </section>

            {/* PROJECTS PREVIEW */}
            <section className="py-24 px-6 bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-black mb-2">Mes projets</h2>
                            <p className="text-gray-500">Une sélection de mes réalisations récentes</p>
                        </div>
                        <Link to="/projects" className="text-orange-500 hover:text-orange-400 font-bold transition-colors">
                            Voir tout →
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredProjects.map((project) => (
                            <div key={project.id} className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all shadow-xl hover:-translate-y-1">
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors uppercase tracking-tight">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-[10px] font-bold bg-white/5 px-2 py-1 rounded text-orange-500 tracking-wider">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECHNOLOGIES MARQUEE */}
            <section className="py-24 overflow-hidden bg-[#05172c]">
                <div className="bg-gray-800/50 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-center text-lg/8 font-semibold text-white">Technologies & outils utilisées</h2>
                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                            <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg" alt="Reform" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                            <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                            <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />
                            <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg" alt="Statamic" className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;