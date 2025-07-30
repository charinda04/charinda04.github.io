"use client";

import Image from "next/image";
import { PERSONAL_INFO } from "@/constants";

export const ProfileSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-minimal-lg">
      {/* Profile Picture and Info Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="flex-shrink-0">
          <div className="w-52 h-52 border-2 border-theme-border shadow-minimal rounded-full overflow-hidden bg-theme-accent">
            <Image
              src="/assets/images/profile.jpg"
              alt={`${PERSONAL_INFO.name} profile picture`}
              width={128}
              height={128}
              className="w-full h-full object-cover brightness-85"
              priority
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-2">
          <h1 className="font-semibold text-theme-2xl sm:text-theme-3xl text-theme-text tracking-tight">{PERSONAL_INFO.name}</h1>
          <p className="text-theme-base sm:text-theme-lg text-theme-text-secondary sm:whitespace-nowrap">{PERSONAL_INFO.title}</p>
        </div>
      </div>

      {/* Intro Text Card */}
      <div className="border-theme-border bg-theme-card-bg shadow-minimal border rounded-xl p-6">
        <p className="text-center leading-relaxed text-theme-base text-theme-text">{PERSONAL_INFO.intro}</p>
      </div>
    </div>
  );
};
