module.exports = {
  extends: [require.resolve('.'), require.resolve('./rules/preact')],
  env: {
    browser: true,
  },
}
