
import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Script from 'next/script'
import Head from 'next/head'




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ghosthippo Store | Handmade Decorataive Products and Celebration Favors ',
  keywords: ['Etsy shop','store portfolio','Seasonal Decoration','home decoration','candle holders','christmas','halloween','easter','party favors','xmas','holiday','gift for him','gift for her','gift for mom','gift for daddy','housewarming gifts','Incense burners', 'Backflow', 'Incense Holder','Home Decor','Plaster of Paris','Silicone Mold','Gnome','gift'],
  description: 'Ghosthippo is an Etsy shop which is focused on handmade home decoration,Seasonal decoration as christmas,halloween,easter etc. incense burners,candle holders,celebration favors.',
  other: { domain_verify: "8f283871f5b376d7506f63b97bbb5103" },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 
    <html lang="en">
     



      <body className="w-full h-screen   bg-blue-600 justify-center relative ">
     
   
 
      <Header/>
     
 {children}
 
 <Footer/>
 
        </body>
    </html>
  )
}
