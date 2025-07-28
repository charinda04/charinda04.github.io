export const PERSONAL_INFO = {
  name: "Charinda Dissanayake",
  title: "Senior Software Engineer • React & React Native Expert",
  location: "Gampaha, Sri Lanka",
  education: "B.Sc. Management and Information Technology, University of Kelaniya",
  languages: ["English", "Sinhala"],
  hobbies: ["Reading books", "Watching movies/ tv shows", "Listening to music"],
  initials: "CD",
  email: "charinda04@gmail.com",
  intro:
    "Hello! I'm Charinda Dissanayake, a passionate Senior Software Engineer and Frontend Engineer based in Sri Lanka, specializing in React, React Native, and full-stack development. With 5+ years of experience, I create beautiful and functional web and mobile applications.",
};

export const BIO_TIMELINE = [
  {
    year: "1994",
    title: "Born in Kandy, Sri Lanka",
    description: "Started life's journey in the beautiful island nation of Sri Lanka.",
  },
  // {
  //   year: "1995",
  //   title: "First Computer Experience",
  //   description: "Got fascinated with computers and technology at a young age.",
  // },
  {
    year: "2013",
    title: "School Graduation",
    description: "Completed school education with focus on mathematics.",
  },
  {
    year: "2018",
    title: "Internship",
    description: "Worked at Calcey Technologies as a Software Engineering intern.",
  },
  {
    year: "2019",
    title: "University Degree",
    description: "Graduated with Bachelor's in Management and Information Technology from University of Kelaniya.",
  },
  {
    year: "2019 July",
    title: "Started Professional Career",
    description: "Began working as a Junior Developer, diving into mobile development.",
  },
  // {
  //   year: "2019",
  //   title: "Mobile Development Focus",
  //   description: "Transitioned to mobile app development, specializing in React Native.",
  // },
  // {
  //   year: "2020",
  //   title: "Full Stack Expertise",
  //   description: "Expanded skills to full-stack development with modern frameworks.",
  // },
  {
    year: "2022",
    title: "Senior Developer Role",
    description: "Promoted to senior position, working with more responsibilities",
  },
  {
    year: "2023",
    title: "Associate Technical Lead - Mobile",
    description: "Promoted to Associate Technical Lead position, leading development teams and projects.",
  },
  {
    year: "2023 April",
    title: "Leaving Calcey",
    description: "",
  },
  {
    year: "2023 March",
    title: "Joined RozieAI",
    description: "",
  },
  {
    year: "2025",
    title: "Leaving RozieAI",
    description: "",
  },
  {
    year: "2025 ",
    title: "Joined Avantrio",
    description: "",
  },
  {
    year: "2025 ",
    title: "Current Focus",
    description: "Building innovative mobile and web solutions while mentoring developers.",
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Senior Frontend Developer",
    company: "RozieAI",
    period: "2023 May - 2025",
    employmentType: "Full-time",
    location: "Colombo, Sri Lanka · Remote",
    description:
      "Create UI of multiple products  as a Senior Frontend Engineer. Responsible for architecture decisions, code reviews, and mentoring junior developers in modern frontend technologies.",
    projects: [
      {
        name: "Rozie Video Gallery",
        description: "This video gallery application is shared with clients to show them how to use Rozie services.",
        achievements: [
          "• Created OTP login with email.",
          "• Handled audio upload and play/ pause audio.",
          "• Set up navigation structure, including a custom drawer navigation.",
          "• Use web sockets to fetch transcript data",
        ],
        technologies: ["React 18", "TypeScript", "Redux"],
      },
      {
        name: "Insights Dashboard",
        description: "The app is a dashboard for viewing, filtering, and sorting client data.",
        achievements: [
          "•Showed a large amount of data using ngx-datatable library.",
          "• Displayed charting diagrams using Highcharts.",
        ],
        technologies: ["Angular 15", "TypeScript"],
      },
      {
        name: "Experience Studio",
        description: "The app is a dashboard for creating skills and adding data to the knowledge base.",
        achievements: ["• Updated the existing skill work-item UI panels with the new UI."],
        technologies: ["React 18", "TypeScript", "Redux"],
      },
    ],
    skills: ["React Native", "Flutter", "TypeScript", "Team Leadership", "Code Review"],
  },
  {
    title: "Associate Technical Lead",
    company: "Calcey",
    period: "2022 - Present",
    employmentType: "Full-time",
    location: "Colombo, Sri Lanka · Remote",
    description:
      "Create UI of cross-platform mobile applications using React Native as an Associate Technical Lead. Responsible for architecture decisions, code reviews, and mentoring junior developers.",
    projects: [
      {
        name: "AiScout - Coach",
        description: "The app helps coaches submit player trials and review the rated results.",
        achievements: [
          "• Initialized the react-native app and created the initial structure.",
          "• Added changes to automate releases using Fastlane for each environment. (Dev, QA, Staging, RC)",
          "• Set up navigation structure, including a custom drawer navigation.",
          "• Connected to Firebase and added Firebase push-notifications.",
          "• Showed in-app push notifications using react-native-push-notification library.",
          "• Led and managed a team of developers assigned to the app.",
        ],
        technologies: ["React Native", "Firebase", "WatermelonDB", "TypeScript", "Fastlane", "Redux"],
      },
    ],
    skills: ["React Native", "Flutter", "TypeScript", "Team Leadership", "Code Review"],
  },
  {
    title: "Senior Software Engineer",
    company: "Calcey",
    period: "2022 Jan - 2022 Dec",
    employmentType: "Full-time",
    location: "Colombo, Sri Lanka · Hybrid",
    description:
      "Developed and maintained mobile applications using React Native. Collaborated with design teams to create responsive and user-friendly interfaces using modern React/ React Native patterns.",
    projects: [
      {
        name: "AiScout - Player",
        description:
          "The app helps players to create profiles with pictures, videos, game schedules, scores, statistics, etc. ​And take part in challenges (testing skills and fitness), creating a forum for the best talent to be discovered.",
        achievements: [
          "• Facilitated recording and submitting video trials using react-native-image-picker library.",
          "• Facilitated obtaining player information using forms. (using formik)",
          "• Created a player feed using react-native-fast-image library.",
          "• Submitted production releases to the Apple App Store and Google Play Store",
        ],
        technologies: ["React Native", "Firebase", "WatermelonDB", "TypeScript", "Fastlane", "Redux"],
      },
      {
        name: "AiScout - Scout",
        description:
          "The app helps scouts to watch players and their activities. Notify about football fixtures and facilitate adding custom notes about player performances on each match.",
        achievements: [
          "• Helped create the questionnaire used by the scouts to store details about player match performance.",
          "• Added offline functionality using watermelondb, enabling content upload at a later time.",
        ],
        technologies: ["React Native", "Firebase", "WatermelonDB", "TypeScript", "Fastlane", "Redux"],
      },
    ],
    skills: ["React", "Node.js", "MongoDB", "REST APIs", "Responsive Design"],
  },
  {
    title: "Software Engineer",
    company: "Calcey Technologies",
    period: "2019 Jul - 2021 Dec",
    employmentType: "Full-time",
    location: "Colombo, Sri Lanka · On-site",
    description:
      "Built modern mobile applications using React Native and TypeScript as a Frontend Engineer. Implemented responsive designs and optimized application performance using React/ React Native best practices. Worked as a React Native developer on multiple client projects.",
    projects: [
      {
        name: "Halsa Baby",
        description:
          "A mobile app that pairs with a wearable device for infants. The app helps parents keep track of their infant's vitals in real-time (e.g. oxygen levels, body temperature, heart rate) and triggers push notifications if the vitals indicate a cause for concern.",
        achievements: [
          "• Created graph components for bar charts and line charts using react-native-svg and d3 libraries",
          "• Added custom animation using react-native-reanimated",
        ],
        technologies: ["React Native", "Firebase", "D3.js", "TypeScript", "Fastlane", "Redux"],
      },
      {
        name: "98 Adventures",
        description:
          "98 Adventures owns and operates multiple hotels, attractions, and experiences in Ella, a popular tourist destination in Sri Lanka. This is a mobile application listing hotels, restaurants, and attractions in Ella, along with interactive maps for easy navigation.",
        achievements: [
          "• Created the navigation structure using react-navigation",
          "• Created UI components in React Native",
          "• Created the custom map component using react-native-maps",
          "• Created offline support for the app by initially downloading content and storing it in the realm database",
        ],
        technologies: ["React Native", "Firebase", "TypeScript", "Fastlane", "Redux", "Realm"],
      },
    ],
    skills: ["React", "TypeScript", "JavaScript", "CSS3", "Performance Optimization"],
  },
  {
    title: "Software Engineer Intern",
    company: "Calcey Technologies",
    period: "2018 Sep - 2019 Feb",
    employmentType: "Internship",
    location: "Colombo, Sri Lanka · On-site",
    description:
      "Started career as a Software Engineer Intern developing mobile applications using React Native. Gained foundational experience in mobile app development and software engineering practices.",
    skills: ["React", "React Native", "JavaScript", "Stylesheets"],
  },
];

