import './globals.css'
import PromotionBanner from './components/PromotionBanner'
import Navbar from './components/NavBar';
import Footer from './components/Footer';

import { Titillium_Web } from 'next/font/google';
const titillium = Titillium_Web({
  subsets: ["latin"],
  weight:['200', '300', '400', '600', '700', '900'],
  style: ['italic', 'normal'],
  display:'swap',
});

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from 'next/script';
config.autoAddCss = false;

export const metadata = {
  title: 'Technica Automotive',
  description: 'Automotive Detailing, Ceramic Coating, Paint Correction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${titillium.className}`}>
      <body>
        <Navbar />
        <PromotionBanner />
        {children}
        <Footer />
      </body>
      <Script src="https://kit.fontawesome.com/01f54e04b1.js" />
    </html>
  )
}
