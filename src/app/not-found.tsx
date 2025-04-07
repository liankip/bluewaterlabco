import Link from 'next/link'
import { Button } from '../components/ui/button'

/**
 * @returns Page Not Found page interface
 */
export default async function NotFound() {
  return (
    <div className='relative h-[calc(100vh)] pt-32 bg-black flex flex-col gap-4 justify-center items-center'>
      <h1 className='text-[5rem] text-white font-bold leading-none z-10'>404</h1>
      <h1 className='uppercase text-2xl text-white z-10'>Page Not Found</h1>
      <Link href='/'>
        <Button variant='active' className='w-36 mt-2 rounded-full'>
          Go to Home
        </Button>
      </Link>
    </div>
  )
}
