import { Link } from "react-router-dom";

function ProjectCard({ id, title, description, image, tech, github, details }) {
    // Récupération de l'URL de base (ex: /Portfolio/)
    const baseUrl = import.meta.env.BASE_URL;

    // Fonction pour corriger le chemin de l'image
    const getCorrectImagePath = (img) => {
        if (!img) return "";
        // Si c'est une URL externe (http), on la laisse telle quelle
        if (img.startsWith('http')) return img;
        // Si c'est un chemin local, on ajoute le baseUrl
        // On retire le premier slash de l'image s'il existe pour éviter d'avoir //
        const cleanPath = img.startsWith('/') ? img.slice(1) : img;
        return `${baseUrl}${cleanPath}`;
    };

    return (
        <div className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all shadow-xl hover:-translate-y-1">

            <Link to={`/projects/${id}`} className="aspect-video overflow-hidden relative block">
                <img
                    src={getCorrectImagePath(image)} // Utilisation du chemin corrigé
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Voir les détails
                    </span>
                </div>
            </Link>

            <div className="p-6">
                <Link to={`/projects/${id}`}>
                    <h2 className="text-xl font-bold mb-2 text-white group-hover:text-orange-500 transition-colors tracking-tight uppercase">
                        {title}
                    </h2>
                </Link>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {description}
                </p>

                {details && details.length > 0 && (
                    <ul className="space-y-1 mb-6">
                        {details.map((item, index) => (
                            <li key={index} className="text-gray-500 text-xs flex items-center gap-2">
                                <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                    {tech.map((t, index) => (
                        <span
                            key={index}
                            className="text-[10px] font-bold bg-white/5 px-2 py-1 rounded text-orange-500 tracking-wider uppercase border border-orange-500/10"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="pt-4 border-t border-white/5 flex gap-6">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-1"
                    >
                        GitHub ↗
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;