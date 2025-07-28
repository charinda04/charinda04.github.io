"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GitHubIcon } from "@/assets/icons";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PROJECTS, WORK_PROJECTS, PROJECT_STATUS_VARIANTS } from "@/constants";

export default function ProjectsPage() {
  const [activeSection, setActiveSection] = useState<"work" | "personal">("work");

  const getStatusVariant = (status: string) => {
    return PROJECT_STATUS_VARIANTS[status as keyof typeof PROJECT_STATUS_VARIANTS] || "secondary";
  };

  return (
    <div className="min-h-screen bg-theme-bg flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 space-minimal-lg w-full">
        {/* Header */}
        <div className="text-center space-minimal">
          <h1 className="text-theme-4xl font-semibold text-theme-text tracking-tight">My Projects</h1>
          <p className="text-theme-base text-theme-text-secondary max-w-xl mx-auto leading-relaxed">
            A collection of web and mobile applications I've built, ranging from personal projects to client work.
          </p>
          <Separator className="w-12 mx-auto bg-theme-accent" />
        </div>

        {/* Project Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-theme-card-bg border border-theme-border rounded-lg p-1 shadow-minimal">
            <button
              onClick={() => setActiveSection("work")}
              className={` text-theme-text px-6 py-2 rounded-md text-theme-sm font-medium transition-all duration-200 ${
                activeSection === "work"
                  ? "bg-theme-accent text-theme-bg shadow-minimal"
                  : "text-theme-text-secondary hover:text-theme-text hover:bg-theme-button-bg"
              }`}
            >
              Recent Projects
            </button>
            <button
              onClick={() => setActiveSection("personal")}
              className={`text-theme-text px-6 py-2 rounded-md text-theme-sm font-medium transition-all duration-200 ${
                activeSection === "personal"
                  ? "bg-theme-accent text-theme-bg shadow-minimal"
                  : "text-theme-text-secondary hover:text-theme-text hover:bg-theme-button-bg"
              }`}
            >
              Personal Projects
            </button>
          </div>
        </div>

        {/* Dynamic Projects Section */}
        <section className="space-minimal">
          <div className="text-left mb-8">
            <h2 className="text-theme-2xl font-semibold text-theme-text mb-2">
              {activeSection === "work" ? "Recent Projects" : "Personal Projects"}
            </h2>
            <p className="text-theme-base text-theme-text-secondary">
              {activeSection === "work"
                ? "Professional work and client projects from my career"
                : "Side projects and personal experiments"}
            </p>
          </div>

          {activeSection === "work" ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {WORK_PROJECTS.map((project) => (
                <Card
                  key={project.id}
                  className="border-theme-border bg-theme-card-bg shadow-minimal hover:shadow-minimal-lg transition-shadow duration-300 overflow-hidden"
                >
                  {/* Project Image/Icon */}
                  <div className="h-40 bg-gradient-to-br from-theme-accent/10 to-theme-accent-secondary/10 flex items-center justify-center border-b border-theme-border relative">
                    <div className="text-theme-accent text-3xl font-bold">{project.title.charAt(0)}</div>
                    <div className="absolute top-3 right-3 text-theme-xs text-theme-text-secondary bg-theme-bg/80 px-2 py-1 rounded">
                      {project.company}
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-theme-lg font-medium text-theme-text leading-tight mb-1">
                      {project.title}
                    </CardTitle>
                    <div className="text-theme-sm font-medium text-theme-accent mb-1">{project.role}</div>
                    <div className="text-theme-xs text-theme-text-secondary">{project.period}</div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Achievements */}
                    <div className="space-y-2">
                      {project.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-theme-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-theme-xs text-theme-text-secondary leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 pt-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-theme-text text-theme-bg hover:bg-theme-accent hover:text-theme-bg text-theme-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {PROJECTS.map((project) => (
                <Card
                  key={project.id}
                  className="border-theme-border bg-theme-card-bg shadow-minimal hover:shadow-minimal-lg transition-shadow duration-300 overflow-hidden"
                >
                  {/* Project Image/Icon */}
                  <div className="h-32 bg-gradient-to-br from-theme-accent/10 to-theme-accent-secondary/10 flex items-center justify-center border-b border-theme-border">
                    <div className="text-theme-accent text-2xl font-semibold">{project.title.charAt(0)}</div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-theme-lg font-medium text-theme-text leading-tight">
                        {project.title}
                      </CardTitle>
                      <Badge variant={getStatusVariant(project.status) as any} className="ml-2 shrink-0">
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-theme-sm text-theme-text-secondary leading-relaxed">{project.description}</p>

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
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-theme-sm">
                            Live Demo →
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
