module.exports = {
  extends: [require.resolve('.'), require.resolve('./rules/react')],
  env: {
    browser: true,
  },
}
