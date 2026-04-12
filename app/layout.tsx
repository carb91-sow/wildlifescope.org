export const metadata = {
  title: "WildlifeScope - Wildlife Conservation & Species Protection",
  description:
    "WildlifeScope is dedicated to protecting endangered species, preserving biodiversity, and promoting wildlife conservation worldwide.",
  keywords: [
    "wildlife conservation",
    "endangered species",
    "biodiversity",
    "nature protection",
    "wildlife foundation",
    "environment protection",
  ],
  authors: [{ name: "WildlifeScope" }],
  openGraph: {
    title: "WildlifeScope - Protecting Our Natural World",
    description:
      "Join WildlifeScope in protecting endangered species and preserving biodiversity.",
    url: "https://wildlifescope.org",
    siteName: "WildlifeScope",
    images: [
      {
        url: "https://wildlifescope.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WildlifeScope",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export const metadata = {
  title: "WildlifeScope - Wildlife Conservation & Species Protection",
  description:
    "WildlifeScope is dedicated to protecting endangered species and preserving biodiversity.",
  keywords: [
    "wildlife conservation",
    "endangered species",
    "nature protection",
    "biodiversity",
  ],
export const metadata = {
  title: "WildlifeScope - Wildlife Conservation & Species Protection",
  description:
    "WildlifeScope is dedicated to protecting endangered species and preserving biodiversity through conservation efforts, education, and action.",
};
};import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'WildlifeScope | Protecting Our Natural World',
  description: 'WildlifeScope is dedicated to wildlife conservation, protecting endangered species and their habitats through sustainable initiatives and community engagement.',
  generator: 'v0.app',
  keywords: ['wildlife conservation', 'endangered species', 'habitat protection', 'nature preservation'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
