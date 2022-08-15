/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      backgroundImage:{
        'evening-sky': "url(./media/evening-sky.png)",
      }
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
	prefix: 'ctp',
	defaultFlavor: 'mocha'
    }),
  ],
}
