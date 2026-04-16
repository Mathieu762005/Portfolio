function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            {/* En-tête de la page */}
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                    On travaille <span className="text-orange-500">ensemble ?</span>
                </h1>
                <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
                <p className="text-slate-400 mt-6 max-w-2xl">
                    Une idée de projet, une question ou simplement envie de dire bonjour ?
                    N'hésitez pas à m'envoyer un message.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
                {/* Colonne 1 : Infos de contact */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Coordonnées</h3>
                        <p className="text-2xl text-white font-medium">mathieu762005@gmail.com</p>
                        <p className="text-slate-400 mt-2">Basé à Oullins-Pierre-Bénite, France (Disponible en remote)</p>
                    </div>

                    <div>
                        <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Suivez-moi</h3>
                        <div className="flex gap-4">
                            {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 hover:text-orange-500 hover:border-orange-500/50 transition-all"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Colonne 2 : Formulaire de contact */}
                <form className="space-y-6 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 ml-1">Nom</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                        <textarea
                            rows="4"
                            placeholder="Parlez-moi de votre projet..."
                            className="w-full border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all transform active:scale-[0.98]"
                    >
                        Envoyer le message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;