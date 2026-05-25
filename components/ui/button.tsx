import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-mulish font-semibold transition-all duration-300 ease-louis focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-bistrot text-creme hover:bg-bistrot-soft hover:scale-[1.02] shadow-[0_16px_36px_-16px_rgba(19,32,23,0.7)]',
        honey:
          'bg-miel text-bistrot-deep hover:bg-miel-light hover:scale-[1.02] shadow-[0_16px_36px_-16px_rgba(168,132,47,0.6)]',
        outline:
          'border border-bistrot/40 text-bistrot hover:border-miel hover:text-miel-deep bg-transparent',
        ghostLight:
          'border border-creme/35 text-creme hover:border-miel hover:text-miel-light bg-transparent',
      },
      size: {
        default: 'h-12 px-7 text-[14px] tracking-wide',
        lg: 'h-14 px-9 text-[15px] tracking-wide',
        sm: 'h-10 px-5 text-[13px]',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
