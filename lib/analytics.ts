// Google Analytics utility functions

// Proper types for Google Analytics
interface GtagConfig {
  page_title?: string;
  page_location?: string;
  page_path?: string;
  custom_map?: Record<string, string>;
}

interface GtagEvent {
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameter?: string;
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: GtagConfig | GtagEvent
    ) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track page views
export const trackPageView = (url: string, title: string): void => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined' && GA_ID) {
    window.gtag('config', GA_ID, {
      page_title: title,
      page_location: url,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: GtagEvent): void => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined' && GA_ID) {
    window.gtag('event', eventName, parameters);
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || window.location.pathname,
  });
};

// Track download events
export const trackDownload = (fileName: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    location: window.location.pathname,
  });
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText,
    location: window.location.pathname,
  });
};