export default function Hero() {
	return (
		<div className='hero relative h-[540px]'>
			<img
				src='/hero.jpeg'
				alt='hero'
				className='absolute inset-0 w-full h-full object-cover object-bottom'
			/>

			<div className='absolute inset-0 bg-black/80'></div>

			<div className='w-full px-4 max-w-[90%] md:max-w-[850px] xs:pt-0 pt-10 absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
				<h1 className='text-white text-center italic mb-3 text-4xl md:text-6xl max-w-full '>
					Read <span className='text-blaze-500'>Novalines</span> Blog!
				</h1>
				<p className='text-white text-center sm:text-base text-sm leading-6'>
					Novalines blog provides you with the best articles on
					trucking topics. We have a team of writers who are
					passionate about writing and sharing their knowledge with
					others. Our goal is to provide you with high-quality content
					that is informative, engaging, and entertaining. Whether you
					are looking for tips on how to improve your health, advice
					on how to start a business, or information on the latest
					technology trends, you can find it all here at Novalines. So
					why wait? Start exploring our blog today and discover
					something new!{' '}
				</p>
			</div>
		</div>
	)
}
