import { DataInteractive as HeadlessDataInteractive } from '@headlessui/react'
import { Link as RemixLink, NavLink, type LinkProps } from '@remix-run/react'
import React from 'react'

export const Link = React.forwardRef(function Link(
	{
		href,
		isNav,
		...props
	}: { href: string | LinkProps['to']; isNav: Boolean } & Omit<LinkProps, 'to'>,
	ref: React.ForwardedRef<HTMLAnchorElement>,
) {
	return (
		<HeadlessDataInteractive>
			{isNav ? (
				<NavLink {...props} to={href} ref={ref} />
			) : (
				<RemixLink {...props} to={href} ref={ref} />
			)}
		</HeadlessDataInteractive>
	)
})
