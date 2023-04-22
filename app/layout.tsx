import './globals.css'
import PromotionBanner from './components/PromotionBanner'
import Navbar from './components/NavBar';
import Footer from './components/Footer';

import localFont from 'next/font/local';
const eina01 = localFont({
  src: [
    {
      path: '../assets/fonts/Eina01-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Eina01-Light.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../assets/fonts/Eina01-SemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../assets/fonts/Eina01-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-eina01',
})

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
    <html lang="en" className={`${eina01.variable} font-sans `}>
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
