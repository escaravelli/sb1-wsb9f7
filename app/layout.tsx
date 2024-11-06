import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { DockMenu } from "@/components/dock-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://elvio.com.br'),
  title: {
    default: "Elvio Scaravelli - Desenvolvimento Web Profissional",
    template: "%s | Elvio Scaravelli"
  },
  description: "Soluções profissionais em desenvolvimento web, hospedagem e tecnologia. Parceiro oficial de grandes empresas do setor.",
  keywords: ["desenvolvimento web", "hospedagem", "sites", "tecnologia", "Elvio Scaravelli", "web development", "cloud hosting"],
  authors: [{ name: "Elvio Scaravelli", url: "https://elvio.com.br" }],
  creator: "Elvio Scaravelli",
  publisher: "Elvio Scaravelli",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://elvio.com.br",
    siteName: "Elvio Scaravelli",
    title: "Elvio Scaravelli - Desenvolvimento Web Profissional",
    description: "Soluções profissionais em desenvolvimento web, hospedagem e tecnologia",
    images: [{
      url: "https://elvio.com.br/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Elvio Scaravelli"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvio Scaravelli - Desenvolvimento Web Profissional",
    description: "Soluções profissionais em desenvolvimento web, hospedagem e tecnologia",
    creator: "@elviosites",
    images: ["https://elvio.com.br/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    other: {
      "msvalidate.01": "your-bing-verification",
    }
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="flex-1 container mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            {children}
          </main>
          <div className="pb-24 sm:pb-28"> {/* Add padding to prevent dock overlap */}
            <footer className="border-t py-4 sm:py-6 lg:py-8">
              <div className="container flex flex-col items-center gap-4 text-center px-4">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Elvio Scaravelli. Todos os direitos reservados.
                </p>
              </div>
            </footer>
          </div>
          <WhatsAppButton />
          <DockMenu />
        </ThemeProvider>
      </body>
    </html>
  );
}