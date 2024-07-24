import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const SingleIntroduction = ({ className }: Props) => {
	return (
		<div
			className={cn(
				'h-[540px] mb-12 relative flex items-center',
				className,
			)}
			style={{
				background:
					'url("/images/hero.jpeg") 50% 50% / cover no-repeat',
			}}
		>
			<div className='fluid-container pt-14'>
				<h1 className='uppercase text-white z-10 !max-w-full'>
					SHIP WITH NOVA LINES: MOST COMMON TYPES OF FLATBED LOADS
				</h1>
			</div>

			<div className='absolute inset-0 bg-black/80'></div>
		</div>
	)
}
