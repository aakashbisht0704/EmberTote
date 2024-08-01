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

    // <div className="bg-slate-700 bottom-auto">
    //     <footer className="flex flex-wrap justify-between">
    //     <div>
    //         <h4>Contact</h4>
    //         <p><strong>Address: </strong>XYZ ROAD, STREET NO. 123, ABCDisco</p>
    //         <p><strong>Phone: </strong>+91 88XX5231XX</p>
    //         <p><strong>Hours: </strong>10:00 - 18:00, Mon - Fri</p>
    //         <div>
    //         </div>
    //     </div>
    //     <div className="p-50 mb-20">
    //         <h4>About</h4>
    //         <a href="about.html">About Us</a>
    //         <a href="#">Delivery Information</a>
    //         <a href="#">Privacy Policy</a>
    //         <a href="#">Terms & Conditions</a>
    //         <a href="#">Contact Us</a>
    //     </div>
    //     <div>
    //         <h4>My Account</h4>
    //         <Link href="/terms&condition">Terms & Conditions</Link>
    //         <Link href="/policy/privacy-policy">Privacy Policy</Link>
    //         <Link href="/policy/shipping-policy">Shipping Policy</Link>
    //         <Link href="/policy/return-policy">Return Policy</Link>
    //     </div>
    //     <div>
    //         <h4>Install App</h4>
    //         <p>From App Store or Google Play Store</p>
    //         <div>
                
    //         </div>
    //         <p>Secured Payment Gateways</p>
        
    //     </div>

    //     <div>
    //         <p>Ember Tote &copy; {new Date().getFullYear()}</p>
    //     </div>
    // </footer>
    // </div>