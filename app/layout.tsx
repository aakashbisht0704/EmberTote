import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartProvider from "./components/Provider";
import ShoppingCartModel from "./components/ShoppingCartModel";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ember Tote",
  description: "Created by yours truly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar></Navbar>
          <ShoppingCartModel></ShoppingCartModel>
          {children}
        </CartProvider>
        <Footer></Footer>
        </body>
    </html>
  );
}
