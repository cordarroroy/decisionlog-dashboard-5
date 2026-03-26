import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DecisionLog — Stop losing decisions to Slack history",
  description: "Decision logging + search for dev teams. Slack-native, zero friction.",
  metadataBase: new URL("https://decisionslog.space"),
  openGraph: {
    title: "DecisionLog — Stop losing decisions to Slack history",
    description: "Decision logging + search for dev teams. Slack-native, zero friction.",
    url: "https://decisionslog.space",
    siteName: "DecisionLog",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Figtree:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
