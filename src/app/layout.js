import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '../context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: "Aishwarya Parab",
  description: "Welcome to my portfolio website! I'm Aishwarya Parab, and I'm thrilled to share my creative journey and professional accomplishments with you. Within these virtual pages, you'll find a carefully curated collection that showcases my passion, skills, and artistic vision."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
