import { Link } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#111827] border-t border-white/5 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Colonne 1 : Identité */}
                    <div className="space-y-4">
                        <Link to="/" className="inline-block">
                            <h3 className="text-2xl font-black tracking-tighter text-white uppercase">
                                Mathieu <span className="text-orange-500">Lenormand</span>
                            </h3>
                        </Link>
                        <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                            Développeur Web passionné par la création d'interfaces modernes et d'expériences utilisateur performantes.
                        </p>
                    </div>

                    {/* Colonne 2 : Navigation Rapide */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Navigation</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-slate-400 hover:text-orange-500 transition-colors text-sm">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-slate-400 hover:text-orange-500 transition-colors text-sm">Projets</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-slate-400 hover:text-orange-500 transition-colors text-sm">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne 3 : Réseaux */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Réseaux Sociaux</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1"
                            >
                                <span className="sr-only">GitHub</span>
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Barre de copyright */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} Mathieu Lenormand. Tous droits réservés.
                    </p>
                    <p className="text-slate-500 text-xs">
                        Conçu avec passion en <span className="text-orange-500">React</span> & <span className="text-orange-500">Tailwind</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
