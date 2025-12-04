import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Oswald, Inter } from "next/font/google"
import SmoothScroll from "@/components/smooth-scroll"
import "./globals.css"

const oswald = Oswald({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
})

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Elite Motorsports Academy | Professional Motocross Training Programs",
  description:
    "Premium motocross training academy offering beginner to elite racing programs. Learn from professional instructors with 15+ years of experience. 98% success rate.",
  keywords:
    "motocross training, racing academy, professional coaching, motorsports education, beginner motocross, competitive racing",
  generator: "v0.app",
  authors: [{ name: "Elite Motorsports Academy" }],
  category: "Sports Training",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elite-motorsports-academy.com",
    siteName: "Elite Motorsports Academy",
    title: "Elite Motorsports Academy | Professional Motocross Training",
    description:
      "Master motocross with our elite training programs. Join 500+ trained riders achieving their racing dreams.",
    images: [
      {
        url: "/high-speed-motocross-action-racing.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Motorsports Racing Action",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Motorsports Academy",
    description: "Professional motocross training programs",
    images: ["/high-speed-motocross-action-racing.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://elite-motorsports-academy.com",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Elite Motorsports Academy",
              description: "Professional motocross training academy",
              url: "https://elite-motorsports-academy.com",
              telephone: "+1-555-ACADEMY",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Racing Track Road",
                addressLocality: "Race City",
                postalCode: "12345",
                addressCountry: "US",
              },
              image: "/high-speed-motocross-action-racing.jpg",
              ratingValue: "4.9",
              ratingCount: "127",
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased ${oswald.variable} ${inter.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
