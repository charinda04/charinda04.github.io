import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GitHubIcon } from "@/assets/icons";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PROJECTS, PROJECT_STATUS_VARIANTS } from "@/constants";

export default function ProjectsPage() {
  const getStatusVariant = (status: string) => {
    return PROJECT_STATUS_VARIANTS[status as keyof typeof PROJECT_STATUS_VARIANTS] || "secondary";
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
          {PROJECTS.map((project) => (
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
