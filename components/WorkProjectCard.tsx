import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface WorkProject {
  id: number;
  title: string;
  company: string;
  role: string;
  period: string;
  image: string;
  achievements: string[];
  technologies: string[];
}

interface WorkProjectCardProps {
  project: WorkProject;
  index: number;
}

export const WorkProjectCard: React.FC<WorkProjectCardProps> = ({ project, index }) => {
  return (
    <Card
      className={`border-theme-border bg-theme-card-bg shadow-minimal hover:shadow-minimal-lg transition-shadow duration-300 overflow-hidden hover-lift animate-fade-in-up animate-stagger-${Math.min(
        index + 1,
        6
      )}`}
    >
      {/* Project Image/Icon */}
      <div className="h-40 bg-gradient-to-br from-theme-accent/10 to-theme-accent-secondary/10 flex items-center justify-center border-b border-theme-border relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={160}
          height={160}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-theme-accent text-3xl font-bold bg-theme-bg/80 w-16 h-16 rounded-full flex items-center justify-center border border-theme-accent/20">
            {project.title.charAt(0)}
          </div>
        </div>
        <div className="absolute top-3 right-3 text-theme-xs text-theme-text-secondary bg-theme-bg/80 px-2 py-1 rounded">
          {project.company}
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-theme-lg font-medium text-theme-text leading-tight mb-1">{project.title}</CardTitle>
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
  );
};
