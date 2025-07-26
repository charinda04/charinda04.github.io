"use client";

import { WORK_EXPERIENCE } from "@/constants";

export const WorkSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto mb-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-theme-3xl font-bold text-theme-text mb-4 relative inline-block">
          Work
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-accent"></div>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {WORK_EXPERIENCE.map((work, index) => (
          <div key={index} className="bg-theme-card-bg border border-theme-card-border rounded-xl p-6 shadow-lg">
            <h3 className="text-theme-xl font-semibold text-theme-text mb-3">
              {work.title}
            </h3>
            <p className="text-theme-text-accent font-medium mb-2">
              {work.company} • {work.period}
            </p>
            <p className="text-theme-text-secondary leading-relaxed">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};