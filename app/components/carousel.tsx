import { cn } from '#app/utils/misc'

export interface CarouselImage {
	src: string
	alt: string
	title: string
	link?: string
}

export default function Carousel({
	images,
	className,
}: {
	images: CarouselImage[]
	className?: string
}) {
	return <div className={cn('w-full bg-red-50', className)}>hi</div>
}
