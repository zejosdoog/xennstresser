import type { Metadata } from "next";
import "./globals.css";
import { Inter, Sora } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "xennstresser.su",
  description: "xennstresser best stresser 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sora.variable}>
      <body className={`${inter.className} font-sora`}>
        {children}
      </body>
    </html>
  );
}
