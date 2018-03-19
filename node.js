module.exports = {
  extends: ['./index'].map(require.resolve),
  rules: {
    'no-console': 'off',
    'no-param-reassign': ['error', { props: false }],
    'import/no-dynamic-require': 'off',
  },
  env: {
    browser: false,
    es6: true,
    node: true,
  },
}
