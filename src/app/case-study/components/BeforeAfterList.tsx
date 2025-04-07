'use client'

import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

import BeforeAutomation from './before-after-contents/BeforeAutomation'
import AfterAutomation from './before-after-contents/AfterAutomation'
import DetailDOAnalysis from './before-after-contents/DetailDOAnalysis'
import DetailEnergyConsumptionAnalysis from './before-after-contents/DetailEnergyConsumptionAnalysis'

const TAB_CONTENT: { title: string, description: string, content: any }[] = [
  {
    title: 'DO & PM Meter Before Automation',
    description: 'Understanding the Baseline for DO & PM meter',
    content: <BeforeAutomation />,
  },
  {
    title: 'DO & PM Meter After Automation',
    description: 'Understanding the Baseline for DO & PM meter ',
    content: <AfterAutomation />,
  },
  {
    title: 'Detailed DO Meter Analysis',
    description: 'Overview of Daily DO Metrics',
    content: <DetailDOAnalysis />,
  },
  {
    title: 'Detailed Energy Consumption Analysis',
    description: 'Overview of Daily Power Metrics',
    content: <DetailEnergyConsumptionAnalysis />,
  },
]

export default function BeforeAfterList() {
  const [openedItems, setOpenedItems] = useState<string[]>([])

  return (
    <div className='xs:mb-10 md:mb-32 px-[5%]'>
      <Accordion
        type='multiple'
        value={openedItems}
        onValueChange={(values) => setOpenedItems(values)}
        className='w-full space-y-5'
      >
        {TAB_CONTENT.map((tab, idx) => (
          <AccordionItem
            key={`before-after-list-content-${idx}`}
            value={tab.title}
            className={cn('border-none rounded-xl', openedItems.includes(tab.title) ? 'shadow-accordion' : '')}
          >
            <AccordionTrigger
              className={cn(
                'group px-4 md:pl-14 md:pr-8 py-4 rounded-xl hover:no-underline',
                openedItems.includes(tab.title) ? '' : 'shadow-accordion',
              )}
              chevronCSS={openedItems.includes(tab.title) ? 'text-brand-blue' : ''}
            >
              <div className='text-left group-hover:scale-[1.025]'>
                <p className='font-semibold text-sm md:text-2xl bg-gradient-to-r from-black from-40% via-[#247ff1] to-[#247ff1] bg-clip-text text-transparent'>
                  {tab.title}
                </p>
                <p className='text-xs md:text-base'>{tab.description}</p>
              </div>
            </AccordionTrigger>

            <AccordionContent className='md:px-14 md:pt-10 md:pb-14'>
              {tab.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
