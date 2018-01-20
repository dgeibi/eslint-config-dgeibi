module.exports = {
  extends: require.resolve('eslint-config-airbnb-base'),
  parser: 'babel-eslint',
  plugins: ['babel'],
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
  },
}