export const VALUES_AND_PHILOSOPHY = [
  {
    title: "Continuous Learning",
    description:
      "I believe in staying updated with the latest technologies and best practices. The tech world evolves rapidly, and I'm committed to growing with it.",
  },
  {
    title: "Quality Over Quantity",
    description:
      "I focus on writing clean, maintainable code that stands the test of time. Every line of code should have a purpose and contribute to the overall solution.",
  },
  {
    title: "User-Centric Design",
    description:
      "Technology should serve people, not the other way around. I always keep the end user's experience at the forefront of every development decision.",
  },
  {
    title: "Collaborative Spirit",
    description:
      "Great software is built by great teams. I value open communication, knowledge sharing, and learning from diverse perspectives.",
  },
];

export const INTERESTS = [
  {
    category: "Technology Trends",
    items: ["AI/Machine Learning", "Web3 & Blockchain", "IoT Development", "Cloud Computing"],
  },
  {
    category: "Development Philosophy",
    items: ["Clean Architecture", "Test-Driven Development", "Agile Methodologies", "DevOps Culture"],
  },
  {
    category: "Community Involvement",
    items: ["Tech Meetups", "Code Reviews", "Mentoring", "Open Source Contributions"],
  },
  {
    category: "Personal Growth",
    items: ["Public Speaking", "Technical Writing", "Team Leadership", "Product Strategy"],
  },
];

