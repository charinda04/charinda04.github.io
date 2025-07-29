"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Footer } from "../../components/Footer";
import { WorkProjectCard } from "../../components/WorkProjectCard";
import { PersonalProjectCard } from "../../components/PersonalProjectCard";
import { PROJECTS, WORK_PROJECTS } from "@/constants";

export default function ProjectsPage() {
  const [activeSection, setActiveSection] = useState<"work" | "personal">("work");

  return (
    <div className="bg-theme-bg flex flex-col page-transition min-h-[calc(100vh-80px)]">

      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 space-minimal-lg w-full">
        {/* Header */}
        <div className="text-center space-minimal animate-fade-in-up animate-stagger-1">
          <h1 className="text-theme-4xl font-semibold text-theme-text tracking-tight">My Projects</h1>
          <p className="text-theme-base text-theme-text-secondary max-w-xl mx-auto leading-relaxed">
            A collection of web and mobile applications I've built, ranging from personal projects to client work.
          </p>
          <Separator className="w-12 mx-auto bg-theme-accent" />
        </div>

        {/* Project Toggle */}
        <div className="flex justify-center mb-8 animate-fade-in-up animate-stagger-2">
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
          <div className="text-left mb-8 animate-fade-in-up animate-stagger-3">
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
              {WORK_PROJECTS.map((project, index) => (
                <WorkProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {PROJECTS.map((project, index) => (
                <PersonalProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
