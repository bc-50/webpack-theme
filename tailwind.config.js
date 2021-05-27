module.exports = {

  purge: {
    // enabled: false,
    mode: 'jit',
    // layers: ['base', 'components', 'utilities'],
    content: [
      './src/**/*.js',
      './shortcodes/**/*.php',
      './**/*.php',
      './*.php',
      './safelist.txt',
    ],
    // options: {
    //   safelist: ['order-1', 'order-2', 'order-3', 'order-4', 'order-5', 'order-6', 'order-7', 'order-8', 'order-9', 'order-10', 'order-11', 'order-12'],
    //   // whitelistPatterns: [/(vc_lg:)(m|p)*[^ "'\W]+/g]
    // }
  },
  variants: {
    fontWeight: ['responsive', 'first', 'last'],
    margin: ['responsive', 'first', 'last', 'even'],
    padding: ['responsive', 'first', 'last'],
    borderWidth: ['responsive', 'first', 'last'],
    textAlign: ['responsive', 'first', 'last'],
    justifyContent: ['responsive', 'first', 'last'],
    zIndex: ['responsive', 'hover'],
  },
  theme: {
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif'],
    },
    extend: {
      scale: {
        '200': '2',
      },
      zIndex: {
        'n-1': -1,
        '100': 100,
      },
      flex: {
        'quarter': '1 1 25%',
        'one': '1 1 auto',
        'two': '2 1 auto',
      },
      colors: {
        'orange': '#A5873D',
        'gray': '#34495e',
        'sienna': '#987324',
        'brown': '#303030'
      },
      'opacity': {
        '60': '0.6'
      },
      letterSpacing: {
        'more-wide': '.2em',
        'wider': '0em',
        'slight-tight': '-0.015em',
        'less-wide': '0.15em'
      },
      lineHeight: {
        '4': '1em',
        '5': '1.25em',
        '6': '1.5em',
        '7': '1.75em',
        '8': '2em',
      },
      flexGrow: {
        '2': 2,
      },
      inset: {
        '1/2': '50%',
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': 'calc(100%/3)',
        '1/4': '25%',
        '1/5': '20%',
        '1/6': 'calc(100%/6)',
        'line': '8.5em',
        'btn-sm': '10.5em',
        'btn': '11.25em',
        'btn-lg': '14.625em',
        'btn-xl': '15.9em',
        'text': '185px',
      },
      maxHeight: {
        0: '0',
        none: 'none',
        full: '100%',
      },
      boxShadow: {
        DEFAULT: '0 10px 20px rgba(0, 0, 0, 0.16)',
        dark: '0 10px 20px rgba(0, 0, 0, 0.9)',
        more: '0 10px 20px rgba(0, 10, 20, 0.16)',
      },
      borderWidth: {
        '10': '10px',
        '20': '20px',
      },
      scale: {
        '100-n': '-1',
      },
      spacing: {
        '2px': '2px',
        '1': '0.25em',
        '2': '0.5em',
        '3': '0.75em',
        '4': '1em',
        '5': '1.25em',
        '6': '1.5em',
        '7': '1.75em',
        '8': '2em',
        '9': '2.25em',
        '10': '2.5em',
        '11': '2.75em',
        '12': '3em',
        '13': '3.25em',
        '14': '3.5em',
        '15': '3.75em',
        '16': '4em',
        '17': '4.25em',
        '18': '4.5em',
        '19': '4.75em',
        '20': '5em',
        '21': '5.25em',
        '22': '5.5em',
        '23': '5.75em',
        '24': '6em',
        '25': '6.25em',
        '26': '6.5em',
        '27': '6.75em',
        '28': '7em',
        '29': '7.25em',
        '30': '7.5em',
        '31': '7.75em',
        '32': '8em',
        '33': '8.25em',
        '34': '8.5em',
        '35': '8.75em',
        '36': '9em',
        '37': '9.25em',
        '38': '9.5em',
        '39': '9.75em',
        '40': '10em',
        '41': '10.25em',
        '42': '10.5em',
        '43': '10.75em',
        '44': '11em',
        '45': '11.25em',
        '46': '11.5em',
        '47': '11.75em',
        '48': '12em',
        '49': '12.25em',
        '50': '12.5em',
        '51': '12.75em',
        '52': '13em',
        '53': '13.25em',
        '54': '13.5em',
        '55': '13.75em',
        '56': '14em',
        '57': '14.25em',
        '58': '14.5em',
        '59': '14.75em',
        '60': '15em',
        '61': '15.25em',
        '62': '15.5em',
        '63': '15.75em',
        '64': '16em',
        '65': '16.25em',
        '66': '16.5em',
        '67': '16.75em',
        '68': '17em',
        '69': '17.25em',
        '70': '17.5em',
        '71': '17.75em',
        '72': '18em',
        '73': '18.25em',
        '74': '18.5em',
        '75': '18.75em',
        '76': '19em',
        '77': '19.25em',
        '78': '19.5em',
        '82': '20.5em',
        '110': '27.5em',
        '124': '31em',
        '125': '31.25em',
        '126': '31.5em',
      },
    },
    fontSize: {
      '10': '.5em',
      '12': '.65em',
      '14': '.8em',
      '15': '0.937em',
      '16': '1em',
      '18': '1.13em',
      '20': '1.25em',
      '22': '1.38em',
      '24': '1.5em',
      '26': '1.63em',
      '28': '1.75em',
      '30': '1.87em',
      '32': '2em',
      '34': '2.13em',
      '36': '2.25em',
      '40': '2.5em',
      '44': '2.75em',
      '48': '3em',
      '60': '3.75em',
      '64': '4em',
      '70': '4.38em',
      '100': '5.25em',
    },
    container: {
      center: true,
      padding: '15px'
    },
    screens: {
      'xxm': {
        'min': '414px'
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
      'lg': {
        'min': '992px'
      },
      'xl': {
        'min': '1200px'
      },
      '2xl': {
        'min': '1450px'
      },
      'xxl': {
        'min': '1670px'
      },
      'xmm': {
        'max': '469px'
      },
      'smm': {
        'max': '639px'
      },
      'lgm': {
        'max': '1023px'
      },
    },

  }
}