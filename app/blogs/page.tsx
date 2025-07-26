import Link from "next/link";

import { Footer, Header } from "@/components";

export default function BlogsPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Native Applications",
      excerpt: "Learn best practices for architecting large-scale mobile applications with React Native, including state management, navigation, and performance optimization.",
      date: "2024-12-15",
      readTime: "8 min read",
      tags: ["React Native", "Mobile Development", "Architecture"],
    },
    {
      id: 2,
      title: "The Future of Web Development: Server Components and Beyond",
      excerpt: "Exploring the evolution of web development with React Server Components, streaming, and modern deployment strategies for better user experiences.",
      date: "2024-11-28",
      readTime: "12 min read",
      tags: ["React", "Next.js", "Web Development"],
    },
    {
      id: 3,
      title: "TypeScript Tips for Better Code Quality",
      excerpt: "Advanced TypeScript patterns and techniques that help write more maintainable and type-safe code in modern JavaScript applications.",
      date: "2024-11-10",
      readTime: "6 min read",
      tags: ["TypeScript", "JavaScript", "Code Quality"],
    },
    {
      id: 4,
      title: "Mastering CSS Grid and Flexbox",
      excerpt: "A comprehensive guide to modern CSS layout techniques, with practical examples and real-world use cases for responsive design.",
      date: "2024-10-22",
      readTime: "10 min read",
      tags: ["CSS", "Layout", "Responsive Design"],
    },
    {
      id: 5,
      title: "State Management in Modern React Applications",
      excerpt: "Comparing different state management solutions including Redux Toolkit, Zustand, and React Query for various application scenarios.",
      date: "2024-10-05",
      readTime: "15 min read",
      tags: ["React", "State Management", "Redux"],
    },
    {
      id: 6,
      title: "Building RESTful APIs with Node.js and Express",
      excerpt: "Step-by-step guide to creating robust and scalable backend APIs with proper error handling, authentication, and database integration.",
      date: "2024-09-18",
      readTime: "11 min read",
      tags: ["Node.js", "Express", "API Development"],
    },
  ];

  return (
    <div className="font-sans min-h-screen transition-colors duration-300 bg-theme-bg">
      <Header />
      
      <main className="max-w-6xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-theme-3xl font-bold text-theme-text mb-4">
            Blog Posts
          </h1>
          <p className="text-theme-lg text-theme-text-secondary max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, mobile apps, and software engineering.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-theme-card-bg border border-theme-card-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <h2 className="text-theme-xl font-semibold text-theme-text mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-theme-text-secondary leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-theme-xs bg-theme-accent/10 text-theme-accent rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-theme-sm text-theme-text-secondary">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              
              <Link
                href={`/blogs/${post.id}`}
                className="inline-block mt-4 text-theme-accent hover:text-theme-accent-secondary font-medium transition-colors duration-200"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-theme-card-bg border border-theme-card-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-theme-2xl font-bold text-theme-text mb-4">
              Want to stay updated?
            </h3>
            <p className="text-theme-text-secondary mb-6">
              Follow me on social media for the latest posts and insights about web development.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-theme-accent text-white font-semibold rounded-lg hover:bg-theme-accent-secondary transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}