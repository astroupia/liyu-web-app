import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/footer";

<<<<<<< HEAD
const inter = Inter({ subsets: ["latin"] });
=======
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});
>>>>>>> 9396655261c747d6815c32b0935fe41fd110090b

export const metadata: Metadata = {
  title: "Liyu Catering",
  description: "Exceptional catering services for all occasions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
