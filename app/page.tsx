import { Footer, Header, ProfileSection } from "@/components";

export default function Home() {
  return (
    <div className="font-sans min-h-screen transition-colors duration-300 bg-theme-bg flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center px-8 py-16">
        <div className="flex flex-col items-center justify-center flex-1">
          <ProfileSection />
        </div>

        {/* <div id="work">
          <WorkSection />
        </div>
        <div id="bio">
          <BioSection />
        </div> */}
      </main>

      <Footer />
    </div>
  );
}
