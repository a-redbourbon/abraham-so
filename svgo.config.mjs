export default {
	plugins: [
		{
			name: 'convertColors',
			params: {
				currentColor: true,
			},
		},
		{
			name: 'preset-default',
			params: {
				overrides: {
					removeViewBox: false,
				},
			},
		},
	],
}
