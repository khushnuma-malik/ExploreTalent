import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Footer from './Component/Footer'
import Header from './Component/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <body  className= 'bg-white'  >
      <Header /> 
      <div className='whatsapp'>
      <a href=' https://wa.me/919027436118 '> <img src='https://pngimg.com/d/whatsapp_PNG1.png '/></a></div>
      <div className='scroll'>
       <Link href={" / "}> <img src='https://ps.w.org/scrollup-master/assets/icon-256x256.png?rev=1058878  '/></Link></div>
    
        {children}
        <Footer/>
      </body>
    </html>
  )
}
