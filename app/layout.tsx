import './globals.css'
import localFont from 'next/font/local'
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
    <html lang="en" className={`${eina01.variable} font-sans text-white bg-black`}>
      <body>{children}</body>
    </html>
  )
}
