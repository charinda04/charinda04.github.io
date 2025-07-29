import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trackButtonClick } from "@/lib/analytics";
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
  webUrl?: string;
  androidUrl?: string;
  iosUrl?: string;
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
      {/* Project Image */}
      <div className="h-40 bg-gradient-to-br from-theme-accent/10 to-theme-accent-secondary/10 flex items-center justify-center border-b border-theme-border relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={160}
          height={160}
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-1">
          <CardTitle className="text-theme-lg font-medium text-theme-text leading-tight">{project.title}</CardTitle>
          <div className="text-theme-xs text-theme-text-secondary bg-theme-accent/10 px-2 py-1 rounded border border-theme-accent/20 ml-2 shrink-0">
            {project.company}
          </div>
        </div>
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
            <span
              key={tech}
              className="inline-flex items-center bg-theme-card-border text-theme-text hover:bg-theme-accent hover:text-theme-bg text-theme-xs px-2 py-1 rounded transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        {(project.webUrl || project.androidUrl || project.iosUrl) && (
          <div className="flex items-center gap-3 pt-4 border-t border-theme-border/30">
            {project.webUrl && (
              <a 
                href={project.webUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 p-2 -m-2 rounded transition-all duration-200"
                style={{
                  color: 'var(--theme-text-secondary)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--theme-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--theme-text-secondary)';
                }}
                onClick={() => trackButtonClick(`Work Project Web - ${project.title}`, "/work")}
              >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-theme-sm">Web</span>
                </a>
            )}

            {project.androidUrl && (
              <a
                href={project.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 -m-2 rounded transition-all duration-200"
                style={{
                  color: 'var(--theme-text-secondary)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--theme-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--theme-text-secondary)';
                }}
                onClick={() => trackButtonClick(`Work Project Android - ${project.title}`, "/work")}
              >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.61 10.2718.8995 12.5 .8995 15.0207h22.201c0-2.5207-1.7105-4.7489-5.1211-5.6793" />
                  </svg>
                  <span className="text-theme-sm">Android</span>
                </a>
            )}

            {project.iosUrl && (
              <a 
                href={project.iosUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 p-2 -m-2 rounded transition-all duration-200"
                style={{
                  color: 'var(--theme-text-secondary)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--theme-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--theme-text-secondary)';
                }}
                onClick={() => trackButtonClick(`Work Project iOS - ${project.title}`, "/work")}
              >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span className="text-theme-sm">iOS</span>
                </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
