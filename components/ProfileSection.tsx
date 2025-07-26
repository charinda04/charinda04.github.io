"use client";

export const ProfileSection = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      {/* Profile Picture and Name */}
      <div className="text-center mb-8">
        <div className="relative inline-block mb-6">
          <img
            src="/profile.jpg"
            alt="Charinda Dissanayake"
            className="w-32 h-32 rounded-full object-cover border-4 border-theme-accent shadow-lg"
          />
        </div>
        
        <h1 className="font-bold mb-2 text-theme-3xl text-theme-text">
          Charinda Dissanayake
        </h1>
        
        <h2 className="font-medium text-theme-xl text-theme-text-accent">
          Software Engineer ( Web / Mobile )
        </h2>
      </div>

      {/* Intro Text Box */}
      <div className="rounded-xl p-6 text-center shadow-lg border border-theme-card-border bg-theme-card-bg">
        <p className="leading-relaxed text-theme-lg text-theme-text">
          Hello, I'm a mobile app developer based in Sri Lanka!
        </p>
      </div>
    </div>
  );
};