import {
  BioSection,
  Footer,
  Header,
  ProfileSection,
  WorkSection,
} from "@/components";

export default function Home() {
  return (
    <div className="font-sans min-h-screen transition-colors duration-300 bg-theme-bg">
      <Header />

      <main className="flex flex-col items-center px-8 py-16">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
          <ProfileSection />
        </div>

        <div id="work">
          <WorkSection />
        </div>
        <div id="bio">
          <BioSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
