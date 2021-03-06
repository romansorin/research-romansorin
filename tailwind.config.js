module.exports = {
  theme: {
    extend: {
      colors: {
        theme: {
          0: '#3f2afe',
          1: '#1401bc',
          2: '#6d5dfd',
          3: '#cdc7fe',
          4: '#9f94fe',
          5: '#7873f5',
          '5-.8': 'rgba(120, 115, 245, 0.8)'
        },
        text: {
          0: '#dddce5',
          1: '#54516c',
          '1-.75': 'rgba(84,81,109,0.75)',
          2: '#322d62',
          3: '#1b1b1c'
        },
        white: {
          0: '#ffffff',
          1: '#f6f9fc',
          2: '#ebe9ff'
        },
        invalid: '#fe3f2a',
        valid: '#3ecf8e',
        placeholder: 'rgba(84, 81, 108, 0.6)',
        disabled: 'rgba(84, 81, 108, 0.45);'
      },
      fontFamily: {
        main: 'Camphor'
      },
      borderRadius: {
        md: '.225rem'
      },
      boxShadow: {
        0: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
        1: '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);'
      }
    }
  },
  variants: {
    backgroundColor: [
      'responsive',
      'first',
      'last',
      'even',
      'odd',
      'hover',
      'focus'
    ]
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.border-box': {
          boxSizing: 'border-box'
        }
      }

      addUtilities(newUtilities)
    }
  ]
}
