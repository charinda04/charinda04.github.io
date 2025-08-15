"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { WorkSection } from "../../components/WorkSection";
import { Footer } from "../../components/Footer";
import { TECHNICAL_SKILLS, PERSONAL_INFO } from "@/constants";
import { trackDownload } from "@/lib/analytics";

export default function WorkPage() {
  return (
    <div className="bg-theme-bg flex flex-col page-transition min-h-[calc(100vh-80px)]">
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 space-minimal-lg w-full">
        {/* Header */}
        <div className="text-center space-minimal animate-fade-in-up animate-stagger-1">
          <h1 className="text-theme-4xl font-semibold text-theme-text tracking-tight">Work & Experience</h1>
          <p className="text-theme-base text-theme-text-secondary max-w-xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences through clean code, innovative solutions, and
            user-centered design.
          </p>
        </div>

        {/* Contact & Resume Section */}
        <section className="space-minimal">
          <div className="text-center mb-8 animate-fade-in-up animate-stagger-2">
            <h2 className="text-theme-2xl font-semibold text-theme-text mb-2">Let's Work Together</h2>
            <Separator className="w-12 mx-auto bg-theme-accent" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Contact Email */}
            <div className="animate-fade-in-up animate-stagger-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-3 px-6 py-3 bg-theme-card-bg border border-theme-card-border rounded-xl shadow-minimal hover:shadow-minimal-lg hover:border-theme-accent/30 transition-all duration-300 font-medium hover-lift"
              >
                <div className="w-8 h-8 bg-theme-accent/10 rounded-full flex items-center justify-center group-hover:bg-theme-accent/20 transition-colors duration-300">
                  <svg className="w-4 h-4 text-theme-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-theme-text hover:text-theme-accent transition-colors duration-300">
                  {PERSONAL_INFO.email}
                </span>
              </a>
            </div>

            {/* Download Resume Button */}
            <div className="animate-fade-in-up animate-stagger-4">
              <a
                href="/assets/documents/CV_Charinda.pdf"
                download="CV_Charinda.pdf"
                onClick={() => trackDownload("CV_Charinda.pdf")}
                className="group inline-flex items-center gap-3 px-6 py-3 bg-theme-accent text-theme-bg rounded-xl shadow-minimal hover:shadow-minimal-lg hover:bg-theme-accent-secondary transition-all duration-300 font-medium hover-lift"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span className="text-white">
                  Download Résumé
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <div className="animate-fade-in-up animate-stagger-5">
          <WorkSection />
        </div>

        {/* Skills Section */}
        <section className="space-minimal">
          <div className="text-center mb-8 animate-fade-in-up animate-stagger-6">
            <h2 className="text-theme-2xl font-semibold text-theme-text mb-2">Technical Skills</h2>
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
                className={`border-theme-border bg-theme-card-bg shadow-minimal w-full max-w-sm hover-lift animate-fade-in-up animate-stagger-${Math.min(
                  index + 7,
                  12
                )}`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-theme-lg text-theme-text">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-theme-accent/10 text-theme-accent  hover:bg-theme-accent/20 border-[0.01px] transition-all duration-200 hover:scale-105"
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
      </main>

      <Footer />
    </div>
  );
}
