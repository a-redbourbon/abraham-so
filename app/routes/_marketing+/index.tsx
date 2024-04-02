import { Email, Github, Xcom } from '#app/components/icons'

export default function Index() {
	return (
		<main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
			<div className="prose prose-zinc mx-auto flex max-w-3xl flex-col dark:prose-invert prose-headings:mb-[0.5em] prose-headings:font-serif prose-headings:text-lg prose-headings:font-normal prose-a:decoration-gray-600 prose-a:decoration-dashed prose-a:decoration-1 prose-a:underline-offset-4">
				<header className="gap-1/2 flex flex-col">
					<span className="font-display text-lg text-text-primary">
						abraham aguilera
					</span>
					<h1 className="not-prose text-text-secondary">Design Engineer</h1>
				</header>
				<section className=" mt-6 flex flex-col">
					<h2>Now</h2>
					<p>
						I'm building <a href="https://getplot.app">Plot</a> a project
						tracking tool built for makers. I'm also the founder and creative
						director of{' '}
						<a href="https://redbourbon.co" target="blank">
							Red Bourbon
						</a>{' '}
						a marketing and product studio helping tech companies grow faster.
					</p>
				</section>
				<section className=" flex flex-col">
					<h2>Before</h2>
					<dl className="not-prose">
						<div className="py-3 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
							<dt className="text-sm leading-6 text-text-secondary">
								2018-2021
							</dt>
							<dd className="mt-1  leading-6 text-text-primary sm:col-span-4 sm:mt-0">
								Consultant and web developer.
							</dd>
						</div>
						<div className="py-3 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
							<dt className=" text-sm leading-6 text-text-secondary">
								2015-2018
							</dt>
							<dd className="mt-1  leading-6 text-text-primary sm:col-span-4 sm:mt-0">
								Founder at Soco Adventures.{' '}
								<span className="text-text-secondary">
									Venezuela's largest adventure travel agency.
								</span>
							</dd>
						</div>
						<div className="py-3 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
							<dt className=" text-sm leading-6 text-text-secondary">
								2011-2015
							</dt>
							<dd className="mt-1  leading-6 text-text-primary sm:col-span-4 sm:mt-0">
								Founder at Fitness Playbook.
								<span className="text-text-secondary">
									{' '}
									One of Latam's first science based fitness blogs.
								</span>
							</dd>
						</div>
					</dl>
				</section>
				<section className="-ml-1 mt-12 flex gap-1">
					<SocialLink href="https://x.com/abraguilera" name="x.com">
						<Xcom className="size-5" />
					</SocialLink>
					<SocialLink href="https://github.com/a-redbourbon" name="github">
						<Github className="size-5" />
					</SocialLink>
					<SocialLink name="email" href="mailto:abraham@redbourbon.co">
						<Email className="size-5" />
					</SocialLink>
				</section>
			</div>
		</main>
	)
}

function SocialLink({
	name,
	href,
	children,
}: {
	name: string
	href: string
	children: React.ReactNode
}) {
	return (
		<a
			href={href}
			className="flex size-7 items-center justify-center rounded text-text-secondary transition-colors hover:bg-gray-900"
		>
			{children}
			<span className="sr-only">{name}</span>
		</a>
	)
}
