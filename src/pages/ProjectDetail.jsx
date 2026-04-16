import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center text-white">
                <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
                <Link to="/projects" className="text-orange-500 hover:underline">
                    Retour aux projets
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
            {/* Bouton Retour */}
            <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors mb-8 group"
            >
                <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-bold uppercase tracking-widest text-sm">Retour aux projets</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Colonne Image */}
                <div className="space-y-6">
                    <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-orange-500/5">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-3 flex items-center">
                            Problématique
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            {project.problem}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            Solutions apportées
                        </h3>

                        <ul className="space-y-2">
                            {project.solutions.map((item, index) => (
                                <li key={index} className="text-slate-300 flex gap-2">
                                    <span className="text-orange-500 font-bold">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            Difficultés rencontrées
                        </h3>

                        <ul className="space-y-2">
                            {project.challenges.map((item, index) => (
                                <li key={index} className="text-slate-300 flex gap-2">
                                    <span className="text-orange-500 font-bold">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                {/* Colonne Infos */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase leading-tight">
                            {project.title}
                        </h1>
                        <div className="h-1.5 w-20 bg-orange-500 rounded-full"></div>
                    </div>

                    <p className="text-slate-400 text-lg leading-relaxed">
                        {project.description}
                    </p>

                    <div>
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            Points clés du projet
                        </h3>
                        <ul className="grid sm:grid-cols-1 gap-3">
                            {project.details.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 text-slate-300">
                                    <span className="text-orange-500 font-bold">0{index + 1}.</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
                            Technologies utilisées
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, index) => (
                                <span
                                    key={index}
                                    className="text-xs font-bold bg-orange-500/10 px-4 py-2 rounded-full text-orange-500 border border-orange-500/20"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-wrap gap-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-black hover:bg-orange-500 hover:text-white transition-all shadow-lg active:scale-95"
                        >
                            Voir sur GitHub
                        </a>
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition-all active:scale-95"
                        >
                            Démo en ligne ↗
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;