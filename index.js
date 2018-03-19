module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel'],
  extends: [
    'eslint-config-airbnb-base',
    './rules/base',
    'eslint-config-prettier',
  ].map(require.resolve),
  env: {
    browser: true,
    es6: true,
  },
}
