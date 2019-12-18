module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['standard', 'standard-react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'react/no-did-update-set-state': 'off'
  },
  settings: {
    'import/resolver': {
      alias: [
        ['Components', './src/components'],
        ['Firebase', './firebase'],
        ['Models', './src/models'],
        ['Icons', './src/icons'],
        ['Images', './src/images'],
        ['Pages', './src/pages'],
        ['Stories', './src/stories']
      ]
    }
  }
}
