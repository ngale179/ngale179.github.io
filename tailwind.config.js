const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/*.html',
    './src/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      blue: '#3498DB',
      blacklist: '#434955'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      gridAutoColumns: {
        '2fr': 'minmax(0, 5fr)',
      }
    },
    screens: {
      'mobile': '320px',
      'tablet': '640px',
      'laptop': '970px',
      'desktop': '1170px'
    },
    flex: {
      auto: '1 1 auto'
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  },
  prefix: 'mgi_',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ],
  //darkMode: 'media',//Dark Mode
  container: {
    center: true
  },
}
