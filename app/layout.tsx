import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from "@/app/(auth)/context/AuthContext";

import Header from "@/components/layout/header/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Survival Server',
  description: 'Survival Server Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider>

          <Header />

        {children}

      </Provider>
      </body>
    </html>
  )
}
