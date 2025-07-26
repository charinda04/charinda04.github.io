import Link from "next/link";

import { Header } from "@/components";

export default function NotFound() {
  return (
    <div className="font-sans min-h-screen transition-colors duration-300 bg-theme-bg">
      <Header />
      
      <main className="flex flex-col items-center justify-center px-8 py-16 min-h-[calc(100vh-80px)]">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <div className="text-8xl font-bold text-theme-accent mb-4">404</div>
            <h1 className="text-theme-3xl font-bold text-theme-text mb-4">
              Page Not Found
            </h1>
            <p className="text-theme-text-secondary text-theme-lg leading-relaxed">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-theme-accent text-white font-semibold rounded-lg hover:bg-theme-accent-secondary transition-colors duration-200"
            >
              Go Back Home
            </Link>
            
            <div className="text-theme-text-secondary">
              <p className="mb-2">Or try one of these pages:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/blogs"
                  className="text-theme-accent hover:text-theme-accent-secondary transition-colors duration-200"
                >
                  Blogs
                </Link>
                <Link
                  href="/projects"
                  className="text-theme-accent hover:text-theme-accent-secondary transition-colors duration-200"
                >
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}