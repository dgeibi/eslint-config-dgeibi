module.exports = {
  extends: ['airbnb-base'],
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    semi: ['error', 'never'],
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
  },
}
