'use client'
import "styles/globals.css";
import { ReactNode } from "react";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface IProps {
   children: ReactNode;
}
export default function RootLayout({ children }: IProps) {
   return (
      <html lang="en">
         <body>
            <Providers>
               <Navbar />
               <div>{children}</div>
               <Footer />

            </Providers>
         </body>
      </html>
   );
}