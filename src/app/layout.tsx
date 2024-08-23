import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { cn } from "@/lib/utils";
import Footer from "../components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavigationBar from "@/components/navbar/NavigationBar";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NetChat",
  description: "NetChat - Chat with any website instantly using AI-powered models. Get quick responses, navigate websites seamlessly, and enhance your browsing experience with intelligent assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={cn(inter.className, "min-h-screen antialiased")}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
      <Providers>
      <NavigationBar/>
        <div className="flex h-screen flex-col">
        {children}
        </div>
        <Footer/>
      </Providers>
      </ThemeProvider>
    </body>
  </html>
  );
}
