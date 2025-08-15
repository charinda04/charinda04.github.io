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
  const animationClass = useMemo(() => 
    `animate-fade-in-up animate-stagger-${Math.min(index + 1, 6)}`,
    [index]
  );

  return (
    <div
      className={`bg-theme-card-bg border border-theme-card-border rounded-xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${animationClass}`}
    >
      <div className="flex items-start gap-5">
        {/* Project Image */}
        <div className="w-28 h-28 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            width={112}
            height={112}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="flex-1 min-w-0">
          {/* Title with Arrow */}
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-theme-text">{project.title}</h3>
            <svg 
              className="w-4 h-4 text-theme-text-secondary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </div>

          {/* Description */}
          <p className="text-theme-text-secondary leading-relaxed mb-3 text-sm">
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
                    className="text-theme-accent hover:text-theme-accent-secondary underline transition-colors"
                  >
                    {item.text}
                  </a>
                );
              }
              return null;
            })}
          </p>

          {/* Stars */}
          {(project as any).stars && (
            <div className="flex items-center gap-1 mb-3">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-theme-text font-medium">{(project as any).stars}</span>
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-theme-accent/20 text-theme-accent border border-theme-accent/30 px-2.5 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project Links */}
      <div className="flex items-center gap-4 mt-5 pt-4 border-t border-theme-border">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="p-0 h-auto text-theme-text-secondary hover:text-theme-text hover:bg-transparent"
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            onClick={() => trackButtonClick(`Project Code - ${project.title}`, "/projects")}
          >
            <GitHubIcon className="w-4 h-4" />
            <span className="text-sm">Code</span>
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
              className="text-sm"
              onClick={() => trackButtonClick(`Project Demo - ${project.title}`, "/projects")}
            >
              Live Demo →
            </a>
          </Button>
        )}
      </div>
    </div>
  );
});

PersonalProjectCard.displayName = 'PersonalProjectCard';