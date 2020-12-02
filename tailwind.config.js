module.exports = {

  purge: {
    enabled: false,
    content: [
      './src/**/*.js',
      './shortcodes/**/*.php',
      './**/*.php',
      './*.php',
    ],

    options: {
      whitelist: [],
      // whitelistPatterns: [/(vc_lg:)(m|p)*[^ "'\W]+/g]
    }
  },


  variants: {
    fontWeight: ['responsive', 'first', 'last'],
    margin: ['responsive', 'first', 'last', 'even'],
    padding: ['responsive', 'first', 'last'],
    borderWidth: ['responsive', 'first', 'last'],
    textAlign: ['responsive', 'first', 'last'],
    justifyContent: ['responsive', 'first', 'last'],
  },
  theme: {

    extend: {
      colors: {
        'green': '#17A651',
        'grey': '#414141',
        'g-grey': '#707070',
      },
      'opacity': {
        '60': '0.6'
      },
      letterSpacing: {
        'more-wide': '.2em'
      },
      spacing: {
        '1': '0.25em',
        '2': '0.5em',
        '3': '0.75em',
        '4': '1em',
        '6': '1.5em',
        '8': '2em',
        '8-r': '2rem',
        '9': '2.25rem',
        '10': '2.5em',
        '11': '2.75em',
        '12': '3em',
        'r-12': '3rem',
        '13': '3.13em',
        '20': '4em',
        '21': '4.38em',
        '22': '4.75em',
        '20': '4em',
        '23': '5em',
        '23-5': '5.5em',
        '24': '6em',
        '26': '7em',
        '31': '9em',
        '40-5': '10.5em',
        'r-70': '20rem',
      },
    },
    maxHeight: {
      '0': '0',
      'none': 'none',
      'open': '300px',
    },
    boxShadow: {
      sh: '0 10px 20px rgba(0, 0, 0, 0.9)',
      norm: '0 10px 20px rgba(0, 0, 0, 0.16)',
    },
    fontSize: {
      '10': '.5em',
      '12': '.65em',
      '14': '.8em',
      '16': '1em',
      '18': '1.13em',
      '20': '1.25em',
      '22': '1.38em',
      '24': '1.5em',
      '26': '1.63em',
      '28': '1.75em',
      '32': '2em',
      '34': '2.13em',
      '36': '2.25em',
      '40': '2.5em',
      '44': '2.75em',
      '48': '3em',
      '70': '4.38em',
      '100': '5.25em',
    },
    container: {
      center: true,
      padding: '15px'
    },

    screens: {
      'lgm': {
        'max': '1023px'
      },
      'xm': {
        'min': '545px'
      },
      'sm': {
        'min': '640px'
      },
      'md': {
        'min': '768px'
      },
      'xl': {
        'min': '1200px'
      },
      'lg': {
        'min': '992px'
      },
      'xxl': {
        'min': '1640px'
      },
      'smm': {
        'max': '639px'
      },

      'xmm': {
        'max': '469px'
      },
    },

  }
}