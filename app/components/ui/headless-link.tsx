import { DataInteractive as HeadlessDataInteractive } from '@headlessui/react'
import { Link as RemixLink, NavLink, type LinkProps } from '@remix-run/react'
import React from 'react'

export const Link = React.forwardRef(function Link(
	props: { href: string | LinkProps['to']; isNav: Boolean } & Omit<
		LinkProps,
		'to'
	>,
	ref: React.ForwardedRef<HTMLAnchorElement>,
) {
	return (
		<HeadlessDataInteractive>
			{props.isNav ? (
				<NavLink {...props} to={props.href} ref={ref} />
			) : (
				<RemixLink {...props} to={props.href} ref={ref} />
			)}
		</HeadlessDataInteractive>
	)
})
