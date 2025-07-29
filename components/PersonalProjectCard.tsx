import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitHubIcon } from "@/assets/icons";
import { PROJECT_STATUS_VARIANTS, PersonalProject } from "@/constants";
import { trackButtonClick } from "@/lib/analytics";
import Image from "next/image";
import { memo, useMemo } from "react";

interface PersonalProjectCardProps {
  project: PersonalProject;
  index: number;
}

export const PersonalProjectCard: React.FC<PersonalProjectCardProps> = memo(({ project, index }) => {
  const statusVariant = useMemo(() => 
    PROJECT_STATUS_VARIANTS[project.status as keyof typeof PROJECT_STATUS_VARIANTS] || "secondary",
    [project.status]
  );

  const animationClass = useMemo(() => 
    `animate-fade-in-up animate-stagger-${Math.min(index + 1, 6)}`,
    [index]
  );

  return (
    <Card
      className={`border-theme-border bg-theme-card-bg shadow-minimal hover:shadow-minimal-lg transition-shadow duration-300 overflow-hidden hover-lift ${animationClass}`}
    >
      {/* Project Image */}
      <div className="h-32 bg-gradient-to-br from-theme-accent/10 to-theme-accent-secondary/10 flex items-center justify-center border-b border-theme-border relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={128}
          height={128}
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <CardTitle className="text-theme-lg font-medium text-theme-text leading-tight">
            {project.title}
          </CardTitle>
          <Badge variant={statusVariant as any} className="ml-2 shrink-0">
            {project.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-theme-sm text-theme-text-secondary leading-relaxed">
          {project.description.map((item, index) => {
            if (typeof item === "string") {
              return <span key={index}>{item}</span>;
            } else if (item.type === "link") {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-accent hover:text-theme-accent-hover underline transition-colors"
                >
                  {item.text}
                </a>
              );
            }
            return null;
          })}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center bg-theme-card-border text-theme-text hover:bg-theme-accent hover:text-theme-bg text-theme-xs px-2 py-1 rounded transition-colors duration-200"
            >
              {tech}
            </span>
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
              onClick={() => trackButtonClick(`Project Code - ${project.title}`, "/projects")}
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
                onClick={() => trackButtonClick(`Project Demo - ${project.title}`, "/projects")}
              >
                Live Demo →
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
});

PersonalProjectCard.displayName = 'PersonalProjectCard';