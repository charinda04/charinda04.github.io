import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Work Experience - Charinda Dissanayake | Senior Software Engineer",
  description: "Explore Charinda Dissanayake's professional work experience as a Senior Software Engineer, Frontend Engineer, and Fullstack Engineer. Expert in React, React Native, and modern web technologies.",
  keywords: "Charinda work experience, React developer, React Native engineer, Frontend engineer career, Software engineer experience",
  openGraph: {
    title: "Work Experience - Charinda Dissanayake",
    description: "Professional journey of a Senior Software Engineer specializing in React and React Native",
    url: "https://charinda04.github.io/work",
  },
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { WorkSection } from "../../components/WorkSection";
import { Footer } from "../../components/Footer";
import { CallToAction } from "@/components/CallToAction";
import { TECHNICAL_SKILLS } from "@/constants";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-theme-bg">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12 space-minimal-lg">
        {/* Header */}
        <div className="text-center space-minimal">
          <h1 className="text-theme-4xl font-semibold text-theme-text tracking-tight">
            Work & Experience
          </h1>
          <p className="text-theme-base text-theme-text-secondary max-w-xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences through
            clean code, innovative solutions, and user-centered design.
          </p>
        </div>

        {/* Work Experience Section */}
        <WorkSection />

        {/* Skills Section */}
        <section className="space-minimal">
          <div className="text-center mb-8">
            <h2 className="text-theme-2xl font-semibold text-theme-text mb-2">
              Technical Skills
            </h2>
            <Separator className="w-12 mx-auto bg-theme-accent" />
          </div>

          <div
            className={`grid gap-6 ${
              TECHNICAL_SKILLS.length % 2 === 1
                ? "md:grid-cols-2 lg:grid-cols-3 justify-items-center"
                : "md:grid-cols-2"
            }`}
          >
            {TECHNICAL_SKILLS.map((skillGroup, index) => (
              <Card
                key={index}
                className="border-theme-border bg-theme-card-bg shadow-minimal w-full max-w-sm"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-theme-lg text-theme-text">
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-theme-accent/10 text-theme-accent border-theme-accent/20 hover:bg-theme-accent/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        {/* <section className="space-minimal">
          <div className="text-center mb-8">
            <h2 className="text-theme-2xl font-semibold text-theme-text mb-2">
              Key Achievements
            </h2>
            <Separator className="w-12 mx-auto bg-theme-accent" />
          </div>

          <div className={`grid gap-6 ${ACHIEVEMENTS.length === 1 ? 'max-w-lg mx-auto' : 'md:grid-cols-2'}`}>
            {ACHIEVEMENTS.map((achievement, index) => (
              <Card
                key={index}
                className="border-theme-border bg-theme-card-bg shadow-minimal"
              >
                <CardContent className="pt-6">
                  <h3 className="text-theme-lg font-medium text-theme-text mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-theme-sm text-theme-text-secondary leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}

        {/* Call to Action */}
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
