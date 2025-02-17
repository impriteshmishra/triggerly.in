import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Triggerly | AI-Powered Marketing Automation",
  description: "Triggerly | AI-Powered Marketing Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
