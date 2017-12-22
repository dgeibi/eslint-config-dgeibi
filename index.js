module.exports = {
  extends: [
    'best-practices',
    'errors',
    'node',
    'variables',
    'es6',
    'imports',
  ].map(key => require.resolve(`eslint-config-airbnb-base/rules/${key}`)),
  parser: 'babel-eslint',
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
