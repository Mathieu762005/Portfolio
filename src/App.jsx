import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        // Le conteneur principal : fond personnalisé
        <div className="min-h-screen text-slate-50 relative overflow-hidden">

            {/* EFFET DE DESIGN : Lueurs d'arrière-plan (Glow) */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
                {/* Lueur orange en haut à droite */}
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full"></div>
                {/* Lueur plus discrète en bas à gauche */}
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-slate-900/20 blur-[120px] rounded-full"></div>
            </div>

            {/* Navigation */}
            <Navbar />

            {/* Contenu des pages */}
            <main className="relative z-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            {/* Pied de page */}
            <Footer />
        </div>
    );
}

export default App;