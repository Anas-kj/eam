import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ActiveSectionProvider } from './components/Experience/active-section-provider';
import { ThemeProvider } from './components/Experience/theme-provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EAM | environmental assessment & management",
  description: "EAM is a consulting firm that provides environmental assessment and management services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveSectionProvider>
          <Nav/>
            {children}
          <Footer/>
        </ActiveSectionProvider>
        
      </body>
    </html>
  );
}
