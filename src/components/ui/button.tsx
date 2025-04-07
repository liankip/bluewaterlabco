import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-gray-400',
  {
    variants: {
      variant: {
        default:
          'shadow-md bg-transparent text-white hover:bg-[linear-gradient(268.96deg,_#007CFF_22.98%,_#004A99_98.55%)] hover:brightness-125',
        active:
          'shadow-md text-white bg-[linear-gradient(268.96deg,_#007CFF_22.98%,_#004A99_98.55%)] hover:brightness-125',
        destructive:
          'shadow-md bg-brand-red text-destructive-foreground hover:bg-brand-red/90',
        outline:
          'shadow-md border border-white text-white button-outline-gradient hover:brightness-125',
        secondary:
          'shadow-md bg-brand-lightblue text-white hover:bg-brand-lightblue/90',
        ghost:
          'text-black hover:bg-accent hover:text-accent-foreground',
        link:
          'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-3.5 py-3 rounded-3xl font-normal',
        sm: 'h-9 rounded-3xl px-3',
        lg: 'h-11 rounded-3xl px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
