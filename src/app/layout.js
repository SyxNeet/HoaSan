import { Suspense } from 'react'
import './globals.css'
import Navbar from '@/components/Common/Navbar'
import Footer from '@/components/Common/Footer'
import '../scss/main.scss'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <Suspense>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
