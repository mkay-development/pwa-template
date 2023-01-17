module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{ts,html,svelte,css}'
	],
	swDest: 'src/static/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};