import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DM_Sans, Geist_Mono, Sora } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  // Only used for small step numbers; not worth competing with critical fonts.
  preload: false,
});

const siteUrl = "https://arnoldcode.dev";
const siteDescription =
  "Revisión de arquitectura y código, modernización incremental y liderazgo técnico para productos de software en producción.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ARNOLDCODE | Arquitectura y liderazgo técnico",
    template: "%s | ARNOLDCODE",
  },
  description: siteDescription,
  applicationName: "ARNOLDCODE",
  authors: [{ name: "Arnold Huaman", url: `${siteUrl}/sobre-mi` }],
  creator: "Arnold Huaman",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: "ARNOLDCODE | Arquitectura y liderazgo técnico",
    description:
      "Revisión de código y arquitectura para localizar qué frena un cambio en productos de software en producción.",
    url: siteUrl,
    siteName: "ARNOLDCODE",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARNOLDCODE | Arquitectura y liderazgo técnico",
    description: "Ingeniería de software y arquitectura para productos en producción.",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf5",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "ARNOLDCODE",
      inLanguage: "es",
      publisher: { "@id": `${siteUrl}/#service` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#arnold`,
      name: "Arnold Huaman",
      jobTitle: "Consultor de ingeniería de software",
      url: `${siteUrl}/sobre-mi`,
      image: `${siteUrl}/arnold-profile.jpg`,
      worksFor: { "@id": `${siteUrl}/#service` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "ARNOLDCODE",
      url: siteUrl,
      logo: `${siteUrl}/arnoldcode-logo.png`,
      image: `${siteUrl}/opengraph-image`,
      description: siteDescription,
      founder: { "@id": `${siteUrl}/#arnold` },
      areaServed: "Worldwide",
      knowsLanguage: ["es", "en"],
      serviceType: [
        "Arquitectura de software",
        "Auditoría técnica",
        "Modernización de software",
        "Liderazgo técnico fractional",
      ],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} ${sora.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f8f6ef] text-[#202720]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        {/* The analytics scripts are served by Vercel; elsewhere they would 404. */}
        {process.env.VERCEL ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}
