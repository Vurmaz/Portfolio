import './globals.css'
import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani ({ 
  subsets: ['latin'],
  weight:['400'], 
})

export const metadata = {
  title: 'Sadık Vurmaz',
  description: 'Sadık Vurmaz"s Personal portfolio',
  icons:{
    icon:'/favicon.png',
    apple:'/apple-icon.png',
    favicon:'/favicon.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={rajdhani.className}>{children}</body>
    </html>
  )
}
