// Efficient icon registry to avoid importing all icons at once
import type { ComponentType } from "react";

// Lazy load icons to improve bundle splitting
const iconComponents: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
  GitHubIcon: () => import("@/assets/icons/GitHubIcon"),
  LinkedInIcon: () => import("@/assets/icons/LinkedInIcon"), 
  TwitterIcon: () => import("@/assets/icons/TwitterIcon"),
  InstagramIcon: () => import("@/assets/icons/InstagramIcon"),
  BlueSkyIcon: () => import("@/assets/icons/BlueSkyIcon"),
  FacebookIcon: () => import("@/assets/icons/FacebookIcon"),
  ThreadsIcon: () => import("@/assets/icons/ThreadsIcon"),
  SunIcon: () => import("@/assets/icons/SunIcon"),
  MoonIcon: () => import("@/assets/icons/MoonIcon"),
  MenuIcon: () => import("@/assets/icons/MenuIcon"),
  CloseIcon: () => import("@/assets/icons/CloseIcon"),
};

// Cache for loaded icons
const iconCache = new Map<string, ComponentType<any>>();

export async function getIcon(iconName: string): Promise<ComponentType<any> | null> {
  // Return from cache if already loaded
  if (iconCache.has(iconName)) {
    return iconCache.get(iconName)!;
  }

  // Load icon dynamically
  const iconLoader = iconComponents[iconName];
  if (!iconLoader) {
    console.warn(`Icon "${iconName}" not found in registry`);
    return null;
  }

  try {
    const module = await iconLoader();
    const IconComponent = module.default;
    iconCache.set(iconName, IconComponent);
    return IconComponent;
  } catch (error) {
    console.error(`Failed to load icon "${iconName}":`, error);
    return null;
  }
}

export function preloadIcons(iconNames: string[]): Promise<void[]> {
  return Promise.all(
    iconNames.map(async (iconName) => {
      try {
        await getIcon(iconName);
      } catch (error) {
        console.error(`Failed to preload icon "${iconName}":`, error);
      }
    })
  );
}