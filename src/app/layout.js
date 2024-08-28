import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js project",
  description: "The final project for the next js course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="content">
          <Header />
          <div className="main">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
