import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitHubIcon } from "@/assets/icons";
import { PROJECT_STATUS_VARIANTS } from "@/constants";
import Image from "next/image";

interface PersonalProject {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null;
  status: string;
}

interface PersonalProjectCardProps {
  project: PersonalProject;
  index: number;
}

export const PersonalProjectCard: React.FC<PersonalProjectCardProps> = ({ project, index }) => {
  const getStatusVariant = (status: string) => {
    return PROJECT_STATUS_VARIANTS[status as keyof typeof PROJECT_STATUS_VARIANTS] || "secondary";
  };

  return (
    <Card
      className={`border-theme-border bg-theme-card-bg shadow-minimal hover:shadow-minimal-lg transition-shadow duration-300 overflow-hidden hover-lift animate-fade-in-up animate-stagger-${Math.min(index + 1, 6)}`}
    >
      {/* Project Image/Icon */}
      <div className="h-32 bg-gradient-to-br from-theme-accent/10 to-theme-accent-secondary/10 flex items-center justify-center border-b border-theme-border relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={128}
          height={128}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-theme-accent text-2xl font-semibold bg-theme-bg/80 w-12 h-12 rounded-full flex items-center justify-center border border-theme-accent/20">
            {project.title.charAt(0)}
          </div>
        </div>
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
  );
};