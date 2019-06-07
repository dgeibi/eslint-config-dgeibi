module.exports = {
  parser: 'babel-eslint',
  plugins: ['react'],
  extends: [
    'eslint-config-airbnb-base',
    './rules/base',
    './rules/react',
    'eslint-config-prettier',
    'eslint-config-prettier/react',
  ].map(require.resolve),
  env: {
    browser: true,
    es6: true,
  },
}
