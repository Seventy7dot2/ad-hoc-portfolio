import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prasad Patra - Portfolio",
  description:
    "Hello! I'm Prasad Patra, a passionate programmer currently pursuing a BTech degree from NIT Rourkela and a BS degree from IIT Madras.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