export const TECHNICAL_SKILLS = [
  {
    category: "Frontend Development",
    technologies: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SASS/SCSS",
    ],
  },
  {
    category: "Mobile Development",
    technologies: ["React Native", "Expo", "TypeScript", "JavaScript", "Stylesheet", "Nativewind"],
  },
  {
    category: "Backend Development",
    technologies: [
      "Node.js",
      "Express.js",
      // "Python",
      // "Django",
      // "FastAPI",
      "PostgreSQL",
      // "MongoDB",
      // "Redis",
      // "GraphQL",
      "REST APIs",
    ],
  },
  // {
  //   category: "DevOps & Tools",
  //   technologies: [
  //     "Docker",
  //     "AWS",
  //     "Vercel",
  //     "Git",
  //     "GitHub Actions",
  //     "Jest",
  //     "Cypress",
  //     "Webpack",
  //     "Vite",
  //   ],
  // },
];

export const ACHIEVEMENTS = [
  // {
  //   title: "10+ Mobile Apps Published",
  //   description:
  //     "Successfully launched mobile applications with over 100K+ combined downloads on App Store and Google Play.",
  // },
  // {
  //   title: "50+ Web Projects Delivered",
  //   description:
  //     "Completed diverse web development projects ranging from e-commerce platforms to enterprise dashboards.",
  // },
  {
    title: "Team Lead Experience",
    description: "Led development teams of 3-8 developers, mentoring junior developers and managing project timelines.",
  },
  // {
  //   title: "Open Source Contributor",
  //   description:
  //     "Active contributor to various open-source projects with 500+ GitHub contributions in the past year.",
  // },
];

