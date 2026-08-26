import type { Metadata } from "next";
import "./globals.css";
import DarkModeToggle from "@/components/DarkModeToggle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shinobi",
  description: "Modern design system with custom themes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="flex justify-between items-center p-4 bg-surface border-b border-border">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-semibold m-0">
              Shinobi
            </h1>
            <nav className="flex gap-6">
              <Link href="/blog" className="text-foreground hover:text-accent transition-colors underline">
                Blog
              </Link>
              <Link href="/preview" className="text-foreground hover:text-accent transition-colors underline">
                Preview
              </Link>
              <Link href="/about" className="text-foreground hover:text-accent transition-colors underline">
                About
              </Link>
            </nav>
          </div>
          <DarkModeToggle />
        </header>
        {children}
      </body>
    </html>
  );
}
