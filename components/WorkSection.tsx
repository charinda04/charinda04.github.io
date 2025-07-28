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
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-theme-border"></div>
        
        <div className="space-y-6">
          {WORK_EXPERIENCE.map((work, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-theme-accent border-4 border-theme-bg rounded-full shadow-sm z-10"></div>
              
              {/* Company Logo */}
              <div className="flex-shrink-0 w-12 h-12 bg-white border border-gray-200 rounded-md flex items-center justify-center mr-4 shadow-sm">
                <span className="text-theme-accent font-bold text-sm">
                  {work.company.split(' ').map(word => word.charAt(0)).join('').slice(0, 2)}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-6">
                <div className="mb-1">
                  <h3 className="text-theme-lg font-semibold text-theme-text">
                    {work.title}
                  </h3>
                </div>
                
                <p className="text-theme-base text-theme-text-accent font-medium mb-1">
                  {work.company} · {work.employmentType}
                </p>
                
                <p className="text-theme-sm text-theme-text-secondary mb-1">
                  {work.period}
                </p>
                
                <p className="text-theme-sm text-theme-text-secondary mb-4">
                  {work.location}
                </p>
                
                <p className="text-theme-base text-theme-text-secondary leading-relaxed mb-4">
                  {work.description}
                </p>
                
                {/* Skills */}
                {work.skills && work.skills.length > 0 && (
                  <div className="flex items-center text-theme-sm text-theme-text-secondary">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">
                      {work.skills.join(' · ')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};