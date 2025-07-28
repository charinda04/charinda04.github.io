import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export const SEOHead = ({
  title = "Charinda Dissanayake - Senior Software Engineer | React & React Native Expert",
  description = "Charinda Dissanayake is a Senior Software Engineer specializing in React, React Native, and full-stack development. Expert in frontend engineering with 8+ years of experience.",
  keywords = "Charinda, Charinda Dissanayake, React, React Native, Frontend Engineer, Fullstack Engineer, Senior Software Engineer",
  canonicalUrl = "https://charinda04.github.io",
  ogImage = "/assets/images/profile.jpg"
}: SEOHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Charinda Dissanayake" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@Charinda_D" />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Head>
  );
};