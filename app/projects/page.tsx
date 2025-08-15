"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Footer } from "../../components/Footer";
import { WorkProjectCard } from "../../components/WorkProjectCard";
import { PersonalProjectCard } from "../../components/PersonalProjectCard";
import { PROJECTS, WORK_PROJECTS } from "@/constants";

export default function ProjectsPage() {
  const [activeSection, setActiveSection] = useState<"work" | "personal">("personal");

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
        {/* <div className="flex justify-center mb-8 animate-fade-in-up animate-stagger-2">
          <div className="bg-theme-card-bg border border-theme-border rounded-lg p-1 shadow-minimal w-full max-w-sm flex">
            <button
              onClick={() => {
                setActiveSection("work");
                trackButtonClick("Projects Tab - Work", "/projects");
              }}
              className={` text-theme-text px-3 sm:px-6 py-2 rounded-md text-theme-xs sm:text-theme-sm font-medium transition-all duration-200 flex-1 ${
                activeSection === "work"
                  ? "bg-theme-accent text-theme-bg shadow-minimal"
                  : "text-theme-text-secondary hover:text-theme-text hover:bg-theme-button-bg"
              }`}
            >
              Work Projects
            </button>
            <button
              onClick={() => {
                setActiveSection("personal");
                trackButtonClick("Projects Tab - Personal", "/projects");
              }}
              className={`text-theme-text px-3 sm:px-6 py-2 rounded-md text-theme-xs sm:text-theme-sm font-medium transition-all duration-200 flex-1 ${
                activeSection === "personal"
                  ? "bg-theme-accent text-theme-bg shadow-minimal"
                  : "text-theme-text-secondary hover:text-theme-text hover:bg-theme-button-bg"
              }`}
            >
              Personal Projects
            </button>
          </div>
        </div> */}

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

          {/* Work in Progress Indicator */}
          <div className="mb-8 animate-fade-in-up animate-stagger-4">
            <div className="bg-gradient-to-r from-theme-accent/10 to-theme-accent-secondary/10 border border-theme-accent/20 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-theme-accent rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-theme-accent/70 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-theme-accent/40 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-theme-sm font-medium text-theme-text mb-1">🚀 Projects actively updating</h3>
                  <p className="text-theme-xs text-theme-text-secondary">
                    {activeSection === "work"
                      ? "All recent projects will be updated here shortly"
                      : "Exploring new ideas and experimenting with cutting-edge technologies"}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-theme-xs text-theme-accent font-medium">
                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span>Live Updates</span>
                </div>
              </div>
            </div>
          </div>

          {activeSection === "work" ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {WORK_PROJECTS.map((project, index) => (
                <WorkProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="flex">
              {PROJECTS.map((project, index) => (
                <PersonalProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
