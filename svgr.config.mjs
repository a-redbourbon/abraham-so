export default {
	plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
	typescript: true,
	dimensions: false,
	replaceAttrValues: {
		'#000': 'currentColor',
	},
	svgProps: {
		className: '{props.className}',
		role: 'img',
	},
}
