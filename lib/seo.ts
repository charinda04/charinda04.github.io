// SEO & Metadata Configuration
export const SEO_CONFIG = {
  siteUrl: "https://charinda.com",
  siteName: "Charinda Dissanayake - Software Engineer",
  author: "Charinda Dissanayake",
  profileImage: "https://charinda.com/assets/images/profile.jpg",
  
  // Main site metadata
  main: {
    title: "Charinda - Senior Software Engineer | React, Next.js & React Native Expert",
    description: "Charinda Dissanayake is a Senior Software Engineer specializing in React, Next.js, React Native, and full-stack development. 8+ years building exceptional mobile and web applications in Sri Lanka.",
    keywords: [
      "Charinda",
      "Charinda Dissanayake",
      "Senior Software Engineer",
      "React Developer",
      "React Native Developer",
      "Next.js Developer", 
      "JavaScript Expert",
      "TypeScript Developer",
      "Frontend Engineer",
      "Full Stack Developer",
      "Mobile App Developer",
      "Web Developer", 
      "Software Engineer Sri Lanka",
      "Colombo Software Engineer",
      "React Native Sri Lanka",
      "Next.js Expert",
      "JavaScript Sri Lanka",
    ],
  },
  
  // Work page metadata
  work: {
    title: "Work Experience - Charinda Dissanayake | Senior Software Engineer",
    description: "Explore Charinda's professional experience as a Senior Software Engineer. 8+ years of expertise in React, Next.js, React Native, and full-stack development with proven track record of building exceptional applications.",
    keywords: [
      "Charinda work experience",
      "Charinda professional experience",
      "Senior Software Engineer experience", 
      "React developer experience",
      "React Native developer experience",
      "Next.js developer experience",
      "Full stack developer experience",
      "Charinda resume",
      "Charinda CV",
      "Software engineer Sri Lanka experience"
    ],
  },
  
  // Projects page metadata
  projects: {
    title: "Projects - Charinda Dissanayake | React & React Native Portfolio", 
    description: "Explore Charinda's portfolio of React, Next.js, and React Native projects. Personal and professional projects showcasing expertise in modern web and mobile development technologies.",
    keywords: [
      "Charinda projects",
      "Charinda portfolio",
      "React projects",
      "React Native projects",
      "Next.js projects", 
      "JavaScript projects",
      "TypeScript projects",
      "Mobile app projects",
      "Web development projects",
      "Charinda Dissanayake portfolio",
      "Full stack projects",
      "Frontend projects"
    ],
  },
  
  // Bio page metadata
  bio: {
    title: "About Charinda - Personal Story & Biography | Senior Software Engineer",
    description: "Discover Charinda Dissanayake's personal journey as a Senior Software Engineer from Sri Lanka. Learn about his passion for React, React Native, and creating meaningful digital experiences that make a difference.",
    keywords: [
      "About Charinda",
      "Charinda biography",
      "Charinda personal story",
      "Software engineer Sri Lanka", 
      "React developer about",
      "Personal journey",
      "Career story",
      "Charinda background",
      "Developer from Sri Lanka",
      "Tech professional biography",
    ],
  },
  
  // Blog page metadata
  blogs: {
    title: "Blog - Charinda Dissanayake | Web Development & Tech Insights",
    description: "Read Charinda's latest blog posts about React, Next.js, React Native, and modern web development. Tutorials, insights, and best practices from a Senior Software Engineer.",
    keywords: [
      "Charinda blog",
      "Charinda articles", 
      "React tutorials",
      "Next.js tutorials",
      "React Native blog",
      "Web development blog",
      "JavaScript tutorials",
      "TypeScript tutorials", 
      "Software engineering blog",
      "Technical writing",
      "Developer insights",
      "Programming tutorials"
    ],
  },
};

// Structured Data for JSON-LD
export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Charinda Dissanayake",
  alternateName: "Charinda",
  jobTitle: "Senior Software Engineer",
  description: "Charinda Dissanayake is a Senior Software Engineer with 8+ years of experience specializing in React, Next.js, React Native, and full-stack development. Expert in building exceptional mobile and web applications.",
  url: SEO_CONFIG.siteUrl,
  image: SEO_CONFIG.profileImage,
  sameAs: [
    "https://github.com/charinda04",
    "https://www.linkedin.com/in/charinda-dissanayake/",
    "https://x.com/Charinda_D",
    "https://www.instagram.com/charinda_jayath/",
  ],
  knowsAbout: [
    "React",
    "Next.js", 
    "React Native",
    "JavaScript",
    "TypeScript",
    "Frontend Development",
    "Full Stack Development",
    "Mobile Development",
    "Web Development",
    "Software Engineering",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Senior Software Engineer",
    occupationLocation: {
      "@type": "Place",
      name: "Colombo, Sri Lanka",
      "@id": "https://en.wikipedia.org/wiki/Colombo"
    },
    skills: [
      "React",
      "React Native",
      "Next.js",
      "JavaScript", 
      "TypeScript",
      "Node.js",
      "Full Stack Development"
    ]
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Kelaniya",
    "@id": "https://en.wikipedia.org/wiki/University_of_Kelaniya"
  },
  worksFor: {
    "@type": "Organization",
    name: "Senior Software Engineer"
  },
  award: "8+ Years Experience in Software Engineering",
  nationality: {
    "@type": "Country", 
    name: "Sri Lanka"
  }
};