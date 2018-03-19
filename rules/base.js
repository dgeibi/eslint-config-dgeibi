module.exports = {
  root: true,
  rules: {
    'class-methods-use-this': 'off',
    'no-lonely-if': 'off',
    'no-else-return': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/first': 'error',
    'no-await-in-loop': 'off',
    'no-prototype-builtins': 'off',
    'default-case': 'warn',
    'global-require': 'off',
    'prefer-destructuring': 'off',
    'no-underscore-dangle': 'off',
  },
}
