import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Evaluador Holístico",
  description: "BG - Hackaton 2025 G07",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${prompt.className} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
