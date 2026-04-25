import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Modification ici

function App() {
    return (
        <div className="min-h-screen text-slate-50 relative overflow-hidden">
            {/* Design Background */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-slate-900/20 blur-[120px] rounded-full"></div>
            </div>

            {/* On entoure tout le contenu qui utilise le routage avec <Router> */}
            <Router>
                <Navbar />
                <main className="relative z-10">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:id" element={<ProjectDetail />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;