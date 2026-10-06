import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ruang Biru — Catatan pribadi Nara",
    template: "%s | Ruang Biru",
  },
  description:
    "Catatan pribadi tentang ide, cerita sehari-hari, dan hal-hal baru yang sedang dipelajari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
