module.exports = {
	purge: ['./components/**/*.js', './pages/**/*.js'],
	plugins: [
		require('@tailwindcss/typography'), 
	],
	theme: {
		extend: {
			colors: {
				'dswd-blue': '#B4E4F9',
				'dswd-darkblue': '#112240',
				success: '#0070f3',
				cyan: '#79FFE1',
			},
			spacing: {
				28: '7rem',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem',
			},
			boxShadow: {
				sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
				md: '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
		},
	},
}
