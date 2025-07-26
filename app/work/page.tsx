import Link from "next/link";

import { Footer, Header, WorkSection } from "@/components";

export default function WorkPage() {
  const skills = [
    {
      category: "Frontend Development",
      technologies: [
        "React", "Next.js", "Vue.js", "TypeScript", "JavaScript",
        "HTML5", "CSS3", "Tailwind CSS", "SASS/SCSS"
      ]
    },
    {
      category: "Mobile Development",
      technologies: [
        "React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)",
        "Expo", "PhoneGap/Cordova"
      ]
    },
    {
      category: "Backend Development",
      technologies: [
        "Node.js", "Express.js", "Python", "Django", "FastAPI",
        "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"
      ]
    },
    {
      category: "DevOps & Tools",
      technologies: [
        "Docker", "AWS", "Vercel", "Git", "GitHub Actions",
        "Jest", "Cypress", "Webpack", "Vite"
      ]
    }
  ];

  const achievements = [
    {
      title: "10+ Mobile Apps Published",
      description: "Successfully launched mobile applications with over 100K+ combined downloads on App Store and Google Play."
    },
    {
      title: "50+ Web Projects Delivered",
      description: "Completed diverse web development projects ranging from e-commerce platforms to enterprise dashboards."
    },
    {
      title: "Team Lead Experience",
      description: "Led development teams of 3-8 developers, mentoring junior developers and managing project timelines."
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to various open-source projects with 500+ GitHub contributions in the past year."
    }
  ];

  return (
    <div className="font-sans min-h-screen transition-colors duration-300 bg-theme-bg">
      <Header />
      
      <main className="max-w-6xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-theme-3xl font-bold text-theme-text mb-4">
            My Work & Experience
          </h1>
          <p className="text-theme-lg text-theme-text-secondary max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code, 
            innovative solutions, and user-centered design.
          </p>
        </div>

        {/* Work Experience Section */}
        <WorkSection />

        {/* Skills Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-theme-3xl font-bold text-theme-text mb-4 relative inline-block">
              Technical Skills
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-accent"></div>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-theme-card-bg border border-theme-card-border rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-theme-xl font-semibold text-theme-text mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-theme-sm bg-theme-accent/10 text-theme-accent rounded-full border border-theme-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-theme-3xl font-bold text-theme-text mb-4 relative inline-block">
              Key Achievements
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-accent"></div>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-theme-card-bg border border-theme-card-border rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-theme-xl font-semibold text-theme-text mb-3">
                  {achievement.title}
                </h3>
                <p className="text-theme-text-secondary leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-theme-card-bg border border-theme-card-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-theme-2xl font-bold text-theme-text mb-4">
              Let's Work Together
            </h3>
            <p className="text-theme-text-secondary mb-6">
              I'm always interested in new opportunities and challenging projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-block px-6 py-3 bg-theme-accent text-white font-semibold rounded-lg hover:bg-theme-accent-secondary transition-colors duration-200"
              >
                View My Projects
              </Link>
              <Link
                href="/"
                className="inline-block px-6 py-3 border border-theme-accent text-theme-accent font-semibold rounded-lg hover:bg-theme-accent hover:text-white transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}