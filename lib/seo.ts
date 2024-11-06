export interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
  author?: string;
  canonicalUrl?: string;
}

export function generateSEOMetadata({
  title,
  description,
  ogImage,
  noIndex,
  keywords,
  author,
  canonicalUrl,
}: SEOProps) {
  return {
    title,
    description,
    keywords: keywords?.join(", "),
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : undefined,
      type: "website",
      siteName: "WordPress Next.js Integration",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}