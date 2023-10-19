import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navigation from '@/components/navigation'
import Features from '@/components/features'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chub',
  description: 'CoolmixHub - A place for cool mixes and cool people to share your thoughts and ideas.', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("bg-black", inter.className)}>
        <div className="text-white w-full h-full flex relative justify-center items-center">
          <div className="max-w-screen-xl w-full h-full flex relative">
            <Navigation />
            {children}
            <Features />
          </div>
        </div>
      </body>
    </html>
  )
}
