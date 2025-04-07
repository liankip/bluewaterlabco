import { useContext, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Context } from '../provider'
import { cn } from '@/lib/utils'

const HEADER_LINKS = [
  { title: 'About Us', url: '/about-us' },
  { title: 'Product', url: '/product' },
  { title: 'Case Study', url: '/case-study' },
  { title: 'Contact Us', url: '/contact-us' },
]

export default function Header() {
  const { pathname } = useContext<any>(Context)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='absolute left-0 top-0 z-50 w-full'>
      <div
        className={cn(
          'relative flex w-full items-center justify-between px-5 py-5 lg:px-16',
          'xm:mt-0 md:mx-auto md:mt-16 md:w-[90%] xm: md:rounded-[50px] md:bg-brand-header md:backdrop-blur-[50px]'
        )}
      >
        <Link href='/' onClick={() => setIsMenuOpen(false)}>
          <div className='relative h-8 w-36 md:w-52'>
            <Image
              src='/assets/logo/bluewaterlab-logo.svg'
              alt='bluewater'
              className='object-contain'
              fill
            />
          </div>
        </Link>

        <div className='ml-auto text-white md:hidden'>
          <button onClick={toggleMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>

        <div
          className={cn(
            'hidden md:items-center lg:flex lg:justify-between lg:gap-2',
            {
              'absolute left-0 top-full flex w-full flex-col bg-black p-5 backdrop-blur-[50px] lg:bg-brand-header':
                isMenuOpen,
            }
          )}
        >
          {HEADER_LINKS.map((item) => (
            <Link
              key={`header-link-${item.url}`}
              href={item.url}
              className='font-raleway text-center md:text-left'
              onClick={() => setIsMenuOpen(false)}
            >
              <Button
                className={cn(
                  (item.title === 'Contact Us') ? 'bg-[linear-gradient(268.96deg,_#007CFF_22.98%,_#004A99_98.55%)]'
                    : (pathname.includes(item.url)) ? 'font-bold bg-none hover:bg-none'
                      : 'bg-none hover:bg-none hover:font-bold',
                )}
              >
                {item.title}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
