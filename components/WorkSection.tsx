"use client";

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
        <div className="bg-theme-card-bg border border-theme-card-border rounded-xl p-6 shadow-lg">
          <h3 className="text-theme-xl font-semibold text-theme-text mb-3">
            Senior Mobile Developer
          </h3>
          <p className="text-theme-text-accent font-medium mb-2">
            Tech Solutions Inc. • 2022 - Present
          </p>
          <p className="text-theme-text-secondary leading-relaxed">
            Leading development of cross-platform mobile applications using React Native and Flutter. 
            Responsible for architecture decisions, code reviews, and mentoring junior developers.
          </p>
        </div>

        <div className="bg-theme-card-bg border border-theme-card-border rounded-xl p-6 shadow-lg">
          <h3 className="text-theme-xl font-semibold text-theme-text mb-3">
            Full Stack Developer
          </h3>
          <p className="text-theme-text-accent font-medium mb-2">
            Digital Innovations Ltd. • 2020 - 2022
          </p>
          <p className="text-theme-text-secondary leading-relaxed">
            Developed and maintained web applications using React, Node.js, and MongoDB. 
            Collaborated with design teams to create responsive and user-friendly interfaces.
          </p>
        </div>

        <div className="bg-theme-card-bg border border-theme-card-border rounded-xl p-6 shadow-lg">
          <h3 className="text-theme-xl font-semibold text-theme-text mb-3">
            Frontend Developer
          </h3>
          <p className="text-theme-text-accent font-medium mb-2">
            StartupHub • 2018 - 2020
          </p>
          <p className="text-theme-text-secondary leading-relaxed">
            Built modern web applications with React and TypeScript. 
            Implemented responsive designs and optimized application performance.
          </p>
        </div>

        <div className="bg-theme-card-bg border border-theme-card-border rounded-xl p-6 shadow-lg">
          <h3 className="text-theme-xl font-semibold text-theme-text mb-3">
            Junior Developer
          </h3>
          <p className="text-theme-text-accent font-medium mb-2">
            WebCraft Agency • 2016 - 2018
          </p>
          <p className="text-theme-text-secondary leading-relaxed">
            Started career developing websites using HTML, CSS, JavaScript, and PHP. 
            Gained experience in client communication and project management.
          </p>
        </div>
      </div>
    </section>
  );
};