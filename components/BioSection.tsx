"use client";

export const BioSection = () => {
  const timelineItems = [
    {
      year: "1990",
      title: "Born in Colombo, Sri Lanka",
      description: "Started life's journey in the beautiful island nation of Sri Lanka."
    },
    {
      year: "1995",
      title: "First Computer Experience",
      description: "Got fascinated with computers and technology at a young age."
    },
    {
      year: "2008",
      title: "High School Graduation",
      description: "Completed secondary education with focus on mathematics and science."
    },
    {
      year: "2012",
      title: "University Degree",
      description: "Graduated with Bachelor's in Computer Science from University of Colombo."
    },
    {
      year: "2016",
      title: "Started Professional Career",
      description: "Began working as a Junior Developer, diving into web development."
    },
    {
      year: "2018",
      title: "Mobile Development Focus",
      description: "Transitioned to mobile app development, specializing in React Native."
    },
    {
      year: "2020",
      title: "Full Stack Expertise",
      description: "Expanded skills to full-stack development with modern frameworks."
    },
    {
      year: "2022",
      title: "Senior Developer Role",
      description: "Promoted to senior position, leading development teams and projects."
    },
    {
      year: "2024",
      title: "Freelance Consultant",
      description: "Started consulting for startups and established companies."
    },
    {
      year: "2025",
      title: "Current Focus",
      description: "Building innovative mobile and web solutions while mentoring developers."
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto mb-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-theme-3xl font-bold text-theme-text mb-4 relative inline-block">
          Bio
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-accent"></div>
        </h2>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-theme-border"></div>
        
        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline dot */}
              <div className="absolute left-4 w-4 h-4 bg-theme-accent rounded-full border-4 border-theme-bg"></div>
              
              {/* Content */}
              <div className="ml-12 bg-theme-card-bg border border-theme-card-border rounded-xl p-6 shadow-lg flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-theme-xl font-semibold text-theme-text">
                    {item.title}
                  </h3>
                  <span className="text-theme-text-accent font-bold text-theme-lg bg-theme-accent/10 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>
                <p className="text-theme-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};