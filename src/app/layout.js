import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "./globals.css"; // Global styles
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
        <Header />
        <main className="container mt-4">
          <div className="main">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
