import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "WildlifeScope | Wildlife Conservation in Bangladesh, Biodiversity Research and Species Awareness",
  description:
    "WildlifeScope is a Bangladesh-based conservation platform focused on wildlife conservation, biodiversity protection, species awareness, ecological research, environmental education, and science-based storytelling.",
  keywords: [
    "wildlife conservation Bangladesh",
    "biodiversity Bangladesh",
    "endangered animals in Bangladesh",
    "species of Bangladesh",
    "wildlife research Bangladesh",
    "ecology Bangladesh",
    "conservation awareness Bangladesh",
    "environmental education Bangladesh",
    "human wildlife conflict Bangladesh",
    "Bangladesh biodiversity",
  ],
  alternates: {
    canonical: "https://www.wildlifescope.org",
  },
  openGraph: {
    title:
      "WildlifeScope | Wildlife Conservation in Bangladesh, Biodiversity Research and Species Awareness",
    description:
      "Explore wildlife conservation in Bangladesh through research, storytelling, species awareness, and biodiversity protection.",
    url: "https://www.wildlifescope.org",
    siteName: "WildlifeScope",
    images: [
      {
        url: "https://www.wildlifescope.org/images/hero-field-research.jpg",
        width: 1600,
        height: 900,
        alt: "WildlifeScope field research team in Bangladesh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WildlifeScope | Wildlife Conservation in Bangladesh, Biodiversity Research and Species Awareness",
    description:
      "A conservation platform focused on biodiversity protection, wildlife research, and species awareness in Bangladesh.",
    images: ["https://www.wildlifescope.org/images/hero-field-research.jpg"],
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WildlifeScope",
  url: "https://www.wildlifescope.org",
  logo: "https://www.wildlifescope.org/images/logo.png",
  description:
    "WildlifeScope is a Bangladesh-based conservation platform focused on wildlife conservation, biodiversity protection, species awareness, environmental education, and science-based storytelling.",
  sameAs: [
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://www.linkedin.com/",
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WildlifeScope",
  url: "https://www.wildlifescope.org",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.wildlifescope.org/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomePageClient />
    </>
  )
}
