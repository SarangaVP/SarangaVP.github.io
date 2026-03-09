import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saranga Malshan - Portfolio",
  description: "Electrical Engineering undergraduate passionate about software development, machine learning, and building intelligent systems. Experienced in full-stack development and AI applications.",
  keywords: ["Saranga Malshan", "Electrical Engineering", "Software Engineer", "Machine Learning", "Full Stack Developer", "University of Moratuwa"],
  authors: [{ name: "Saranga Malshan" }],
  creator: "Saranga Malshan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarangavp.github.io",
    title: "Saranga Malshan | Portfolio",
    description: "Electrical Engineering undergraduate passionate about software development and machine learning",
    siteName: "Saranga Malshan Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}