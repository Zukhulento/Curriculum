import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Luis Matus',
  description: 'Perfil profesional de Luis Matus, Resumen',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className='w-screen h-8 bg-background text-text1 flex '>
        <ul className='flex flex-row gap-4 m-auto'>
          <li className=''>
            <a href='#who'>Who am I</a>
          </li>
          <li className=''>
            <a href='#projects'>Projects</a>
          </li>
          <li className=''>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>{children}</body>
    </html>
  )
}
