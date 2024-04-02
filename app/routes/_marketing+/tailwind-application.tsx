import { useSearchParams } from '@remix-run/react'
import { useState } from 'react'
import Carousel, { type CarouselImage } from '#app/components/carousel'
import { XMark } from '#app/components/icons'
import ReaderPicker from '#app/components/tailwind-application/reader-picker'

export const READERS = {
	adam: {
		name: 'Adam',
		avatarUrl: '/img/adam.jpeg',
	},
	steve: {
		name: 'Steve',
		avatarUrl: '/img/steve.jpeg',
	},
	team: {
		name: 'Team',
		avatarUrl: '/img/tailwind-logo.jpg',
	},
}

const CAROUSEL_1_IMAGES: CarouselImage[] = [
	{
		title: 'Spine AI',
		src: '/img/tw/carousel-1/spine-ai.webp',
		alt: 'Spine AI Website Design',
		link: 'https://getspine.ai',
	},
	{
		title: 'State of Retention 2024',
		src: '/img/tw/carousel-1/sor-2024.webp',
		alt: 'State of Retention 2024 Website Design',
		link: 'https://churnkey.co/reports/state-of-retention-2024/',
	},
	{
		title: 'Plot App',
		src: '/img/tw/carousel-1/plot-app.webp',
		alt: 'Plot App Website Design',
		link: 'https://getplot.app',
	},
	{
		title: 'Powered by Tiny',
		src: '/img/tw/carousel-1/powered-by-tiny.webp',
		alt: 'Powered by Tiny Website Design',
		link: 'https://poweredbytiny.com',
	},
]

export type Reader = keyof typeof READERS

export default function TailwindRoute() {
	const [searchParams] = useSearchParams()
	const urlReader = searchParams.get('reader')
	const isValidReader =
		urlReader && READERS[urlReader as keyof typeof READERS] ? true : false
	const [reader, setReader] = useState<Reader>(
		isValidReader ? (urlReader as Reader) : 'adam',
	)

	return (
		<div className="relative min-h-screen text-white">
			<header className="sticky top-0 z-0 flex h-[40vh] min-h-72 w-full items-center justify-center">
				{
					<div className="absolute -top-56 left-1/2 -translate-x-1/2 md:w-[1440px]">
						<img
							src="/img/tw-logo-bg.webp"
							alt=""
							className="absolute inset-0 w-full opacity-65"
						/>
						<img
							src="/img/tw-logo-bg.webp"
							alt=""
							className="absolute inset-0 w-full opacity-30 blur-xl"
						/>
					</div>
				}
				{/* <TailwindBackground className="tailwind-logo absolute-center z-0 w-[1440px] text-background" /> */}

				<div className="z-10 mb-24 flex items-center gap-2">
					<h1
						className="bg-gradient-to-b from-white to-gray-300 bg-clip-text font-display text-5xl font-normal text-transparent drop-shadow-[0_0px_1px_rgb(0_0_0)]
"
					>
						Abraham
						<span className="sr-only">x Tailwind css</span>
					</h1>
					<XMark className=" size-5 shrink-0 text-gray-600" />
					<img
						src="/img/tailwindcss-logotype-white 1.webp"
						alt="tailwind logotype"
						className="w-full max-w-[276px]"
					/>
				</div>
			</header>
			<section className="relative -mt-32 flex flex-col pb-28">
				<div className="sticky top-4 z-20 flex justify-center">
					<ReaderPicker reader={reader} setReader={setReader} />
				</div>
				<div className="prose prose-zinc relative z-10 m-auto  mt-6 w-full max-w-screen-md rounded-md bg-white p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_5%)_,_0_1px_2px_0_rgb(0_0_0_/_10%)_,_inset_0_0.5px_0_0.5px_rgb(255_255_255_/_5%),_inset_0_-1px_3px_0px_rgb(0_0_0_/_5%)] dark:prose-invert prose-headings:font-display prose-headings:font-normal dark:bg-gray-900 md:p-12">
					<p>Hi {READERS[reader].name}!</p>
					<p>
						Rather than boring you with a formal intro and a Linkedin do-over
						with all my job titles, I thought I'd make a short video to
						introduce myself 👇
					</p>
					<span>[video]</span>
					<p>
						Humble-bragging in video is too awkward, though. So, here are a few
						reasons why I think I'd make a great addition to Tailwind's team:
					</p>
					<h2>1. Tailwind got me to stop using Figma</h2>
					<p>
						After being a long-time addict to Figma and drawing rectangles for
						15 years, Tailwind helped me see the light. For my upcoming app,
						I've done all the design in code, and it's awesome. Figma has been
						struggling to catch up ever since. The design is coming together
						nicely too (if I say so myself):
					</p>
					<p>[ pics ]</p>
					<h2>2. I've done stuff</h2>
					<p>
						I have an unconventional trajectory as a founder and a consultant.
						I've worked in all areas of marketing, design, visual development,
						and now code. I even ran a Youtube channel for a bit!
					</p>
					<p>
						So, besides having strong suspicions of ADHD, I'm a generalist with
						experience across multiple industries and in all kinds of areas of
						execution.
					</p>
					<p>
						I'll bring to the team a broad vision, strong empathy with many
						different types of Tailwind's users and potential applications, and
						a wide range of skills (from paid ads, copywriting, product design,
						photography, videography...) on top of my frontend and backend dev
						skills.
					</p>
					<h2>3. A strong passion for craft</h2>
					<p>
						This one is a bit more esoteric and hard to explain, but I hope it
						comes through on this page. I'm really grateful for the work you've
						done with Tailwind, and helping you build the tools that make
						building high-quality looking sites _this_ enjoyable would be a
						highlight in my career.
					</p>
					<h2>Bonus: Why would enjoy working with me</h2>
					<p>
						<strong>Adam:</strong> I like to pick up heavy things too. We can
						riff about nerdy lifting science stuff or bumper plates brands.
						<strong>Steve:</strong> We're design soulmates. Here's my platform
						next to Catalyst's latest dashboards 🔥 [pics of plot & catalyst
						previews]
						<strong>Team:</strong> I don't know you yet, but I can promise you
						this: If you have an idea and I can help you bring it to life with
						design (or code), I'll help you get it done or die trying. Just
						kidding, but I will try very hard.
					</p>
				</div>
				<Carousel images={CAROUSEL_1_IMAGES} className="my-12" />
				<div className="fixed bottom-0 z-20 h-28 w-full bg-gradient-to-t from-gray-950" />
			</section>
		</div>
	)
}
