const projects = [
    {
        id: 1,
        title: "Projet 1 – Application Click & Collect (boulangerie)",
        description: "Développement d'une application web en architecture MVC permettant la gestion de commandes en ligne pour une boulangerie, avec une interface dynamique sans rechargement de page.",

        details: [
            "Architecture MVC en PHP",
            "Gestion des stocks en temps réel",
            "Tableau administrateur complet",
        ],

        problem:
            "Permettre à une boulangerie de gérer efficacement les commandes en ligne tout en offrant une expérience utilisateur rapide et sans rechargement de page.",

        solutions: [
            "Mise en place d'une architecture MVC pour structurer le projet",
            "Utilisation de Gsap pour les interactions dynamiques",
            "Connexion à une base de données pour la gestion des produits et commandes",
        ],

        challenges: [
            "Comprendre et mettre en place une architecture MVC",
            "Mettre en place un Tableau administrateur optimiser",
            "Maintenir la cohérence des stocks en temps réel",
        ],

        image: "/images/projet_1.png",
        tech: ["PHP", "CSS", "SQL", "JavaScript"],
        github: "https://github.com/Mathieu762005/Franck-Pavy",
    },

    {
        id: 2,
        title: "Projet 2 – Plateforme E-commerce",
        description:
            "Développement d'une plateforme e-commerce complète avec gestion du catalogue, panier utilisateur et système de commande sécurisé.",

        details: [
            "Gestion d'annonces liées au profil",
            "Affichage dynamique des annonces",
            "Interface utilisateur optimisée",
        ],

        problem:
            "Créer une plateforme e-commerce permettant aux utilisateurs de naviguer, gérer leurs commandes de manière simple et sécurisée.",

        solutions: [
            "Mise en place d’un système de création d’annonces",
            "Structuration du backend en PHP",
            "Création d'un panel administrateur pour gérer les produits",
        ],

        challenges: [
            "Gérer la complexité de la BDD",
            "Assurer la cohérence des données entre front et back",
            "Structurer une application avec plusieurs rôles utilisateurs",
        ],

        image: "/images/projet_2.png",
        tech: ["PHP", "CSS", "JavaScript"],
        github: "https://github.com/Mathieu762005/LeBonMarket",
    },

    {
        id: 3,
        title: "Projet 3 – Plateforme de Films",
        description:
            "Création d'une application web permettant d'explorer une base de films via une API externe avec recherche et filtrage",

        details: [
            "Intégration de l'API TMDB",
            "Recherche dynamique de films",
            "Affichage dynamique des informations du film",
        ],

        problem:
            "Permettre aux utilisateurs de découvrir et filtrer des films facilement à partir d'une API externe.",

        solutions: [
            "Utilisation de fetch pour récupérer les données",
            "Affichage dynamique des résultats",
            "Interface utilisateur optimisée et fluide",
        ],

        challenges: [
            "Comprendre la structure de l’API",
            "Gérer les données asynchrones",
            "Optimiser l'affichage des résultats",
        ],

        image: "/images/projet_3.png",
        tech: ["JavaScript", "CSS", "API"],
        github: "https://github.com/Mathieu762005/The-Movie",
    },

    {
        id: 4,
        title: "Projet 4 – Vortex FA",
        description:
            "Création et optimisation d’un serveur Roleplay avec développement de scripts personnalisés et gestion d’une base de données.",

        details: [
            "Scripts personnalisés en Lua",
            "Optimisation base de données (PhpMyAdmin)",
            "Gestion de systèmes RP (métiers, économie)",
        ],

        problem:
            "Créer un serveur RP stable et performant avec des systèmes de jeu complexes et une base de données optimisée.",

        solutions: [
            "Développement de scripts en Lua et JavaScript",
            "Optimisation des requêtes SQL",
            "Structuration des systèmes métiers et économie",
        ],

        challenges: [
            "Optimiser les performances du serveur",
            "Gérer une base de données volumineuse",
            "Maintenir la stabilité avec plusieurs joueurs",
        ],

        image: "/images/projet_4.png",
        tech: ["Lua", "JavaScript", "SQL"],
        github:
            "https://aa0-25.gitbook.io/vortex-roleplay.gitbook.io-vortex-roleplay-docs",
    },
    {
        id: 5, // Garde l'ID correspondant à ta liste
        title: "Projet 5 – Portfolio",
        description:
            "Conception et développement d'une application web responsive vitrine pour exposer mes projets, mes compétences techniques et mon parcours de développeur.",

        details: [
            "Développement d'une interface moderne avec React",
            "Architecture de composants réutilisables",
            "Interface interactive et fluide",
        ],

        problem:
            "Créer une plateforme unique, performante et esthétique capable de centraliser mes réalisations tout en offrant une navigation intuitive sur tous les types d'écrans.",

        solutions: [
            "Utilisation de React pour une navigation rapide sans rechargement (SPA)",
            "Mise en place d'un design responsive avec Tailwind CSS",
            "Optimisation du SEO et des performances (Score Lighthouse élevé)",
        ],

        challenges: [
            "Concevoir un design épuré qui mette en valeur le contenu sans le surcharger",
            "Assurer une compatibilité parfaite entre les différents navigateurs et mobiles",
            "Optimiser le temps de chargement des images et des ressources",
        ],

        image: "/images/projet_5.png",
        tech: ["React", "Tailwind CSS", "JavaScript"],
        github: "https://github.com/ton-pseudo/ton-repo-portfolio", // Pense à mettre ton vrai lien GitHub
    },
];

export default projects;