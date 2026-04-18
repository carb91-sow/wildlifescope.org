import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

// SEO metadata optimized for Wildlife Conservation in Bangladesh
export const metadata: Metadata = {
  title: 'WildlifeScope | Wildlife Conservation & Species Protection',
  description:
    'Led by wildlife researchers, WildlifeScope is dedicated to protecting endangered species like the Bengal Slow Loris and preserving biodiversity in Bangladesh through field research.',
  keywords: [
    'wildlife conservation Bangladesh',
    'Bengal Slow Loris tracking',
    'endangered species research',
    'Pittachhara forest conservation',
    'wildlife rescue',
    'zoology research Bangladesh',
  ],
  authors: [{ name: 'Md. Rahenur Islam Sourov' }, { name: 'WildlifeScope' }],
  metadataBase: new URL('https://www.wildlifescope.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WildlifeScope - Editorial Stories from the Front Lines',
    description:
      'Join WildlifeScope in protecting endangered species and preserving biodiversity through scientific research and direct field action.',
    url: 'https://www.wildlifescope.org',
    siteName: 'WildlifeScope',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WildlifeScope Conservation Work',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WildlifeScope - Wildlife Conservation & Species Protection',
    description: 'Protecting endangered species through field research and community action.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Schema.org JSON-LD to fix the "No Schema Found" error
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'WildlifeScope',
    url: 'https://www.wildlifescope.org',
    logo: 'https://www.wildlifescope.org/icon-light-32x32.png',
    description: 'Professional wildlife conservation and research organization specializing in mammalian monitoring and spatial ecology.',
    founder: {
      '@type': 'Person',
      name: 'Md. Rahenur Islam Sourov',
      jobTitle: 'Wildlife Biologist',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chittagong',
      addressCountry: 'BD',
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
