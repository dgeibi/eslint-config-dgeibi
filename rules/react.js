const jsx = require('./jsx')

module.exports = {
  plugins: jsx.plugins,
  rules: Object.assign({}, jsx.rules, { 'react/no-unknown-property': 'error' }),
}
