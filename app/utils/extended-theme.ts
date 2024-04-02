import { type Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export const extendedTheme = {
	fontFamily: {
		serif: ['Redaction', ...defaultTheme.fontFamily.serif],
		display: ['Redaction-35', ...defaultTheme.fontFamily.sans],
	},
	colors: {
		gray: { ...colors.zinc, 925: 'hsl(240deg, 5.88%, 6.67%)' },

		background: 'hsl(var(--background))',
		text: {
			primary: 'hsl(var(--text-primary))',
			secondary: 'hsl(var(--text-secondary))',
		},
	},

	boxShadow: {
		popover:
			'0px 0px 3.6px rgba(0,0,0,.01),0px 0px 10px rgba(0,0,0,.01),0px 0px 24.1px rgba(0,0,0,.0125),0px 0px 80px rgba(0,0,0,.024)',
		toast:
			'0px 1px 2px rgb(0 0 0 / 2%), 0px 4px 16px -4px rgb(0 0 0 / 2%),0px 8px 24px -8px rgb(0 0 0 / 1%)',
	},
	keyframes: {
		scaleIn: {
			from: { opacity: '0', transform: 'scale(0.9)' },
			to: { opacity: '1', transform: 'scale(1)' },
		},
	},
} satisfies Config['theme']
