import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bright-teal': '#30A7A0',
        'bright-teal-hover': '#2A948A',
        'bright-teal-active': '#247F75',
        'blue-gray': '#6D7F8B',
        'warm-brown': '#8B6F47',
        'forest-green': '#24512B',
        'sage-green': '#88A097',
        'slate-gray': '#3E4F5C',
        'light-slate': '#7B8A93',
        'burnt-orange': '#CC5500',
        'peach-orange': '#FFCC99',
        'apricot': '#FBB982',
        'amber-orange': '#FFBF00',
        'vibrant-blue-gray': '#164e82',
        'vibrant-sage-green': '#0c726b'
      },
    },
  },
  plugins: [],
}
export default config
