import Link from "next/link";

import { BioSection, Footer, Header } from "@/components";

export default function BioPage() {
  const personalInfo = {
    location: "Colombo, Sri Lanka",
    education: "B.Sc. Computer Science, University of Colombo",
    languages: ["English", "Sinhala", "Tamil"],
    hobbies: ["Photography", "Travel", "Open Source", "Tech Blogging"]
  };

  const values = [
    {
      title: "Continuous Learning",
      description: "I believe in staying updated with the latest technologies and best practices. The tech world evolves rapidly, and I'm committed to growing with it."
    },
    {
      title: "Quality Over Quantity", 
      description: "I focus on writing clean, maintainable code that stands the test of time. Every line of code should have a purpose and contribute to the overall solution."
    },
    {
      title: "User-Centric Design",
      description: "Technology should serve people, not the other way around. I always keep the end user's experience at the forefront of every development decision."
    },
    {
      title: "Collaborative Spirit",
      description: "Great software is built by great teams. I value open communication, knowledge sharing, and learning from diverse perspectives."
    }
  ];

  const interests = [
    {
      category: "Technology Trends",
      items: ["AI/Machine Learning", "Web3 & Blockchain", "IoT Development", "Cloud Computing"]
    },
    {
      category: "Development Philosophy",
      items: ["Clean Architecture", "Test-Driven Development", "Agile Methodologies", "DevOps Culture"]
    },
    {
      category: "Community Involvement",
      items: ["Tech Meetups", "Code Reviews", "Mentoring", "Open Source Contributions"]
    },
    {
      category: "Personal Growth",
      items: ["Public Speaking", "Technical Writing", "Team Leadership", "Product Strategy"]
    }
  ];

  return (
    <div className="font-sans min-h-screen transition-colors duration-300 bg-theme-bg">
      <Header />
      
      <main className="max-w-6xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-theme-3xl font-bold text-theme-text mb-4">
            About Charinda
          </h1>
          <p className="text-theme-lg text-theme-text-secondary max-w-2xl mx-auto">
            Get to know the person behind the code - my journey, values, and what drives me 
            to create meaningful digital experiences.
          </p>
        </div>

        {/* Personal Introduction */}
        <section className="mb-16">
          <div className="bg-theme-card-bg border border-theme-card-border rounded-xl p-8 shadow-lg">
            <h2 className="text-theme-2xl font-bold text-theme-text mb-6">
              Hello, I'm Charinda! 👋
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-theme-text-secondary leading-relaxed mb-4">
                I'm a passionate software engineer from Sri Lanka with over 8 years of experience in 
                building web and mobile applications. My journey started with a curiosity about how 
                websites work, and it has evolved into a deep love for creating digital solutions 
                that make a real difference in people's lives.
              </p>
              <p className="text-theme-text-secondary leading-relaxed mb-4">
                When I'm not coding, you'll find me exploring new technologies, contributing to open 
                source projects, or sharing knowledge through technical blogs and community meetups. 
                I believe that the best way to grow as a developer is to stay curious, keep learning, 
                and give back to the community that has given me so much.
              </p>
              <p className="text-theme-text-secondary leading-relaxed">
                Living in the beautiful island of Sri Lanka gives me a unique perspective on global 
                technology trends while staying connected to local community needs. I'm passionate 
                about using technology to bridge gaps and create opportunities for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Info */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-theme-3xl font-bold text-theme-text mb-4 relative inline-block">
              Quick Facts
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-accent"></div>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-theme-card-bg border border-theme-card-border rounded-xl p-6 text-center shadow-lg">
              <div className="text-theme-2xl mb-2">🌍</div>
              <h3 className="text-theme-lg font-semibold text-theme-text mb-2">Location</h3>
              <p className="text-theme-text-secondary">{personalInfo.location}</p>
            </div>
            
            <div className="bg-theme-card-bg border border-theme-card-border rounded-xl p-6 text-center shadow-lg">
              <div className="text-theme-2xl mb-2">🎓</div>
              <h3 className="text-theme-lg font-semibold text-theme-text mb-2">Education</h3>
              <p className="text-theme-text-secondary text-theme-sm">{personalInfo.education}</p>
            </div>
            
            <div className="bg-theme-card-bg border border-theme-card-border rounded-xl p-6 text-center shadow-lg">
              <div className="text-theme-2xl mb-2">🗣️</div>
              <h3 className="text-theme-lg font-semibold text-theme-text mb-2">Languages</h3>
              <p className="text-theme-text-secondary">{personalInfo.languages.join(", ")}</p>
            </div>
            
            <div className="bg-theme-card-bg border border-theme-card-border rounded-xl p-6 text-center shadow-lg">
              <div className="text-theme-2xl mb-2">🎯</div>
              <h3 className="text-theme-lg font-semibold text-theme-text mb-2">Hobbies</h3>
              <p className="text-theme-text-secondary text-theme-sm">{personalInfo.hobbies.join(", ")}</p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <BioSection />

        {/* Values & Philosophy */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-theme-3xl font-bold text-theme-text mb-4 relative inline-block">
              My Values & Philosophy
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-accent"></div>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-theme-card-bg border border-theme-card-border rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-theme-xl font-semibold text-theme-text mb-4">
                  {value.title}
                </h3>
                <p className="text-theme-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-theme-3xl font-bold text-theme-text mb-4 relative inline-block">
              Current Interests
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-accent"></div>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-theme-card-bg border border-theme-card-border rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-theme-xl font-semibold text-theme-text mb-4">
                  {interest.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interest.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-theme-sm bg-theme-accent/10 text-theme-accent rounded-full border border-theme-accent/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-theme-card-bg border border-theme-card-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-theme-2xl font-bold text-theme-text mb-4">
              Let's Connect!
            </h3>
            <p className="text-theme-text-secondary mb-6">
              I love meeting new people and discussing ideas about technology, life, and everything in between. 
              Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blogs"
                className="inline-block px-6 py-3 bg-theme-accent text-white font-semibold rounded-lg hover:bg-theme-accent-secondary transition-colors duration-200"
              >
                Read My Blog
              </Link>
              <Link
                href="/work"
                className="inline-block px-6 py-3 border border-theme-accent text-theme-accent font-semibold rounded-lg hover:bg-theme-accent hover:text-white transition-colors duration-200"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}