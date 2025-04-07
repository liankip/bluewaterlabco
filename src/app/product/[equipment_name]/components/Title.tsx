import Image from 'next/image'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { PRODUCT } from '../data/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'

export default function Title({ equipment_name }: { equipment_name: string }) {
  return (
    <div className='relative w-full h-[375px] content-center bg-radial md:pl-[5%] text-white md:h-[700px] md:pt-16 xs:flex xs:flex-col xs:items-center'>
      <div className='w-full md:w-[45%] md:space-y-10'>
        <Breadcrumb className='xs:hidden'>
          <BreadcrumbList className='text-base text-[#A1A1A1]'>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/product'>Product</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>{PRODUCT[equipment_name]?.title}</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className='md:hidden absolute left-4 md:left-8 xs:pt-24'>
          <Link
            href='/product'
            className='flex items-center text-xs text-[#A1A1A1]'
          >
            <FaChevronLeft className='mr-2' /> Back
          </Link>
        </div>

        <p className='font-raleway font-semibold text-2xl md:text-8xl xs:text-center xs:pt-32'>
          {equipment_name === 'daf'
            ? 'Dissolved Air Flotation'
            : 'AHL Surface Aerator'}
        </p>
      </div>

      <Image
        src={
          equipment_name === 'daf'
            ? '/assets/img/product/equipments/daf.svg'
            : '/assets/img/product/equipments/ahl-surface-aerator.svg'
        }
        alt={equipment_name}
        width={0}
        height={0}
        className={cn(
          'absolute z-10 object-contain',
          equipment_name === 'daf'
            ? 'xs:-bottom-20 md:-bottom-32 -right-32 h-[82.5%] md:h-[90%] w-[95%] md:w-auto xs:left-1/2 xs:-translate-x-1/2 xs:transform'
            : 'xs:-bottom-7 bottom-6 right-8 h-[70%] w-[75%] md:w-auto xs:left-1/2 xs:-translate-x-1/2 xs:transform'
        )}
      />
    </div>
  )
}
