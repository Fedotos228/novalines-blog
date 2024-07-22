'use client'

import { INavigationItem } from '@/constants/constants.types'
import { NAVIGATION_MENU } from '@/constants/navigation'
import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useWindowSize } from 'react-use'
import styles from './header.module.scss'

export default function Navigation() {
	const [menuOpen, setMenuOpen] = useState<boolean>(false)
	const { width } = useWindowSize()
	const pathname = usePathname()

	return (
		<>
			{width > 767 && (
				<nav className='flex gap-6 lg:gap-12'>
					{NAVIGATION_MENU.map((item: INavigationItem) => (
						<Link
							key={item.id}
							href={item.href || '/'}
							onClick={() => setMenuOpen(false)}
							className={`${styles.navItem} ${
								pathname === item.href ? styles.active : ''
							}`}
						>
							{item.title}
						</Link>
					))}
				</nav>
			)}

			{width <= 767 && (
				<>
					<nav
						className={`fixed top-0 h-screen -right-96 bottom-0 max-w-96 z-20 w-full !bg-white transition-all duration-300 ${
							menuOpen ? '!right-0' : ''
						}`}
					>
						<button onClick={() => setMenuOpen(false)}>
							<XIcon className='absolute w-7 h-7 top-5 right-5' />
						</button>

						<div className='flex flex-col gap-6 p-6 pt-10'>
							{NAVIGATION_MENU.map((item: INavigationItem) => (
								<Link
									key={item.id}
									href={item.href || '/'}
									onClick={() => setMenuOpen(false)}
									className={`${styles.navItem} ${
										item.href === pathname
											? styles.active
											: ''
									}`}
								>
									{item.title}
								</Link>
							))}
						</div>
					</nav>
					<div
						className={`fixed top-0 left-0 h-screen w-screen bg-black/50 z-10 transition-all duration-300 ${
							menuOpen
								? 'opacity-100 visible'
								: 'opacity-0 invisible'
						}`}
						onClick={() => setMenuOpen(false)}
					></div>
				</>
			)}

			{width <= 767 && (
				<div className='flex gap-3 lg:gap-4'>
					{/* <Language /> */}
					<button onClick={() => setMenuOpen(true)}>
						<MenuIcon className='text-foreground w-8 h-8 ml-2 cursor-pointer text-white' />
					</button>
				</div>
			)}
		</>
	)
}
