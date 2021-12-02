const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/*.html',
    './src/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      blue: '#3498DB',
      blacklist: '#434955',
      color1: "#1abc9c",
      color2: "#006b63",
      color3: "#336E7B",
      color4: "#e67e22",
      color5: "#ff6a30",
      color6: "#eaab00",
      color7: "#37479d",
      color8: "#3498db",
      color9: "#32c5d2",
      color10: "#5893dd",
      color11: "#e7505a",
      color12: "#cdb083"
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
      borderColor: ['focus-visible','focus'],
      opacity: ['disabled'],
      animation: ['hover', 'focus'],
      display: ["group-hover"]
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
