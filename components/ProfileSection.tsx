"use client";

import Image from "next/image";
import { PERSONAL_INFO } from "@/constants";

export const ProfileSection = () => {
  return (
    <div className="w-full max-w-xl mx-auto space-minimal-lg">
      {/* Profile Picture and Name */}
      <div className="text-center space-minimal">
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 border-2 border-theme-border shadow-minimal rounded-full overflow-hidden bg-theme-accent">
            <Image
              src="/assets/images/profile.jpg"
              alt={`${PERSONAL_INFO.name} profile picture`}
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-theme-3xl text-theme-text tracking-tight">
            {PERSONAL_INFO.name}
          </h1>

          <p className="text-theme-lg text-theme-text-secondary">
            {PERSONAL_INFO.title}
          </p>
        </div>
      </div>

      {/* Intro Text Card */}
      <div className="border-theme-border bg-theme-card-bg shadow-minimal border rounded-xl p-6">
        <p className="text-center leading-relaxed text-theme-base text-theme-text">
          {PERSONAL_INFO.intro}
        </p>
      </div>
    </div>
  );
};
