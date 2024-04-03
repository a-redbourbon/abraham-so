import { Disclosure, Transition } from '@headlessui/react'
import { BoltIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useSearchParams } from '@remix-run/react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import Carousel, { type CarouselImage } from '#app/components/carousel'
import { XMark } from '#app/components/icons'
import ReaderPicker from '#app/components/tailwind-application/reader-picker'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

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
		title: 'Plot App',
		src: '/img/tw/carousel-1/plot-app.webp',
		alt: 'Plot App Website Design',
		link: 'https://getplot.app',
	},
	{
		title: 'Vapor.Codes',
		src: '/img/tw/carousel-1/vapor-codes.webp',
		alt: 'Vapor.Codes Website Redesign',
	},
	{
		title: 'Spine AI',
		src: '/img/tw/carousel-1/spine-ai.webp',
		alt: 'Spine AI Website Design',
		link: 'https://getspine.ai',
	},

	{
		title: 'Powered by Tiny',
		src: '/img/tw/carousel-1/powered-by-tiny.webp',
		alt: 'Powered by Tiny Website Design',
		link: 'https://poweredbytiny.com',
	},
	{
		title: 'State of Retention 2024',
		src: '/img/tw/carousel-1/state-of-retention.webp',
		alt: 'State of Retention 2024 Website Design',
		link: 'https://churnkey.co/reports/state-of-retention-2024/',
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
	const headerMarkerRef = useRef<HTMLDivElement>(null)

	const isHeaderInView = useInView(headerMarkerRef, { margin: '-110px' })

	return (
		<main className="relative min-h-screen w-full px-3 text-white">
			<header className="sticky top-0 z-0 -ml-3 flex h-[40vh] min-h-72 w-dvw items-center justify-center overflow-hidden md:overflow-visible">
				{
					<div className="absolute -top-24 left-1/2 w-[768px] -translate-x-1/2 opacity-40 saturate-0 md:-top-56 md:w-[1440px]">
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

				<div
					className={clsx(
						'z-10 mb-24 flex flex-col items-center gap-1 opacity-0 transition-opacity duration-500 md:flex-row md:gap-2',
						isHeaderInView && 'opacity-100',
					)}
				>
					<h1
						className="bg-gradient-to-b from-white to-gray-300 bg-clip-text font-display text-4xl font-normal leading-none text-transparent drop-shadow-[0_0px_1px_rgb(0_0_0)] md:text-5xl
"
					>
						Abraham
						<span className="sr-only">x Tailwind css</span>
					</h1>
					<XMark className=" size-5 shrink-0 text-gray-600" />
					<img
						src="/img/tailwindcss-logotype-white 1.webp"
						alt="tailwind logotype"
						className="mt-1 w-3/4 max-w-[276px] md:mt-0 md:w-full"
					/>
				</div>
			</header>
			<section className="relative -mt-32 flex flex-col pb-28">
				<div
					className="pointer-events-none h-1 w-full"
					ref={headerMarkerRef}
					aria-hidden
					role="separator"
				/>
				<div className="sticky top-6 z-20 flex justify-center">
					<ReaderPicker reader={reader} setReader={setReader} />
				</div>
				<div className="prose prose-zinc relative z-10 m-auto mt-6  w-full max-w-screen-md rounded-lg bg-white p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_5%)_,_0_1px_2px_0_rgb(0_0_0_/_10%)_,_inset_0_0.5px_0_0.5px_rgb(255_255_255_/_5%),_inset_0_-1px_3px_0px_rgb(0_0_0_/_5%)] dark:prose-invert prose-headings:font-display prose-headings:text-xl prose-headings:font-normal dark:bg-gray-900 sm:p-12">
					<p>Hey {READERS[reader].name}!</p>
					<p>
						Rather than boring you with a formal intro and a Linkedin do-over
						with all my job titles, I thought I'd make a short video to
						introduce myself:
					</p>
					<LiteYouTubeEmbed
						id="Kaixc_9mclc"
						title="Abraham's application to Tailwind"
						poster="maxresdefault"
						webp={true}
						wrapperClass=" yt-lite rounded-md shadow-lg ring-1 ring-white/10 overflow-hidden"
					/>
					<p>
						With that out fo the way, here are a few reasons why I think I'd
						make a great addition to Tailwind's team:
					</p>
					<h2>1. Tailwind got me to stop using Figma</h2>
					<p>
						After being a long-time addict to Figma and drawing rectangles for
						the past 12 years, Tailwind helped me see the light. For an upcoming
						app I've been building, I've done all the design with Tailwind, in
						code. And it's awesome.
					</p>
					<p>Figma has been struggling to catch up ever since.</p>
					<Section1Graphics />
					<p>
						As a Design Engineer for Tailwind, I'd be able to help more
						designers take the plunge, and contribute to advance the tooling and
						resources to ease the transition.
					</p>
					<h2>2. I've done *a lot* of things</h2>
					<p>
						I have an unconventional trajectory as a founder and a consultant.
						I've worked in all areas of marketing, design, visual development,
						and now code. I even ran a Youtube channel for a bit!
					</p>
					<Carousel images={CAROUSEL_1_IMAGES} className="not-prose my-12" />
					<p>
						So, besides having strong suspicions of ADHD, I'm a generalist with
						experience across multiple industries (health, tech, finance,
						ecommerce, consumer and b2b SaaS, DevTools...)
					</p>
					<p>I'll bring to the team:</p>
					<ul>
						<li>A broad vision, owning each project like a founder would.</li>
						<li>
							Strong empathy with many different types of Tailwind's users and
							potential implementations after building marketing sites and
							products on so many different markets.
						</li>
						<li>
							A wide range of complementary skills: marketing, copywriting,
							product design, CRO, photography and videography on top of
							frontend development.
						</li>
					</ul>

					<h2>3. A strong passion for craft</h2>
					<p>
						This one is a bit more esoteric and hard to explain, but I hope it
						comes through on this page. I'm grateful for the work you've done
						with Tailwind, and helping you create the tools that make building
						high-quality looking sites _this_ enjoyable would be a highlight in
						my career.
					</p>
					<hr />
					<BonusSection reader={reader} />
				</div>

				<div className="mx-auto mt-12 max-w-screen-sm text-balance text-center text-sm text-gray-600">
					Disclaimer: Some parts of this page still need a liiiitle bit more
					polish. Ran out of time to submit. Changes may happen!
				</div>
				<div className="fixed -bottom-4 -left-[10vw] z-40 h-28 w-[120vw] bg-gradient-to-t from-gray-950 blur-sm" />
			</section>
		</main>
	)
}

function Section1Graphics() {
	return (
		<div className=" relative isolate flex w-full gap-4">
			<div className="relative z-0">
				<img
					loading="lazy"
					src="/img/tw/app-preview.webp"
					alt="Plot App preview screenshot"
					className=" w-full rounded-sm shadow-lg ring-4 ring-white/10"
				/>
			</div>
			<div className="not-prose absolute -right-8 -top-8 z-10 mt-6 w-48 rotate-3 rounded bg-gray-800 p-3 text-xs shadow-sm ring-1 ring-white/10">
				Now whenever I need to use Figma I'm stuck with editing screenshots of
				the app. Thanks a lot Tailwind... I think?
			</div>
		</div>
	)
}

function BonusSection({ reader }: { reader: Reader }) {
	return (
		<div className="pb-12 sm:pb-4">
			<Disclosure>
				<Disclosure.Button className="flex w-full items-center justify-between gap-2 ">
					<div className="flex items-center gap-2 prose-h2:m-0">
						<div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-gray-800 bg-white/[2%]">
							<BoltIcon className="size-4 shrink-0 text-gray-500 drop-shadow-sm" />
						</div>
						<h2 className="text-left">
							Bonus: Why would{' '}
							{reader === 'team' ? 'Team Tailwind' : READERS[reader].name} enjoy
							working with me?
						</h2>
					</div>
					<ChevronDownIcon className="size-6 shrink-0 text-gray-500 transition-transform duration-200 ui-open:-rotate-180" />
				</Disclosure.Button>
				<Transition
					enter="transition duration-100 ease-out"
					enterFrom="transform  opacity-0"
					enterTo="transform opacity-100"
					leave="transition duration-75 ease-in"
					leaveFrom="transform opacity-100"
					leaveTo="transform  opacity-0"
				>
					<Disclosure.Panel className="opacity-0 transition-opacity duration-300 ui-open:opacity-100">
						<BonusSectionContent reader={reader} />
					</Disclosure.Panel>
				</Transition>
			</Disclosure>
		</div>
	)
}

function BonusSectionContent({ reader }: { reader: Reader }) {
	switch (reader) {
		case 'adam':
			return (
				<div className="relative">
					<p>
						I like to pick up heavy things, too. We can riff about nerdy lifting
						science stuff or bumper plates brands for days.
					</p>
					<figure className="relative mx-auto w-4/5 ">
						<img
							loading="lazy"
							src="/img/tw/lifting.webp"
							alt="man doing squats"
							className="rounded shadow-sm ring-4 ring-white/10"
						/>
						<figcaption className="absolute -left-8 -top-8 z-10 mt-6 w-48 -rotate-6 rounded bg-gray-800 p-3 text-xs shadow-sm ring-1 ring-white/10">
							Dying while trying to get out of the hole. Coach wasn't impressed.
						</figcaption>
					</figure>
				</div>
			)
		case 'steve':
			return (
				<>
					<p>
						Saw that you rock a pothos in the office! I'm a plant dad, too. We
						can swap tips on how to keep them alive.
					</p>
					<div className="mt-10 flex justify-center -space-x-6">
						<figure className="relative mt-1 w-72 -rotate-3">
							<img
								loading="lazy"
								src="/img/tw/office.webp"
								alt="desk with a pothos plant hanging from a shelf"
								className="rounded shadow-sm ring-4 ring-white/10 "
							/>
						</figure>
						<figure className="relative w-72 rotate-2">
							<img
								loading="lazy"
								src="/img/tw/monstera.webp"
								alt="monstera plant in a pot"
								className="rounded shadow-lg ring-4 ring-white/10"
							/>
						</figure>
					</div>
				</>
			)
		case 'team':
			return (
				<>
					<p>I don't know you guys yet, but I can promise you this:</p>
					<p>
						If you have an idea and I can help you bring it to life with design
						(or code), I'll help you get it done or die trying.
					</p>
					<p>Just kidding. But I will try very hard, though.</p>
				</>
			)
	}
}
