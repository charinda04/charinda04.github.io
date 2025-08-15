"use client";

import { Separator } from "@/components/ui/separator";
import { PROFESSIONAL_TIMELINE } from "@/constants";
import { memo } from "react";

export const ProfessionalTimeline = memo(() => {
  return (
    <section className="space-minimal">
      <div className="text-center mb-16 animate-fade-in-up animate-stagger-11">
        <h2 className="text-theme-2xl font-semibold text-theme-text mb-2"> MY PROFESSIONAL STORY.</h2>

        {/* <p className="text-theme-sm text-theme-text-secondary max-w-xl mx-auto leading-relaxed uppercase tracking-widest">

        </p> */}
        {/* <Separator className="w-16 mx-auto bg-theme-accent mt-6" /> */}
        <Separator className="w-12 mx-auto bg-theme-accent" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line - hidden on mobile, visible from md up */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 md:transform md:-translate-x-1/2" />

        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {PROFESSIONAL_TIMELINE.map((item, index) => (
            <div key={item.id} className={`relative animate-fade-in-up animate-stagger-${Math.min(index + 12, 18)}`}>
              {/* Circle with icon - responsive positioning */}
              <div className="absolute left-6 md:left-1/2 top-0 w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 transform -translate-x-1/2 md:transform md:-translate-x-1/2">
                <div className="w-full h-full bg-white rounded-full border-2 md:border-4 border-gray-200 flex items-center justify-center shadow-lg">
                  <div className="text-lg md:text-xl lg:text-2xl">{item.icon}</div>
                </div>
              </div>

              {/* Content - responsive layout */}
              <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 pt-6 md:pt-10 lg:pt-12">
                {/* Mobile layout - always left aligned */}
                <div className="md:hidden">
                  <div className="text-theme-base md:text-theme-lg font-semibold text-theme-text mb-1 md:mb-2">
                    {item.period}
                  </div>
                  <h3 className="text-theme-lg md:text-theme-xl font-bold text-theme-text mb-2 md:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-theme-sm text-theme-text-secondary leading-relaxed">{item.description}</p>
                </div>

                {/* Desktop/Tablet layout - alternating sides */}
                {index % 2 === 0 ? (
                  <>
                    <div className="hidden md:block md:text-right md:pr-8 lg:pr-16">
                      <div className="text-theme-base md:text-theme-lg font-semibold text-theme-text mb-1 md:mb-2">
                        {item.period}
                      </div>
                      <h3 className="text-theme-lg md:text-theme-xl font-bold text-theme-text mb-2 md:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-theme-sm text-theme-text-secondary leading-relaxed max-w-md md:ml-auto">
                        {item.description}
                      </p>
                    </div>
                    <div className="hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block"></div>
                    <div className="hidden md:block md:text-left md:pl-8 lg:pl-16">
                      <div className="text-theme-base md:text-theme-lg font-semibold text-theme-text mb-1 md:mb-2">
                        {item.period}
                      </div>
                      <h3 className="text-theme-lg md:text-theme-xl font-bold text-theme-text mb-2 md:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-theme-sm text-theme-text-secondary leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ProfessionalTimeline.displayName = "ProfessionalTimeline";
