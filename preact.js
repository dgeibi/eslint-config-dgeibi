module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel', 'react'],
  extends: [
    'eslint-config-airbnb-base',
    './rules/base',
    './rules/preact',
    'eslint-config-prettier',
    'eslint-config-prettier/react',
  ].map(require.resolve),
  env: {
    browser: true,
    es6: true,
  },
}
