/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2962B3',
        secondary: '#1e4c8a'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'slide-up-slow': 'slide-up 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#334155',
            backgroundColor: '#ffffff',
            'a:not(h1 a, h2 a, h3 a, h4 a)': { 
              color: '#2962B3',
              textDecoration: 'none',
              fontWeight: '500',
              borderBottom: '1px solid rgba(41, 98, 179, 0.2)',
              transition: 'all 0.2s',
              '&:hover': {
                color: '#1e4a8f',
                borderBottomColor: '#2962B3'
              }
            },
            'h1 a, h2 a, h3 a, h4 a': {
              color: 'inherit',
              textDecoration: 'none',
              borderBottom: 'none'
            },
            h1: { 
              color: '#2962B3',
              fontSize: '2.5rem',
              lineHeight: '1.2',
              letterSpacing: '-0.025em',
              marginBottom: '2rem',
              borderBottom: '3px solid #2962B3',
              paddingBottom: '0.5rem',
              display: 'inline-block'
            },
            h2: { 
              color: '#2962B3',
              fontSize: '2rem',
              lineHeight: '1.3',
              letterSpacing: '-0.025em',
              marginTop: '3rem',
              marginBottom: '1.5rem',
              borderBottom: '2px solid rgba(41, 98, 179, 0.7)',
              paddingBottom: '0.5rem',
              display: 'inline-block'
            },
            h3: { 
              color: '#2962B3',
              fontSize: '1.5rem',
              lineHeight: '1.4',
              marginTop: '2.5rem',
              marginBottom: '1rem'
            },
            h4: { 
              color: '#2962B3',
              fontSize: '1.25rem',
              lineHeight: '1.4',
              marginTop: '2rem',
              marginBottom: '0.75rem',
              fontWeight: '600'
            },
            'h1, h2, h3, h4': {
              fontWeight: '700',
              'scroll-margin-top': '100px',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            code: {
              color: '#2962B3',
              backgroundColor: '#f8fafc',
              fontWeight: '400',
              fontSize: '0.875em',
              borderRadius: '0.25rem',
              padding: '0.2em 0.4em',
              border: '1px solid #e2e8f0',
            },
            pre: {
              backgroundColor: '#f8fafc',
              color: '#334155',
              border: '1px solid #e2e8f0',
              borderRadius: '0.5rem',
              padding: '1.25rem',
              margin: '1.5rem 0',
              overflow: 'auto',
              code: {
                color: '#334155',
                backgroundColor: 'transparent',
                border: 'none',
                padding: '0',
                fontSize: '0.875em',
                fontWeight: '400',
                display: 'inline-block',
                minWidth: '100%',
                lineHeight: '1.7142857',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
              },
              '.hljs-keyword, .hljs-built_in': {
                color: '#2962B3',
                fontWeight: '500'
              },
              '.hljs-string': {
                color: '#0a7e5c'
              },
              '.hljs-comment': {
                color: '#64748b',
                fontStyle: 'italic'
              },
              '.hljs-function': {
                color: '#b91c1c'
              },
              '.hljs-property': {
                color: '#2962B3'
              },
              '.hljs-number': {
                color: '#0e7490'
              },
              '.hljs-operator, .hljs-punctuation': {
                color: '#475569'
              }
            },
            code: {
              color: '#2962B3',
              backgroundColor: '#f3f4f6',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
              fontWeight: '400',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
            },
            'ul > li::marker': {
              color: '#475569',
            },
            'ol > li::marker': {
              color: '#475569',
              fontWeight: '600',
            },
            hr: {
              borderColor: 'transparent',
              marginTop: '3rem',
              marginBottom: '3rem',
              background: 'linear-gradient(to right, #2962B3 0%, transparent 100%)',
              opacity: '0.15',
              height: '1px',
            },
            strong: {
              color: '#1e293b',
              fontWeight: '600',
            },
            blockquote: {
              color: '#1e293b',
              borderLeftWidth: '4px',
              borderLeftColor: '#2962B3',
              backgroundColor: 'rgba(41, 98, 179, 0.05)',
              quotes: 'none',
              '& p': {
                fontStyle: 'normal'
              },
              '& em': {
                fontStyle: 'normal'
              },
              padding: '1.25rem 1.5rem',
              borderRadius: '0.5rem',
              margin: '2rem 0',
              fontStyle: 'italic'
            },
            '.lead': {
              fontSize: '1.375rem',
              lineHeight: '1.75',
              marginTop: '1.5rem',
              marginBottom: '3rem',
              color: '#475569',
              fontWeight: '400',
              maxWidth: '70ch'
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')]
}
