import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from "@/app/(auth)/context/AuthContext";

import Header from "@/components/layout/header/Header";

const inter = Inter({ subsets: ['latin'] })

import notesLogo from "@/assets/img/notes2.png";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
    title: 'Survival Server',
    description: 'Survival Server Website',
    // discord embed
    openGraph: {
        type: 'website',
        url: 'https://survivalserver.vercel.app/',
        title: 'Survival Server',
        description: 'Survival Server Website',
        images: [
            {
                url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png",
                width: 800,
                height: 600,
                alt: 'Survival Server',
            },
        ],
    },
    authors: [
        {
            name: 'Survival server',
            url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png",
        }
    ],
    themeColor: "#000000",

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
          <Analytics />

      </Provider>
      </body>
    </html>
  )
}
