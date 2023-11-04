import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from "@/app/(auth)/context/AuthContext";
import { ThemeProvider } from "./theme-provider";

import Header from "@/components/layout/header/Header";

const inter = Inter({ subsets: ['latin'] })

import notesLogo from "@/assets/img/notes2.png";
import { Analytics } from '@vercel/analytics/react';
import {ThemeSwitcher} from "@/components/layout/header/ThemeSwitcher";
import React, {useEffect} from "react";
import Script from 'next/script';
import Cursor from "@/components/layout/wrap/Cursor";

export const metadata: Metadata = {
    title: 'Survival Server',
    description: 'Survival Server Website',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    // @ts-ignore

    return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 dark:bg-[#0d1117]`}>
      {/*<Cursor />*/}

      <Provider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>

          <Header />

        {children}
          </ThemeProvider>

      </Provider>
      <Analytics mode={"production"} />

      </body>
    </html>
  )
}
