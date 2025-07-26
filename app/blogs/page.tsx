import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

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
    <div className="min-h-screen bg-theme-bg">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-12 space-minimal-lg">
        {/* Header */}
        <div className="text-center space-minimal">
          <h1 className="text-theme-4xl font-semibold text-theme-text tracking-tight">
            Blog Posts
          </h1>
          <p className="text-theme-base text-theme-text-secondary max-w-xl mx-auto leading-relaxed">
            Thoughts, tutorials, and insights about web development, mobile apps, and software engineering.
          </p>
          <Separator className="w-12 mx-auto bg-theme-accent" />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Card key={post.id} className="border-theme-border bg-theme-card-bg shadow-minimal hover:shadow-minimal-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-theme-lg font-medium text-theme-text leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-theme-sm text-theme-text-secondary leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-theme-accent/10 text-theme-accent border-theme-accent/20 text-theme-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-theme-xs text-theme-text-secondary pt-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <Button 
                  asChild 
                  variant="ghost" 
                  className="w-full justify-start p-0 h-auto text-theme-accent hover:text-theme-accent-secondary hover:bg-transparent"
                >
                  <Link href={`/blogs/${post.id}`}>
                    Read More →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="border-theme-border bg-theme-card-bg shadow-minimal max-w-2xl mx-auto">
          <CardContent className="pt-6 text-center space-minimal-sm">
            <h3 className="text-theme-xl font-medium text-theme-text">
              Want to stay updated?
            </h3>
            <p className="text-theme-sm text-theme-text-secondary leading-relaxed">
              Follow me on social media for the latest posts and insights about web development.
            </p>
            <Button asChild className="bg-theme-accent hover:bg-theme-accent-secondary text-white">
              <Link href="/">
                Back to Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
}