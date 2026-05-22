import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Eficiente Ventures",
  description: "Execution-led GCC market entry for innovation-led companies."
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
