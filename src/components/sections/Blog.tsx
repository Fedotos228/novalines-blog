import BlogGrid from '../blocks/BlogGrid'
import { Button } from '../ui/button'

export default function Blog() {
	return (
		<section>
			<div className='container mx-auto'>
				<div className='flex items-center gap-3 justify-center mb-8 hidden'>
					<Button>All</Button>
					<Button variant='outline'>Design</Button>
					<Button variant='outline'>Development</Button>
					<Button variant='outline'>Business</Button>
				</div>
				<BlogGrid />
			</div>
		</section>
	)
}
