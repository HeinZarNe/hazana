import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PageFooter } from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Hazana",
  description: "An mock ecommerce website(frontend only)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full bg-gray-100`}
      >
        <Navbar />
        <div className="w-full max-w-screen-xl mx-auto">{children}</div>
        <PageFooter />
      </body>
    </html>
  );
}
