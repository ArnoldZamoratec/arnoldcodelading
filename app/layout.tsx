import type { Metadata } from "next";
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
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arnoldcode.dev"),
  title: {
    default: "ARNOLDCODE | Arquitectura y liderazgo técnico",
    template: "%s | ARNOLDCODE",
  },
  description:
    "Revisión de arquitectura y código, modernización incremental y liderazgo técnico para productos de software en producción.",
  openGraph: {
    title: "ARNOLDCODE | Arquitectura y liderazgo técnico",
    description:
      "Revisión de código y arquitectura para localizar qué frena un cambio en productos de software en producción.",
    url: "https://arnoldcode.dev",
    siteName: "ARNOLDCODE",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "ARNOLDCODE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARNOLDCODE",
    description: "Ingeniería de software y arquitectura para productos en producción.",
  },
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "ARNOLDCODE",
              url: "https://arnoldcode.dev",
              description:
                "Revisión de arquitectura y código, modernización incremental y liderazgo técnico para productos de software en producción.",
              serviceType: [
                "Arquitectura de software",
                "Auditoría técnica",
                "Modernización de software",
                "Liderazgo técnico fractional",
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
