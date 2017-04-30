module.exports = {
  extends: [
    'airbnb-base'
  ],
  plugins: [
    'no-async-without-await'
  ],
  rules: {
    'no-async-without-await/no-async-without-await': 1,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never'
      }
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false
      }
    ]
  }
}
