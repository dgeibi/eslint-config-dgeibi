module.exports = {
  extends: [require.resolve('.'), 'standard-preact'],
  env: {
    browser: true,
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
  },
}
