import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GitHubIcon } from "@/assets/icons";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "ECommerce Mobile App",
      description:
        "A full-featured e-commerce mobile application built with React Native, featuring user authentication, product catalog, cart management, and payment integration.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "Firebase"],
      githubUrl: "https://github.com/charinda/ecommerce-app",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.charinda.ecommerce",
      status: "Live",
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description:
        "A comprehensive project management tool with team collaboration features, real-time updates, and advanced analytics built with Next.js and Node.js.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com/charinda/task-dashboard",
      liveUrl: "https://taskmanager.charinda.dev",
      status: "Live",
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts. Features a clean, responsive design.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "OpenWeather API", "Tailwind CSS", "PWA"],
      githubUrl: "https://github.com/charinda/weather-app",
      liveUrl: "https://weather.charinda.dev",
      status: "Live",
    },
    {
      id: 4,
      title: "Cryptocurrency Tracker",
      description:
        "Real-time cryptocurrency tracking application with portfolio management, price alerts, and detailed market analysis charts.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Chart.js", "CoinGecko API", "Vuex"],
      githubUrl: "https://github.com/charinda/crypto-tracker",
      liveUrl: "https://crypto.charinda.dev",
      status: "Live",
    },
    {
      id: 5,
      title: "Social Media Analytics Tool",
      description:
        "A comprehensive analytics dashboard for social media managers to track engagement, growth, and performance across multiple platforms.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "D3.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/charinda/social-analytics",
      liveUrl: null,
      status: "In Development",
    },
    {
      id: 6,
      title: "Recipe Sharing Platform",
      description:
        "A community-driven platform where users can share, discover, and rate recipes. Features advanced search, meal planning, and shopping lists.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Django", "PostgreSQL", "AWS S3"],
      githubUrl: "https://github.com/charinda/recipe-platform",
      liveUrl: null,
      status: "Coming Soon",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Live":
        return "default";
      case "In Development":
        return "secondary";
      case "Coming Soon":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-theme-bg">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12 space-minimal-lg">
        {/* Header */}
        <div className="text-center space-minimal">
          <h1 className="text-theme-4xl font-semibold text-theme-text tracking-tight">
            My Projects
          </h1>
          <p className="text-theme-base text-theme-text-secondary max-w-xl mx-auto leading-relaxed">
            A collection of web and mobile applications I've built, ranging from
            personal projects to client work.
          </p>
          <Separator className="w-12 mx-auto bg-theme-accent" />
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="border-theme-border bg-theme-card-bg shadow-minimal hover:shadow-minimal-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Project Image/Icon */}
              <div className="h-32 bg-gradient-to-br from-theme-accent/10 to-theme-accent-secondary/10 flex items-center justify-center border-b border-theme-border">
                <div className="text-theme-accent text-2xl font-semibold">
                  {project.title.charAt(0)}
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-theme-lg font-medium text-theme-text leading-tight">
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant={getStatusVariant(project.status) as any}
                    className="ml-2 shrink-0"
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-theme-sm text-theme-text-secondary leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-theme-accent/10 text-theme-accent border-theme-accent/20 text-theme-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4 pt-2">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto text-theme-text-secondary hover:text-theme-accent hover:bg-transparent"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <GitHubIcon className="w-4 h-4" />
                      <span className="text-theme-sm">Code</span>
                    </a>
                  </Button>

                  {project.liveUrl && (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto text-theme-accent hover:text-theme-accent-secondary hover:bg-transparent"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-theme-sm"
                      >
                        Live Demo →
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="border-theme-border bg-theme-card-bg shadow-minimal max-w-2xl mx-auto">
          <CardContent className="pt-6 text-center space-minimal-sm">
            <h3 className="text-theme-xl font-medium text-theme-text">
              Interested in working together?
            </h3>
            <p className="text-theme-sm text-theme-text-secondary leading-relaxed">
              I'm always open to discussing new opportunities and interesting
              projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                className="bg-theme-accent hover:bg-theme-accent-secondary text-white"
              >
                <Link href="/">Get In Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-theme-accent text-theme-accent hover:bg-theme-accent hover:text-white"
              >
                <Link href="/blogs">Read My Blog</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
