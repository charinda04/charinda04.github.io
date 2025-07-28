import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProfileSection } from "../components/ProfileSection";

export default function Home() {
  console.log(Footer);
  return (
    <div className="min-h-screen bg-theme-bg flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        {/* <div className="flex items-center justify-center mb-16"> */}
        <ProfileSection />
        {/* </div> */}
      </main>

      <Footer />
    </div>
  );
}
