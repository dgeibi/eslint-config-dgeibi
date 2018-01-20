module.exports = {
  extends: ['./rules/base', './rules/react', 'eslint-config-prettier'].map(
    require.resolve
  ),
  env: {
    browser: true,
  },
}
