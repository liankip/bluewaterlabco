import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: { max: '575px' },
      },
      boxShadow: {
        accordion: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        radial:
          'radial-gradient(89.84% 50% at 50% 50%, #0E4F94 0%, #000000 81.06%)',
      },
      colors: {
        brand: {
          header: '#1D202F',
          darkblue: '#0E4C8E',
          blue: '#247FF1',
          lightgray: '#F5F5F5',
          yellow: '#FFC042',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        raleway: ['var(--font-raleway)', 'sans-serif'],
        plusJakartaSans: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
      },
      fontSize: {
        md: '15px',
      },
    },
  },
  plugins: [],
} satisfies Config