export const WORK_PROJECTS = [
  // {
  //   id: 1,
  //   title: "Stampen Media",
  //   company: "Sweden",
  //   role: "Tech Lead",
  //   period: "Jun 2022 - Aug 2024",
  //   image: "/api/placeholder/400/250",
  //   achievements: [
  //     "Led major platform migration, boosting daily page views by 300% to over 4 million, while maintaining high availability and limiting cost increases to under 50%.",
  //     "Managed and mentored a remote, cross-functional team of 7 in the customer experience vertical, leading to improved team productivity and project efficiency.",
  //     "Developed interactive site components for data visualization, significantly enhancing user engagement and comprehension metrics."
  //   ],
  //   technologies: ["Next.js", "AWS AppSync", "AWS Lambda", "PostgreSQL"]
  // },
  {
    id: 1,
    title: "AiScout",
    company: "United Kingdom",
    role: "Associate Technical Lead",
    period: "Jan 2021 - Jun 2023",
    image: "/assets/images/ai_scout.webp",
    achievements: [
      "Led an initiative to decouple analysis functionality, resulting in improved system operations and enhanced code maintainability.",
      "Rapidly integrated into the team, quickly mastering a complex domain and contributing to the development of key system features.",
    ],
    technologies: ["React Native"],
  },
  // {
  //   id: 3,
  //   title: "Dreamsave Insights",
  //   company: "United States",
  //   role: "Senior Software Engineer",
  //   period: "Jul 2020 - Jan 2022",
  //   image: "/api/placeholder/400/250",
  //   achievements: [
  //     "Spearheaded limited back-end development on an analytical tool, processing multi-year data from over 1,500 savings groups, enabling rapid trend visualization and accurate financial predictions.",
  //     "Optimized system performance by employing advanced data structures and pre-processing techniques, reducing request processing times to sub 1s levels.",
  //     "Collaborated with cross-functional teams to implement data-driven strategies, enhancing organizational effectiveness and increasing user engagement by 25%.",
  //   ],
  //   technologies: ["Flask (Python)", "React.js", "MongoDB", "Apache Cassandra"],
  // },
  // {
  //   id: 4,
  //   title: "MotivateHT",
  //   company: "United States",
  //   role: "Senior Software Engineer",
  //   period: "Dec 2018 - Jul 2020",
  //   image: "/api/placeholder/400/250",
  //   achievements: [
  //     "Led a back-end team of four to develop core booking and scheduling functionalities, implementing rich notification channels that boosted user engagement.",
  //     "Engineered the infrastructure for a new project, utilizing best practices to create a cloud-agnostic, low cost and highly scalable system.",
  //   ],
  //   technologies: [".NET Core", "PostgreSQL"],
  // },
  // {
  //   id: 5,
  //   title: "Ancon",
  //   company: "Sweden",
  //   role: "Senior Software Engineer",
  //   period: "May 2018 - Dec 2019",
  //   image: "/api/placeholder/400/250",
  //   achievements: [
  //     "Drove and mentored a remote team of five to drive the back-end development of the G2 platform migration, resulting in improved system performance and scalability.",
  //     "Enhanced back-end scalability and built new functionalities to serve over 100,000 users, developing a multi-tenant system capable of supporting over 1,000 client restaurants.",
  //   ],
  //   technologies: [".NET Core", "React.js", "PostgreSQL"],
  // },
];

