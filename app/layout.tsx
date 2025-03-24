import type { Metadata } from "next";
import NavigationBar from "@/components/NavigationBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jimmy's Portfolio Site",
  description: "React Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
