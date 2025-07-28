"use client";

import { WORK_EXPERIENCE } from "@/constants";

export const WorkSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto mb-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-theme-3xl font-bold text-theme-text mb-4 relative inline-block">
          Experience
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-accent"></div>
        </h2>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line - beautiful gradient with glow */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-theme-accent/20 via-theme-accent to-theme-accent/20 shadow-lg"></div>

        <div className="space-y-12">
          {WORK_EXPERIENCE.map((work, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot - glowing dot with pulse animation */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-theme-accent rounded-full shadow-lg z-20 ring-4 ring-theme-bg ring-opacity-100">
                <div className="absolute inset-0 bg-theme-accent rounded-full animate-ping opacity-20"></div>
              </div>

              {/* Connecting Line - horizontal line from dot to content */}
              {/* <div className="absolute left-8 top-9 w-8 h-1 bg-gradient-to-r from-theme-accent via-theme-accent/70 to-theme-accent/20 shadow-sm z-10 rounded-full"></div> */}

              {/* Main Content Container */}
              <div className="ml-12 relative">
                {/* Company Logo Card */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-theme-card-bg to-theme-button-bg border border-theme-border rounded-2xl shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300">
                  <span className="text-theme-accent font-bold text-lg">
                    {work.company
                      .split(" ")
                      .map((word) => word.charAt(0))
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>

                {/* Content Card with hover effect */}
                <div className="bg-theme-card-bg border border-theme-card-border rounded-2xl p-8 shadow-minimal group-hover:shadow-minimal-lg transition-all duration-300 relative overflow-hidden">
                  {/* Subtle background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-theme-accent/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-theme-xl font-bold text-theme-text mb-1">{work.title}</h3>
                        <p className="text-theme-lg text-theme-text-accent font-semibold">{work.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-theme-xs font-medium bg-theme-accent/10 text-theme-accent border border-theme-accent/20">
                          {work.employmentType}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-theme-sm text-theme-text-secondary mb-6">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {work.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {work.location}
                      </span>
                    </div>

                    <p className="text-theme-base text-theme-text-secondary leading-relaxed mb-6">{work.description}</p>

                    {/* Skills - Beautiful pill design */}
                    {work.skills && work.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {work.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-flex items-center px-3 py-1 rounded-full text-theme-xs font-medium bg-theme-accent/5 text-theme-accent border border-theme-accent/10 hover:bg-theme-accent/10 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
