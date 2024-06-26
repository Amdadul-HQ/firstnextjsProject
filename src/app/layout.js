import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My First Next.js Project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main >
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
