import Link from "next/link";

import { Footer, Header } from "@/components";
import { GitHubIcon } from "@/assets/icons";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "ECommerce Mobile App",
      description: "A full-featured e-commerce mobile application built with React Native, featuring user authentication, product catalog, cart management, and payment integration.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "Firebase"],
      githubUrl: "https://github.com/charinda/ecommerce-app",
      liveUrl: "https://play.google.com/store/apps/details?id=com.charinda.ecommerce",
      status: "Live",
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description: "A comprehensive project management tool with team collaboration features, real-time updates, and advanced analytics built with Next.js and Node.js.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com/charinda/task-dashboard",
      liveUrl: "https://taskmanager.charinda.dev",
      status: "Live",
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts. Features a clean, responsive design.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "OpenWeather API", "Tailwind CSS", "PWA"],
      githubUrl: "https://github.com/charinda/weather-app",
      liveUrl: "https://weather.charinda.dev",
      status: "Live",
    },
    {
      id: 4,
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency tracking application with portfolio management, price alerts, and detailed market analysis charts.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Chart.js", "CoinGecko API", "Vuex"],
      githubUrl: "https://github.com/charinda/crypto-tracker",
      liveUrl: "https://crypto.charinda.dev",
      status: "Live",
    },
    {
      id: 5,
      title: "Social Media Analytics Tool",
      description: "A comprehensive analytics dashboard for social media managers to track engagement, growth, and performance across multiple platforms.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "D3.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/charinda/social-analytics",
      liveUrl: null,
      status: "In Development",
    },
    {
      id: 6,
      title: "Recipe Sharing Platform",
      description: "A community-driven platform where users can share, discover, and rate recipes. Features advanced search, meal planning, and shopping lists.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Django", "PostgreSQL", "AWS S3"],
      githubUrl: "https://github.com/charinda/recipe-platform",
      liveUrl: null,
      status: "Coming Soon",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Development":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Coming Soon":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="font-sans min-h-screen transition-colors duration-300 bg-theme-bg">
      <Header />
      
      <main className="max-w-6xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-theme-3xl font-bold text-theme-text mb-4">
            My Projects
          </h1>
          <p className="text-theme-lg text-theme-text-secondary max-w-2xl mx-auto">
            A collection of web and mobile applications I've built, ranging from personal projects to client work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-theme-card-bg border border-theme-card-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-theme-accent/20 to-theme-accent-secondary/20 flex items-center justify-center">
                <div className="text-theme-accent text-4xl font-bold">
                  {project.title.charAt(0)}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-theme-xl font-semibold text-theme-text">
                    {project.title}
                  </h2>
                  <span
                    className={`px-2 py-1 text-theme-xs rounded-full border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
                
                <p className="text-theme-text-secondary leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-theme-xs bg-theme-accent/10 text-theme-accent rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-theme-text-secondary hover:text-theme-accent transition-colors duration-200"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    <span className="text-theme-sm">Code</span>
                  </a>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-theme-sm text-theme-accent hover:text-theme-accent-secondary transition-colors duration-200"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-theme-card-bg border border-theme-card-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-theme-2xl font-bold text-theme-text mb-4">
              Interested in working together?
            </h3>
            <p className="text-theme-text-secondary mb-6">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-theme-accent text-white font-semibold rounded-lg hover:bg-theme-accent-secondary transition-colors duration-200"
              >
                Get In Touch
              </Link>
              <Link
                href="/blogs"
                className="inline-block px-6 py-3 border border-theme-accent text-theme-accent font-semibold rounded-lg hover:bg-theme-accent hover:text-white transition-colors duration-200"
              >
                Read My Blog
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}