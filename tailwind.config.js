/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,jsx}",
	  "./components/**/*.{js,jsx}",
	  "./app/**/*.{js,jsx}",
	  "./src/**/*.{js,jsx}",
	],
	theme: {
	  container: {
		center: true,
		padding: "15px",
		screens: {  
		  "2xl": "1440px",
		  sm: '640px',
		  md: '768px',
		  lg: '960px',
		  xl: '1200px',
		},
	  },
	  extend: {
		colors: {
		  primary: '#0a0a0a',
		  accent: {
			DEFAULT: '#6d1e7c',
			hover: '#aa5cb6',
		  },
		  'text-default': '#ecc1ef', 
		},
		fontFamily: { 
		  primary: "var(--font-jetbrainsMono)",
		},
		keyframes: {
		  "accordion-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordion-content-height)" },
		  },   
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" }, 
			to: { height: "0" },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.3s ease-out",
		  "accordion-up": "accordion-up 0.3s ease-out",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  