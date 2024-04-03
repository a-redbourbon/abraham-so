import { type Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import radixPlugin from 'tailwindcss-radix'
import { marketingPreset } from './app/routes/_marketing+/tailwind-preset'
import { extendedTheme } from './app/utils/extended-theme.ts'

const flattenColorPalette =
	require('tailwindcss/lib/util/flattenColorPalette').default

export default {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: extendedTheme,
	},
	presets: [marketingPreset],
	plugins: [
		animatePlugin,
		radixPlugin,
		addVariablesForColors,
		require('@tailwindcss/typography'),
		require('@headlessui/tailwindcss'),
	],
} satisfies Config

// @ts-expect-error no-any
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme('colors'))
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
	)

	addBase({
		':root': newVars,
	})
}
