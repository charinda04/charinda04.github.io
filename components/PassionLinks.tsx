"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { trackExternalLink } from "@/lib/analytics";

export function PassionLinks() {
  return (
    <section className="space-minimal">
      <div className="text-center mb-8 animate-fade-in-up animate-stagger-7">
        <h2 className="text-theme-2xl font-semibold text-theme-text mb-2">Beyond Code</h2>
        <Separator className="w-12 mx-auto bg-theme-accent" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Reading */}
        <Card className="border-theme-border bg-theme-card-bg shadow-minimal animate-fade-in-up animate-stagger-8 hover-lift">
          <CardContent className="pt-6 space-y-4">
            <div className="text-center">
              <div className="text-theme-2xl mb-2">📚</div>
              <h3 className="text-theme-lg font-medium text-theme-text">Book Wanderer</h3>
            </div>
            <p className="text-theme-sm text-theme-text-secondary leading-relaxed text-center">
              Books are my gateway to countless worlds. From technical deep-dives to captivating fiction, each page
              fuels curiosity and expands perspectives.
            </p>
            <div className="text-center pt-2">
              <a
                href="https://www.goodreads.com/charinda04"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-theme-xs text-theme-accent hover:text-theme-accent-hover transition-colors font-medium"
                onClick={() => trackExternalLink("https://www.goodreads.com/charinda04", "Goodreads Profile")}
              >
                View Reading Journey →
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Movies */}
        <Card className="border-theme-border bg-theme-card-bg shadow-minimal animate-fade-in-up animate-stagger-9 hover-lift">
          <CardContent className="pt-6 space-y-4">
            <div className="text-center">
              <div className="text-theme-2xl mb-2">🎬</div>
              <h3 className="text-theme-lg font-medium text-theme-text">Movie Buff</h3>
            </div>
            <p className="text-theme-sm text-theme-text-secondary leading-relaxed text-center">
              Cinema is storytelling at its finest. From thought-provoking dramas to mind-bending sci-fi, every film
              offers a new lens through which to view the world.
            </p>
            <div className="text-center pt-2">
              <a
                href="https://www.imdb.com/user/ur68134226/?ref_=ext_shr_lnk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-theme-xs text-theme-accent hover:text-theme-accent-hover transition-colors font-medium"
                onClick={() =>
                  trackExternalLink("https://www.imdb.com/user/ur68134226/?ref_=ext_shr_lnk", "IMDB Profile")
                }
              >
                Explore My Watchlist →
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Music */}
        <Card className="border-theme-border bg-theme-card-bg shadow-minimal animate-fade-in-up animate-stagger-10 hover-lift">
          <CardContent className="pt-6 space-y-4">
            <div className="text-center">
              <div className="text-theme-2xl mb-2">🎵</div>
              <h3 className="text-theme-lg font-medium text-theme-text">Music Enthusiast</h3>
            </div>
            <p className="text-theme-sm text-theme-text-secondary leading-relaxed text-center">
              Music is the soundtrack to life's moments. Whether coding to ambient beats or discovering new artists,
              melodies shape my creative flow.
            </p>
            <div className="text-center pt-2">
              <a
                href="https://open.spotify.com/user/a3nh53nmndd7l8lmj8bycmfdw?si=75d1ec7a01e34083"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-theme-xs text-theme-accent hover:text-theme-accent-hover transition-colors font-medium"
                onClick={() =>
                  trackExternalLink(
                    "https://open.spotify.com/user/a3nh53nmndd7l8lmj8bycmfdw?si=75d1ec7a01e34083",
                    "Spotify Profile"
                  )
                }
              >
                Listen Along →
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
