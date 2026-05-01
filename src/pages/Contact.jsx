import { useState } from 'react';

function Contact() {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Envoi en cours...");

        const formData = new FormData(event.target);
        // On utilise la variable d'environnement (définie dans .env.local)
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message envoyé avec succès !");
                event.target.reset();
            } else {
                console.log("Erreur", data);
                setResult(data.message);
            }
        } catch (error) {
            console.log("Erreur de connexion", error);
            setResult("Une erreur s'est produite lors de l'envoi.");
        } finally {
            setIsSubmitting(false);
            // Effacer le message après 5 secondes
            setTimeout(() => {
                setResult("");
            }, 5000);
        }
    };
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
                        <p className="text-slate-400 mt-2">Oullins-Pierre-Bénite, France<br />(Disponible en remote)</p>
                    </div>

                    <div>
                        <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Suivez-moi</h3>
                        <div className="flex gap-4">
                            {[
                                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mathieu-lenormand-0b358532b/' },
                                { name: 'GitHub', url: 'https://github.com/Mathieu762005' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 hover:text-orange-500 hover:border-orange-500/50 transition-all"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Colonne 2 : Formulaire de contact */}
                <form onSubmit={onSubmit} className="space-y-6 p-8 rounded-3xl border border-white/5 backdrop-blur-sm relative overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 ml-1">Nom</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="w-full border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all bg-transparent"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                className="w-full border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all bg-transparent"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                        <textarea
                            name="message"
                            required
                            rows="4"
                            placeholder="Parlez-moi de votre projet..."
                            className="w-full border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all bg-transparent"
                        ></textarea>
                    </div>

                    {result && (
                        <div className={`p-3 rounded-lg text-sm text-center font-medium ${result.includes("succès") ? "bg-green-500/20 text-green-400 border border-green-500/50" : result.includes("cours") ? "bg-blue-500/20 text-blue-400 border border-blue-500/50" : "bg-red-500/20 text-red-400 border border-red-500/50"}`}>
                            {result}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 ${isSubmitting ? 'bg-orange-500/50 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'} text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all transform active:scale-[0.98]`}
                    >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;