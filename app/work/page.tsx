import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { WorkSection } from "../../components/WorkSection";
import { Footer } from "../../components/Footer";
import { TECHNICAL_SKILLS, ACHIEVEMENTS } from "@/constants";

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

          <div className="grid md:grid-cols-2 gap-6">
            {TECHNICAL_SKILLS.map((skillGroup, index) => (
              <Card
                key={index}
                className="border-theme-border bg-theme-card-bg shadow-minimal"
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
        <section className="space-minimal">
          <div className="text-center mb-8">
            <h2 className="text-theme-2xl font-semibold text-theme-text mb-2">
              Key Achievements
            </h2>
            <Separator className="w-12 mx-auto bg-theme-accent" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
        </section>

        {/* Call to Action */}
        <Card className="border-theme-border bg-theme-card-bg shadow-minimal max-w-2xl mx-auto">
          <CardContent className="pt-6 text-center space-minimal-sm">
            <h3 className="text-theme-xl font-medium text-theme-text">
              Let's Work Together
            </h3>
            <p className="text-theme-sm text-theme-text-secondary leading-relaxed">
              I'm always interested in new opportunities and challenging
              projects. Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                className="bg-theme-accent hover:bg-theme-accent-secondary text-white"
              >
                <Link href="/projects">View My Projects</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-theme-accent text-theme-accent hover:bg-theme-accent hover:text-white"
              >
                <Link href="/">Get In Touch</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
