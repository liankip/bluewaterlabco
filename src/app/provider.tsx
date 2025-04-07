/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { createContext, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FaCircleInfo } from 'react-icons/fa6'
import { useToast } from '@/components/ui/use-toast'
import { ToastProps } from '@/components/schema'
import { cn } from '@/lib/utils'

import Header from './components/Header'
import Footer from './components/Footer'

export const Context = createContext<any>(null)

export default function Provider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { toast } = useToast()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isClient, setIsClient] = useState<boolean>(false)
  const [screenWidth, setScreenWidth] = useState<number>(1280)

  function showToast({ description, className = '' }: ToastProps) {
    toast({
      description: (
        <div className='flex items-center gap-2 font-semibold'>
          <FaCircleInfo />
          {description}
        </div>
      ),
      className: cn('bg-blue-100 w-auto', className),
    })
  }

  /** Prevent error 'window is undefined' */
  useEffect(() => {
    if (!isClient) setIsClient(true)
    else setScreenWidth(window.innerWidth)
  }, [isClient])

  const context: any = {
    // Routing
    router,
    pathname,
    searchParams,

    // General State
    isLoading,
    setIsLoading,
    screenWidth,
    showToast,
  }

  return (
    <Context.Provider value={context}>
      <div className='relative max-w-[1920px] mx-auto flex flex-col'>
        <Header />
        {children}
        <Footer />
      </div>
    </Context.Provider>
  )
}
