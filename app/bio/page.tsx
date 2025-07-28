import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PERSONAL_INFO } from "@/constants";

export const metadata: Metadata = {
  title: "About Charinda Dissanayake | Senior Software Engineer Biography",
  description:
    "Learn about Charinda Dissanayake, a passionate Senior Software Engineer from Sri Lanka specializing in React, React Native, and full-stack development. Personal journey and professional values.",
  keywords:
    "Charinda Dissanayake bio, software engineer Sri Lanka, React developer about, personal story, career journey",
  openGraph: {
    title: "About Charinda Dissanayake - Software Engineer",
    description: "Personal journey and professional story of a Senior Software Engineer",
    url: "https://charinda04.github.io/bio",
  },
};

export default function BioPage() {
  return (
    <div className="min-h-screen bg-theme-bg flex flex-col page-transition">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 space-minimal-lg w-full">
        {/* Header */}
        <div className="text-center space-minimal animate-fade-in-up animate-stagger-1">
          <h1 className="text-theme-4xl font-semibold text-theme-text tracking-tight">About Me</h1>
          <p className="text-theme-base text-theme-text-secondary max-w-xl mx-auto leading-relaxed">
            Get to know the person behind the code - my journey, values, and what drives me to create meaningful digital
            experiences.
          </p>
        </div>

        {/* Personal Introduction */}
        <Card className="border-theme-border bg-theme-card-bg shadow-minimal animate-fade-in-up animate-stagger-2 hover-lift">
          <CardContent className="pt-6 space-minimal-sm">
            <h2 className="text-theme-2xl font-medium text-theme-text mb-4">Hello, I'm Charinda! 👋</h2>
            <div className="space-y-4 text-theme-sm text-theme-text-secondary leading-relaxed">
              <p>
                I'm a passionate software engineer from Sri Lanka with over 5 years of experience in building web and
                mobile applications. My journey started with a curiosity about how websites work, and it has evolved
                into a deep love for creating digital solutions that make a real difference in people's lives.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies. I believe that the best way to grow as a
                developer is to stay curious, keep learning, and give back to the community that has given me so much.
              </p>
              {/* <p>
                Living in the beautiful island of Sri Lanka gives me a unique
                perspective on global technology trends while staying connected
                to local community needs. I'm passionate about using technology
                to bridge gaps and create opportunities for everyone.
              </p> */}
            </div>
          </CardContent>
        </Card>

        {/* Personal Info */}
        <section className="space-minimal">
          <div className="text-center mb-8 animate-fade-in-up animate-stagger-3">
            <h2 className="text-theme-2xl font-semibold text-theme-text mb-2">Quick Facts</h2>
            <Separator className="w-12 mx-auto bg-theme-accent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-theme-border bg-theme-card-bg shadow-minimal animate-fade-in-up animate-stagger-4 hover-lift">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="text-theme-xl">🌍</div>
                <h3 className="text-theme-sm font-medium text-theme-text">Location</h3>
                <p className="text-theme-xs text-theme-text-secondary">{PERSONAL_INFO.location}</p>
              </CardContent>
            </Card>

            <Card className="border-theme-border bg-theme-card-bg shadow-minimal animate-fade-in-up animate-stagger-5 hover-lift">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="text-theme-xl">🎓</div>
                <h3 className="text-theme-sm font-medium text-theme-text">Education</h3>
                <p className="text-theme-xs text-theme-text-secondary">{PERSONAL_INFO.education}</p>
              </CardContent>
            </Card>

            <Card className="border-theme-border bg-theme-card-bg shadow-minimal animate-fade-in-up animate-stagger-6 hover-lift">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="text-theme-xl">🗣️</div>
                <h3 className="text-theme-sm font-medium text-theme-text">Languages</h3>
                <p className="text-theme-xs text-theme-text-secondary">{PERSONAL_INFO.languages.join(", ")}</p>
              </CardContent>
            </Card>

            <Card className="border-theme-border bg-theme-card-bg shadow-minimal animate-fade-in-up animate-stagger-6 hover-lift">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="text-theme-xl">🎯</div>
                <h3 className="text-theme-sm font-medium text-theme-text">Hobbies</h3>
                <p className="text-theme-xs text-theme-text-secondary">{PERSONAL_INFO.hobbies.join(", ")}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline */}
        {/* <BioSection /> */}

        {/* Values & Philosophy */}
        {/* <section className="space-minimal">
          <div className="text-center mb-8">
            <h2 className="text-theme-2xl font-semibold text-theme-text mb-2">Values & Philosophy</h2>
            <Separator className="w-12 mx-auto bg-theme-accent" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {VALUES_AND_PHILOSOPHY.map((value, index) => (
              <Card key={index} className="border-theme-border bg-theme-card-bg shadow-minimal">
                <CardContent className="pt-6">
                  <h3 className="text-theme-lg font-medium text-theme-text mb-3">{value.title}</h3>
                  <p className="text-theme-sm text-theme-text-secondary leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}

        {/* Interests */}
        {/* <section className="space-minimal">
          <div className="text-center mb-8">
            <h2 className="text-theme-2xl font-semibold text-theme-text mb-2">Current Interests</h2>
            <Separator className="w-12 mx-auto bg-theme-accent" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {INTERESTS.map((interest, index) => (
              <Card key={index} className="border-theme-border bg-theme-card-bg shadow-minimal">
                <CardContent className="pt-6">
                  <h3 className="text-theme-lg font-medium text-theme-text mb-4">{interest.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {interest.items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="bg-theme-accent/10 text-theme-accent border-theme-accent/20 hover:bg-theme-accent/20"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
