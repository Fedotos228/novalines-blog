'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useWindowSize } from 'react-use'
import Navigation from './Navigation'

export default function Header() {
	const { width } = useWindowSize()

	const logoSizes = (): LogoSizes => {
		if (width < 1024 && width >= 767) {
			return {
				width: 130,
				height: 44,
			}
		} else if (width < 767) {
			return {
				width: 96,
				height: 30,
			}
		}

		return {
			width: 156,
			height: 60,
		}
	}

	return (
		<header className='w-full z-30 top-0 shadow-md py-6 fixed bg-black/40 backdrop-blur-sm'>
			<div className='container mx-auto flex px-4 items-center justify-between'>
				<Link href='/'>
					<Image
						src='/images/logos/logo.svg'
						alt='logo'
						priority
						className='aspect-auto'
						width={logoSizes().width}
						height={logoSizes().height}
					/>
				</Link>

				<Navigation />
			</div>
		</header>
	)
}
