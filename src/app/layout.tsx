import { Suspense } from 'react'
import type { Metadata, Viewport } from 'next'
import { Raleway, Plus_Jakarta_Sans } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { cn } from '@/lib/utils'
import './globals.css'

import Provider from './provider'

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta-sans' })

export const metadata: Metadata = {
  title: {
    template: '%s | Bluewaterlab',
    default: 'Bluewaterlab',
  },
  description: 'Wastewater and Clean Water Treatment Technology Partners',
}

export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(raleway.variable, raleway.className, plusJakartaSans.variable, plusJakartaSans.className, 'font-plusJakartaSans antialiased')}
      >
        <Suspense
          fallback={
            <div className='flex h-screen w-full flex-col items-center justify-center gap-2 text-center'>
              <p>Loading ...</p>
              <p>(Please refresh page if it's taking too long)</p>
            </div>
          }
        >
          <Provider>
            <NextTopLoader /> {/* Loading progress bar on top of page */}
            {children}
          </Provider>
        </Suspense>
      </body>
    </html>
  )
}