export const PROJECTS = [
  {
    id: 1,
    title: "ECommerce Mobile App",
    description:
      "A full-featured e-commerce mobile application built with React Native, featuring user authentication, product catalog, cart management, and payment integration.",
    image: "/assets/images/personal.png",
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "Firebase"],
    githubUrl: "https://github.com/charinda/ecommerce-app",
    // liveUrl: "https://play.google.com/store/apps/details?id=com.charinda.ecommerce",
    status: "Live",
  },
  // {
  //   id: 2,
  //   title: "Task Management Dashboard",
  //   description:
  //     "A comprehensive project management tool with team collaboration features, real-time updates, and advanced analytics built with Next.js and Node.js.",
  //   image: "/api/placeholder/400/250",
  //   technologies: ["Next.js", "Node.js", "PostgreSQL", "Socket.io"],
  //   githubUrl: "https://github.com/charinda/task-dashboard",
  //   // liveUrl: "https://taskmanager.charinda.dev",
  //   status: "Live",
  // },
  // {
  //   id: 3,
  //   title: "Weather Forecast App",
  //   description:
  //     "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts. Features a clean, responsive design.",
  //   image: "/api/placeholder/400/250",
  //   technologies: ["React", "OpenWeather API", "Tailwind CSS", "PWA"],
  //   githubUrl: "https://github.com/charinda/weather-app",
  //   liveUrl: "https://weather.charinda.dev",
  //   status: "Live",
  // },
  // {
  //   id: 4,
  //   title: "Cryptocurrency Tracker",
  //   description:
  //     "Real-time cryptocurrency tracking application with portfolio management, price alerts, and detailed market analysis charts.",
  //   image: "/api/placeholder/400/250",
  //   technologies: ["Vue.js", "Chart.js", "CoinGecko API", "Vuex"],
  //   githubUrl: "https://github.com/charinda/crypto-tracker",
  //   // liveUrl: "https://crypto.charinda.dev",
  //   status: "Live",
  // },
  // {
  //   id: 5,
  //   title: "Social Media Analytics Tool",
  //   description:
  //     "A comprehensive analytics dashboard for social media managers to track engagement, growth, and performance across multiple platforms.",
  //   image: "/api/placeholder/400/250",
  //   technologies: ["React", "D3.js", "Express.js", "MongoDB"],
  //   githubUrl: "https://github.com/charinda/social-analytics",
  //   liveUrl: null,
  //   status: "In Development",
  // },
  // {
  //   id: 6,
  //   title: "Recipe Sharing Platform",
  //   description:
  //     "A community-driven platform where users can share, discover, and rate recipes. Features advanced search, meal planning, and shopping lists.",
  //   image: "/api/placeholder/400/250",
  //   technologies: ["Flutter", "Django", "PostgreSQL", "AWS S3"],
  //   githubUrl: "https://github.com/charinda/recipe-platform",
  //   liveUrl: null,
  //   status: "Coming Soon",
  // },
];

export const PROJECT_STATUS_VARIANTS = {
  Live: "default",
  "In Development": "secondary",
  "Coming Soon": "outline",
} as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/charinda04",
    icon: "GitHubIcon",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/charinda-dissanayake/",
    icon: "LinkedInIcon",
  },
  {
    name: "Twitter",
    url: "https://x.com/Charinda_D",
    icon: "TwitterIcon",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/charinda_jayath/",
    icon: "InstagramIcon",
  },
  {
    name: "Facebook",
    url: "https://web.facebook.com/charinda1/",
    icon: "FacebookIcon",
  },
  {
    name: "BlueSky",
    url: "https://bsky.app/profile/charinda.bsky.social",
    icon: "BlueSkyIcon",
  },
  {
    name: "Threads",
    url: "https://www.threads.com/@charinda_jayath",
    icon: "ThreadsIcon",
  },
];
