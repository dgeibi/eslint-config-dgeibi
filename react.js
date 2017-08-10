module.exports = {
  extends: [require.resolve('.'), 'standard-react'],
  env: {
    browser: true,
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
  },
}
