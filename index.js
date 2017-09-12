module.exports = {
  extends: ['airbnb-base'],
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
