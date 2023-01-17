module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{ts,html,svelte,css}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};