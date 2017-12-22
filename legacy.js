module.exports = {
  extends: [
    'best-practices',
    'errors',
    'node',
    'variables'
  ].map(key => require.resolve(`eslint-config-airbnb-base/rules/${key}`)),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'prefer-numeric-literals': 'off',
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }],
  }
};
