module.exports = {
  presets: ['@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  ],
}
