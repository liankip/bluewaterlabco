import Link from 'next/link'
import Image from 'next/image'
import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6'
import { LuMail } from 'react-icons/lu'

const QUICK_LINKS: { title: string; url: string }[] = [
  { title: 'Home', url: '/' },
  { title: 'About Us', url: '/about-us' },
  { title: 'Product', url: '/product' },
  { title: 'Case Study', url: '/case-study' },
]

export default function Footer() {
  return (
    <div className='font-raleway w-full bg-black text-white'>
      <div className='flex flex-col px-4 py-12 md:flex-row'>
        <Image
          src='/assets/logo/bluewaterlab-logo.svg'
          alt='bluewater'
          width={0}
          height={0}
          className='mx-auto block h-auto w-48 object-contain md:hidden'
        />

        <div className='order-3 mt-10 flex w-full flex-col justify-between gap-8 pb-5 md:order-1 md:ml-[5%] md:mt-0 md:w-[25%] md:gap-24'>
          <Image
            src='/assets/logo/bluewaterlab-logo.svg'
            alt='bluewater'
            width={0}
            height={0}
            className='hidden h-auto w-48 object-contain md:block xl:w-56'
          />

          <div className='order-3 md:order-1'>
            <div className='space-y-4'>
              <p className='text-center text-base font-bold md:text-left'>
                Contact Us
              </p>
              <p className='flex items-center justify-center gap-1.5 text-sm md:justify-normal'>
                <LuMail className='text-lg' />
                info@bluewaterlab.co
              </p>
            </div>
          </div>
        </div>

        <div className='order-2 space-y-10 md:order-2 md:w-[70%] md:pl-5'>
          <div className='space-y-2'>
            <p className='text-center text-base font-bold md:text-left'>
              Singapore Office
            </p>

            <p className='flex items-center justify-center gap-1.5 text-sm md:justify-normal'>
              <FaLocationDot className='text-xs' />8 Burn Road, #07-07, Trivex,
              Singapore 369977
            </p>
          </div>

          <div className='space-y-10 md:space-y-2'>
            <p className='text-center text-base font-bold md:text-left'>
              Indonesia Office
            </p>

            <div className='!mt-2 flex flex-col gap-6 md:!mb-6 md:flex-row'>
              <div className='w-full md:w-[47.5%]'>
                <p className='flex justify-center gap-2 text-center text-sm font-semibold md:block md:text-left'>
                  <FaLocationDot className='mt-1 block text-xs md:hidden' />
                  Medan
                </p>
                <div className='flex justify-center gap-1.5 text-center md:justify-normal md:text-left'>
                  <FaLocationDot className='mt-1 hidden text-xs md:block' />
                  <div className='space-y-0.5 text-sm'>
                    <p>Jl. R.A Kartini II, No. 11 Madras Hulu 20152 Medan,</p>
                    <p>Sumatera Utara</p>
                  </div>
                </div>
              </div>

              <div className='w-full md:w-[47.5%]'>
                <p className='flex justify-center gap-2 text-center text-sm font-semibold md:block md:text-left'>
                  <FaLocationDot className='mt-1 block text-xs md:hidden' />
                  Surabaya
                </p>
                <div className='flex justify-center gap-1.5 text-center md:justify-normal md:text-left'>
                  <FaLocationDot className='mt-1 hidden text-xs md:block' />
                  <div className='space-y-0.5 text-sm'>
                    <p>Jl. Wonorejo Permai Selatan V CC-376</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-6 md:flex-row'>
              <div className='w-full md:w-[47.5%]'>
                <p className='flex justify-center gap-2 text-center text-sm font-semibold md:block md:text-left'>
                  <FaLocationDot className='mt-1 block text-xs md:hidden' />
                  Jakarta
                </p>
                <div className='flex justify-center gap-1.5 text-center md:justify-normal md:text-left'>
                  <FaLocationDot className='mt-1 hidden text-xs md:block' />
                  <div className='space-y-0.5 text-sm'>
                    <p>Gold Coast Office Tower, Tower Liberty 7F</p>
                    <p>Jl. Pantai Indah Kapuk Boulevard, RT.6/RW.2,</p>
                    <p>Kamal Muara, Penjaringan, Jakarta Utara,</p>
                    <p>DKI Jakarta 14470</p>
                  </div>
                </div>
              </div>

              <div className='w-full md:w-[47.5%]'>
                <p className='flex justify-center gap-2 text-center text-sm font-semibold md:block md:text-left'>
                  <FaLocationDot className='mt-1 block text-xs md:hidden' />
                  Laboratorium
                </p>
                <div className='flex justify-center gap-1.5 text-center md:justify-normal md:text-left'>
                  <FaLocationDot className='mt-1 hidden text-xs md:block' />
                  <div className='space-y-0.5 text-sm'>
                    <p>Ruko Sentra Niaga Blok J No. 2 Duri Kosambi,</p>
                    <p>Cengkareng, Jakarta Barat 11750</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='order-1 my-10 w-full space-y-3 md:order-3 md:my-0 md:w-[20%] sm:text-center xs:text-center'>
          <p className='text-base font-bold'>Quick Links</p>

          {QUICK_LINKS.map((link) => (
            <Link
              key={`footer-quick-link-${link.url}`}
              href={link.url}
              className='block hover:underline'
            >
              <p className='text-md'>{link.title}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className='h-[1px] w-full bg-white'></div>

      <p className='pb-8 pt-5 text-center text-xs md:text-base'>
        Bluewater Lab Pte. Ltd © All rights reserved Copyrights 2025
      </p>
    </div>
  )
}
