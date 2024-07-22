import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-blaze-500 text-white shadow font-normal hover:bg-blaze-500/90',
				primary:
					'bg-coral-600 text-white shadow font-normal hover:bg-coral-600/90',
				outline:
					'border border-coral-600 bg-transparent shadow-sm hover:bg-coral-600 text-coral-600 hover:text-white',
				secondary:
					'bg-gray-200 text-foreground shadow-sm hover:bg-gray-200/60',
				ghost: 'hover:bg-gray-100 hover:text-foreground',
				link: 'underline-offset-4 text-gray-500 underline font-normal hover:text-blaze-600',
			},
			size: {
				sm: 'h-10 rounded-md px-4 py-2 !text-md',
				default: 'h-12 px-6 rounded-lg py-3',
				lg: 'h-14 rounded-lg px-8 py-4',
				'icon-sm': 'h-[48px] w-[48px]',
				'icon-md': 'h-[60px] w-[60px]',
				icon: 'h-[72px] w-[72px]',
				custom: '',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
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
	},
)
Button.displayName = 'Button'

export { Button, buttonVariants }
