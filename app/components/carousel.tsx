import { ArrowUpRightIcon } from '@heroicons/react/16/solid'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import {
	AnimatePresence,
	MotionConfig,
	motion,
	type Transition,
	useMotionValue,
} from 'framer-motion'
import { useState } from 'react'
import { cn } from '#app/utils/misc'
import { Button } from './ui/button'

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
	const [index, setIndex] = useState<number>(0)

	const margin = 5
	const transition: Transition = { duration: 0.7, ease: [0.32, 0.72, 0, 1] }

	const dragX = useMotionValue(0)

	const DRAG_BUFFER = 25

	const onDragEnd = () => {
		const x = dragX.get()

		if (x > DRAG_BUFFER && index > 0) {
			const nextIndex = index - 1
			setIndex(nextIndex)
			console.log('index', index)
		}
		if (x <= -DRAG_BUFFER && index < images.length - 1) {
			const nextIndex = index + 1
			setIndex(nextIndex)
			console.log('index', index)
		}
	}

	return (
		<MotionConfig transition={transition}>
			<div className={cn('relative isolate w-full', className)}>
				<div className="pb-1/2 h-96 w-full overflow-hidden p-px">
					<div className="relative z-10 flex h-96">
						<motion.div
							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
							dragMomentum={false}
							animate={{ translateX: `-${index * 100 + margin * index}%` }}
							className="relative flex w-3/4 pb-1 sm:w-[calc(50%-(1.25%))]"
							style={{ x: dragX }}
							onDragEnd={onDragEnd}
						>
							{images.map((image, i) => (
								<div
									key={image.src}
									className="relative flex h-full w-full shrink-0 flex-col overflow-hidden rounded  ring-1 ring-white/10"
									style={{ marginRight: `${margin}%` }}
								>
									<button
										onClick={() => {
											setIndex(i)
										}}
										className="w-full grow overflow-hidden"
									>
										<img
											src={image.src}
											alt={image.alt}
											className={cn(
												'pointer-events-none w-full object-cover align-top',
											)}
										/>
									</button>
									<div className="flex h-12 shrink-0 items-center p-2 pl-3 text-sm ">
										{image.title}
										{image.link && (
											<Button
												href={image.link}
												target="blank"
												size="xs"
												className="ml-auto"
												outline
											>
												Visit
												<ArrowUpRightIcon />
											</Button>
										)}
									</div>
								</div>
							))}
						</motion.div>
					</div>
				</div>
				{index > 0 && (
					<AnimatePresence>
						<motion.button
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.7 }}
							exit={{ opacity: 0, pointerEvents: 'none' }}
							whileHover={{ opacity: 1 }}
							className="absolute left-2 top-1/2 z-20 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 mix-blend-difference md:-left-8"
							onClick={() => setIndex(index - 1)}
						>
							<ArrowLeftIcon className="size-5 text-white/50" />
						</motion.button>
					</AnimatePresence>
				)}
				{index < images.length - 1 && (
					<AnimatePresence>
						<motion.button
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.7 }}
							exit={{ opacity: 0, pointerEvents: 'none' }}
							whileHover={{ opacity: 1 }}
							className="absolute right-2 top-1/2 z-20 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 mix-blend-difference transition-colors hover:bg-white/20 md:-right-8"
							onClick={() => setIndex(index + 1)}
						>
							<ArrowRightIcon className="size-5 text-white/50" />
						</motion.button>
					</AnimatePresence>
				)}
			</div>
		</MotionConfig>
	)
}
