import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PrototypeBadge } from "@/components/ui/PrototypeBadge";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Aspire Software Consultancy | Enterprise AI & Software Engineering",
  description:
    "Top-rated enterprise software consultancy offering AI automation, Salesforce CRM customization, MS Dynamics 365, and custom web/mobile development.",
  keywords: [
    "Software Development Company",
    "Enterprise AI Consulting",
    "Salesforce Development Partner",
    "Microsoft Dynamics 365",
    "Custom Web Applications",
    "Mobile App Development",
    "Aspire Software Consultancy",
  ],
  authors: [{ name: "Aspire Software Consultancy" }],
  openGraph: {
    title: "Aspire Software Consultancy | Enterprise AI & Software Engineering",
    description:
      "Transforming business operations through intelligent AI automation, enterprise CRM, and custom software systems.",
    url: "https://aspiresoftwareconsultancy.com/",
    siteName: "Aspire Software Consultancy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspire Software Consultancy | Enterprise Software Partner",
    description:
      "Enterprise technology consultancy delivering high-impact AI automation, Salesforce CRM, and software engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    url: "https://aspiresoftwareconsultancy.com/",
    logo: "https://aspiresoftwareconsultancy.com/wp-content/uploads/2023/07/Logo.png",
    description: COMPANY_INFO.subheadline,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "237 Kearny Street, Suite #9310",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        postalCode: "94108",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "#5, 1st Cross, Industrial Area, N.S. Palya Road",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560076",
        addressCountry: "IN",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_INFO.usPhone,
      contactType: "customer service",
      email: COMPANY_INFO.primaryEmail,
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-signal-blue-500 selection:text-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <PrototypeBadge show={true} />
      </body>
    </html>
  );
}
