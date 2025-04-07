'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ContactUsForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [successMessage, setSuccessMessage] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    const data = new FormData(e.target)
    const form: any = {}
    data.forEach((value, key) => form[key] = value)

    try {
      const res = await fetch('https://cms-api.bluewaterlab.co/v1/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      const result = await res.json()
      
      if (result?.message) {
        setSuccessMessage(result.message)
        setErrorMessage('')
        e.target.reset()
      }
    } catch (error: any) {
      setSuccessMessage('')
      setErrorMessage(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='relative z-30 flex flex-col md:flex-row bg-brand-lightgray px-[7.5%] py-12 md:py-16'>
      <div className='flex-1 space-y-4 pr-[5%] xs:text-center'>
        <p
          className={cn(
            'font-raleway text-xl md:text-5xl font-semibold',
            'bg-gradient-to-r from-black from-25% via-[#247ff1] to-[#247ff1] bg-clip-text pb-2 text-transparent'
          )}
        >
          Talk to Our Team
        </p>

        <p className='xs:text-xs'>
          We'd love to hear from you! If you have any questions, suggestions, or
          need help, don't hesitate to contact us. Our team is ready to help
          you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className='flex-1 space-y-12 xs:pt-8'>
        <div className='flex xs:flex-col md:flex-row justify-between gap-4'>
          <div className='flex w-[45%] xs:w-full flex-col gap-2'>
            <label className='font-raleway text-base xs:text-xs font-semibold'>
              First Name<span className='text-sm text-red-500'>*</span>
            </label>

            <input
              type='text'
              name='firstname'
              className='w-full border-b border-brand-darkblue bg-transparent p-1 text-base focus:border-brand-blue focus:outline-none'
              required
            />
          </div>
          <div className='w-[10%]'></div>
          <div className='flex w-[45%] xs:w-full flex-col gap-2'>
            <label className='font-raleway text-base xs:text-xs font-semibold'>Last Name</label>

            <input
              type='text'
              name='lastname'
              className='w-full border-b border-brand-darkblue bg-transparent p-1 text-base focus:border-brand-blue focus:outline-none'
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-raleway text-base xs:text-xs font-semibold'>
            Email<span className='text-sm text-red-500'>*</span>
          </label>

          <input
            type='email'
            name='email'
            className='w-full border-b border-brand-darkblue bg-transparent p-1 text-base focus:border-brand-blue focus:outline-none'
            required
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-raleway text-base xs:text-xs font-semibold'>Message</label>

          <textarea
            rows={3}
            name='message'
            className='w-full border-b border-brand-darkblue bg-transparent p-1 text-base focus:border-brand-blue focus:outline-none'
          />
        </div>

        <Button
          type='submit'
          className='xs:w-full min-w-[140px] min-h-[48px] rounded-lg bg-brand-blue text-base'
          disabled={isLoading}
        >
          {isLoading ? <img src='/assets/gif/loading.gif' alt='loading' className='w-6 h-6' /> : 'SUBMIT'}
        </Button>

        {(successMessage || errorMessage) && (
          <p className={cn('font-semibold text-base xs:text-xs !mt-2', successMessage ? 'text-gray-500' : errorMessage ? 'text-red-500' : '')}>
            {successMessage || errorMessage}
          </p>
        )}
      </form>
    </div>
  )
}
