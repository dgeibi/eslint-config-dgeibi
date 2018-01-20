module.exports = {
  extends: ['./rules/base', './rules/preact', 'eslint-config-prettier'].map(
    require.resolve
  ),
  env: {
    browser: true,
  },
}
