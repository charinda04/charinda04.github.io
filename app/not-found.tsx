import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "../components/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-theme-bg">
      <Header />
      
      <main className="flex items-center justify-center px-6 py-12 min-h-[calc(100vh-80px)]">
        <Card className="border-theme-border bg-theme-card-bg shadow-minimal max-w-md w-full">
          <CardContent className="pt-6 text-center space-minimal">
            <div className="text-6xl font-bold text-theme-accent mb-4">404</div>
            <h1 className="text-theme-2xl font-semibold text-theme-text mb-3">
              Page Not Found
            </h1>
            <p className="text-theme-sm text-theme-text-secondary leading-relaxed mb-6">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            
            <div className="space-y-4">
              <Button asChild className="w-full bg-theme-accent hover:bg-theme-accent-secondary text-white">
                <Link href="/">
                  Go Back Home
                </Link>
              </Button>
              
              <div className="text-theme-text-secondary">
                <p className="text-theme-xs mb-2">Or try one of these pages:</p>
                <div className="flex justify-center gap-4">
                  <Button asChild variant="ghost" size="sm" className="p-0 h-auto text-theme-accent hover:text-theme-accent-secondary hover:bg-transparent">
                    <Link href="/blogs">
                      Blogs
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="p-0 h-auto text-theme-accent hover:text-theme-accent-secondary hover:bg-transparent">
                    <Link href="/projects">
                      Projects
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}