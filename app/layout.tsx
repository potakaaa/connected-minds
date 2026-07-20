import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.connectedmindpsychology.com.au"),
  title: "Charu Mangla Goel | Psychologist in Viewbank & Doncaster",
  description: "Warm, trauma-informed psychotherapy with Charu Mangla Goel for adolescents, adults and elders. In-person in Viewbank and Doncaster, or online.",
  keywords: ["psychologist Viewbank", "psychologist Doncaster", "psychotherapy Melbourne", "trauma therapy", "EMDR", "Connected Mind Psychology"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Connected Mind Psychology | Charu Mangla Goel",
    description: "Psychotherapy for healing the mind, body & spirit.",
    type: "website",
    locale: "en_AU",
    url: "/",
    images: [{ url: "/og.png", width: 1732, height: 908, alt: "Connected Mind Psychology — Psychotherapy for healing the mind, body and spirit" }],
  },
  twitter: { card: "summary_large_image", title: "Connected Mind Psychology", description: "Psychotherapy for healing the mind, body & spirit.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body>{children}</body></html>;
}
