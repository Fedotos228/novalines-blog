'use client'

import { articles } from '@/constants/articles'
import Article from '../elements/Article'
import { Pagination } from './Pagination'

export default function BlogGrid() {
	return (
		<>
			<div className='grid grid-cols-3 mb-9 gap-5 max-[1023px]:grid-cols-2 max-xs:grid-cols-1'>
				{articles.map((article, index) => (
					<Article key={index} article={article} />
				))}
			</div>

			<Pagination />
		</>
	)
}
