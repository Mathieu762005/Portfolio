import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            {/* Header de la page */}
            <div className="mb-16 text-center md:text-left transition-all">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                    Mes <span className="text-orange-500">Réalisations</span>
                </h1>
                <div className="h-1.5 w-24 bg-orange-500 rounded-full mb-6 mx-auto md:mx-0"></div>
                <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                    Découvrez une sélection de projets sur lesquels j'ai travaillé, allant du développement backend en PHP aux interfaces modernes en React.
                </p>
            </div>

            {/* Grille de projets */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        tech={project.tech}
                        github={project.github}
                        demo={project.demo}
                        details={project.details}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;