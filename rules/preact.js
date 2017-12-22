const jsx = require('./jsx')

module.exports = {
  plugins: jsx.plugins,
  rules: jsx.rules,
  settings: {
    react: {
      pragma: 'h',
    },
  },
}
