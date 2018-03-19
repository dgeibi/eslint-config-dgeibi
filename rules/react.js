const { rules } = require('./jsx')

module.exports = {
  rules: Object.assign({ 'react/no-unknown-property': 'error' }, rules),
}
